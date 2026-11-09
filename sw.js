/* Service worker de tdlfi.space : le site reste consultable hors connexion.
   À CHAQUE PUSH, changer VERSION : c'est ce qui déclenche le bandeau « Nouvelle version »
   chez ceux qui ont installé l'application, et le nettoyage de l'ancien cache. */
const VERSION = "2026-11-09.1";
const CACHE = "td-site-" + VERSION;
const RUNTIME = "td-runtime-v1";   // polices et bibliothèques externes, stables d'une version à l'autre
const CORE = ["/", "/fiches-data.js", "/manifest.json", "/favicon.svg", "/favicon-32.png",
  "/icon-192.png", "/icon-512.png", "/icon-maskable-512.png", "/apple-touch-icon.png"];
const EXTERNES = ["https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"];

self.addEventListener("install", e => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    await c.addAll(CORE.map(u => new Request(u, {cache: "reload"})));
    const r = await caches.open(RUNTIME);
    await Promise.all(EXTERNES.map(u => r.add(u).catch(() => {})));
  })());
});

self.addEventListener("activate", e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k.startsWith("td-site-") && k !== CACHE) await caches.delete(k);
    await self.clients.claim();
  })());
});

self.addEventListener("message", e => { if (e.data === "SKIP_WAITING") self.skipWaiting(); });

/* Réseau d'abord (contenu toujours à jour en ligne), cache si le réseau échoue ou traîne plus de 4 s. */
async function networkFirst(req, key) {
  const c = await caches.open(CACHE);
  try {
    const res = await Promise.race([
      fetch(req),
      new Promise((_, ko) => setTimeout(() => ko(new Error("lent")), 4000))
    ]);
    if (res && res.ok) c.put(key || req, res.clone());
    return res;
  } catch (err) {
    const hit = await c.match(key || req, {ignoreSearch: true});
    if (hit) return hit;
    throw err;
  }
}

/* Cache d'abord pour ce qui ne change pas (polices, bibliothèques versionnées). */
async function cacheFirst(req) {
  const c = await caches.open(RUNTIME);
  const hit = await c.match(req);
  if (hit) return hit;
  const res = await fetch(req);
  if (res && (res.ok || res.type === "opaque")) c.put(req, res.clone());
  return res;
}

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin === location.origin) {
    if (url.pathname.startsWith("/_vercel/")) return;
    if (req.mode === "navigate") { e.respondWith(networkFirst(req, "/")); return; }
    e.respondWith(networkFirst(req));
    return;
  }
  if (url.hostname === "fonts.gstatic.com" || url.hostname === "cdnjs.cloudflare.com") { e.respondWith(cacheFirst(req)); return; }
  if (url.hostname === "fonts.googleapis.com") {
    e.respondWith((async () => {
      const c = await caches.open(RUNTIME);
      try { const res = await fetch(req); if (res.ok || res.type === "opaque") c.put(req, res.clone()); return res; }
      catch (err) { const hit = await c.match(req); if (hit) return hit; throw err; }
    })());
  }
});
