/* ---------- Contenu des fiches natives (par opposition au code du site, dans index.html) ----------
   Un objet par fiche, clé = "matière-numéro" (même m/n que dans VOLUMES/LEX, ex. "ses-01") :
     titre   : intitulé affiché en haut du bloc
     vocab   : [{en, fr}]                 — vocabulaire et expressions utiles (langues)
     auteurs : [{n, dates?, d}]           — auteurs et repères
     dates   : ["texte du repère", ...]   — dates et chiffres à retenir, en badges
     pieges  : [{t, d, flag?}]            — pièges à éviter (flag:true = signalé en rouge, ex. une
                                             divergence avec le professeur à faire vérifier)
     corrige : [{q, r}]                   — pistes de réponse à un dossier/questionnaire, numérotées
     dissert : "texte"                    — repères pour la dissertation / l'épreuve composée /
                                             l'expression écrite et orale, selon la matière
   Les notions clés ne sont PAS ici : elles viennent du tableau LEX (index.html), filtré par
   matière + numéro de fiche, pour ne jamais dupliquer une définition à deux endroits. */
const FICHE_DATA = {
  "ses-01": {
    titre: "Partie I · Les analyses de la structure sociale",
    m: "ses", n: "01",
    auteurs: [
      {n:"Karl Marx", dates:"1818–1883", d:"Classes sociales, conflit bourgeoisie/prolétariat, lutte des classes."},
      {n:"Max Weber", dates:"1864–1920", d:"Analyse multidimensionnelle par trois ordres indépendants (classe, statut, parti)."},
      {n:"Henri Mendras", d:"Théorie de la moyennisation ; image de la société en toupie plutôt qu'en pyramide."},
      {n:"Pierre Bourdieu", d:"Capitaux économique, culturel et social ; classes supérieures, moyennes et populaires, sans exclure des distances intra-classes (exemple donné en cours : patrons plutôt à droite, cadres publics ou professeurs plutôt à gauche, au sein même des classes supérieures)."},
      {n:"Monique et Michel Pinçon-Charlot", d:"La bourgeoisie française reste une classe en soi et pour soi, avec des stratégies de reproduction (rallyes réservés, endogamie sociale, concentration dans l'ouest parisien)."},
      {n:"Danièle Linhart", d:"L'individualisation au travail passe notamment par les entretiens individuels, qui remplacent des négociations autrefois plus collectives."}
    ],
    dates: ["Karl Marx : 1818–1883", "Max Weber : 1864–1920", "Trente Glorieuses (après 1945) : contexte de la moyennisation décrite par Mendras"],
    pieges: [
      {t:"Classe en soi / classe pour soi", d:"Ne pas confondre : la classe en soi est un groupe objectif, sans conscience nécessaire ; la classe pour soi est un groupe conscient et organisé."},
      {t:"Distance interclasses / distance intra-classe", d:"Elles jouent en sens inverse dans le débat sur la pertinence des classes sociales : une hausse de la distance interclasses renforce cette pertinence, une hausse de la distance intra-classe l'affaiblit."},
      {t:"Marx / Weber", d:"Marx : réaliste, unidimensionnelle, seul critère économique. Weber : nominaliste, multidimensionnelle, trois ordres indépendants — partager une classe économique n'implique pas de conscience collective, contrairement à la classe pour soi chez Marx."},
      {t:"Divergence repérée le 14 septembre 2026", d:"Un exercice de synthèse avait rattaché l'exemple d'un président de la République et d'un professeur (tous deux cadres, revenu et prestige différents) à la distance interclasses, alors qu'il illustre en réalité une distance intra-classe. À reclarifier avec le professeur si besoin.", flag:true}
    ],
    dissert: "Sujet type : peut-on encore parler de classes sociales dans la société française actuelle ? Plan en deux parties : d'abord la remise en cause (moyennisation, individualisation, hausse de la distance intra-classe) ; ensuite la persistance (retour des inégalités depuis la fin du XXe siècle, bourgeoisie comme classe pour soi selon Pinçon-Charlot, analyse par les capitaux de Bourdieu). Toujours distinguer précisément classe sociale (Marx), classe et groupe de statut (Weber), classe en soi et classe pour soi, distance interclasses et distance intra-classe. Si le sujet le permet, articuler l'analyse en classes sociales avec les rapports sociaux de genre."
  },

  "ses-02": {
    titre: "Facteurs et évolutions de la structure sociale",
    m: "ses", n: "02",
    auteurs: [
      {n:"Insee", d:"Créateur de la nomenclature des PCS en 1954 (Jean Porte) ; source de la plupart des données chiffrées du chapitre."}
    ],
    dates: [
      "1954 : création des PCS par l'Insee, refondue en 1982, révisée en 2003, 2017 et 2020 sans changer les grandes catégories.",
      "1959 : scolarité obligatoire portée à 16 ans.",
      "1968 : création des baccalauréats technologiques.",
      "1985 : création des baccalauréats professionnels.",
      "2017 : l'Île-de-France regroupe 19 % de la population française mais 43 % des hauts revenus et 30 % des cadres, contre 18 % au niveau national ; 43,5 % des habitants des quartiers prioritaires étaient pauvres."
    ],
    pieges: [
      {t:"Revenu / patrimoine", d:"Ne pas confondre le revenu (un flux, perçu sur une période) et le patrimoine (un stock, détenu à un instant donné)."},
      {t:"Écart interdéciles / rapport interdéciles", d:"L'écart interdéciles (D9 moins D1) est une mesure absolue, en euros ; le rapport interdéciles (D9 sur D1) est une mesure relative, un coefficient."},
      {t:"Lire correctement le rapport D9/D1", d:"Il compare le revenu plancher des 10 % les plus riches au revenu plafond des 10 % les plus pauvres, pas le revenu moyen de ces deux groupes. La formulation de l'exercice du 24 septembre (« le revenu des 10 % les plus riches est 3,4 fois plus important que celui des 10 % les plus pauvres ») est donc un raccourci, à vérifier avec la professeure si elle l'accepte en devoir.", flag:true},
      {t:"Salarisation, tertiarisation, féminisation de l'emploi", d:"Trois évolutions distinctes de la population active depuis 1950, qui se combinent sans se recouvrir."},
      {t:"Huit PCS ou six ?", d:"Le professeur a cité huit PCS (nomenclature complète, actifs et inactifs) ; certains documents n'en citent que six (population active seule) : deux présentations correctes de la même nomenclature, pas une contradiction."}
    ],
    dissert: "Partie 2 de l'épreuve composée (1 heure, 6 points) : la question 1 (2 points) est une lecture du document ; la question 2 suit la méthode AEI (affirmer, expliquer, exemple tiré du document) — par exemple affirmer que le revenu est un facteur de hiérarchisation sociale, l'expliquer par les inégalités de revenu, puis citer le rapport interdécile ou l'indice de Gini du document. Pour une étude de document (courbe de Lorenz, graphique d'évolution des inégalités), toujours comparer à la droite d'équirépartition et interpréter un ratio ou un indice plutôt que de le recopier. Sujet type : la catégorie socioprofessionnelle suffit-elle à rendre compte des inégalités en France ? Mobiliser plusieurs facteurs (PCS, revenu, diplôme, cycle de vie, composition familiale, sexe, lieu de résidence) plutôt qu'un seul critère, et relier ces facteurs aux évolutions de la structure socioprofessionnelle (salarisation, tertiarisation, féminisation, élévation du niveau de qualification)."
  },

  "ses-03": {
    titre: "EC1.1 · Le corrigé (classes sociales, Marx et Weber)",
    m: "ses", n: "03",
    auteurs: [
      {n:"Karl Marx", dates:"1818–1883", d:"Approche réaliste et unidimensionnelle : les classes existent objectivement, définies par le seul critère économique (bourgeoisie/prolétariat)."},
      {n:"Max Weber", dates:"1864–1920", d:"Approche nominaliste et multidimensionnelle : trois ordres indépendants (classe économique, statut, parti) ; les classes sont des catégories construites par le sociologue."},
      {n:"Henri Mendras", d:"Moyennisation : constitution d'une vaste classe moyenne pendant les Trente Glorieuses, portée par la baisse des inégalités de revenu, la consommation de masse, la démocratisation scolaire et le déclin des ouvriers au profit des employés."}
    ],
    dates: ["Karl Marx : 1818–1883", "Max Weber : 1864–1920"],
    pieges: [
      {t:"Distance intra-classe / distance interclasses", d:"La hausse de la distance intra-classe et la baisse de la distance interclasses jouent toutes deux contre la pertinence des classes sociales, mais ce sont deux mouvements distincts et de sens contraire : ne pas les confondre. Exemples du corrigé pour la distance intra-classe : employé administratif contre employé de commerce, ouvrier stable contre ouvrier intérimaire."},
      {t:"Réalisme/unidimensionnel (Marx) et nominalisme/multidimensionnel (Weber)", d:"Ne pas les confondre : chez Weber, les trois ordres sont indépendants, un fort prestige n'implique pas une forte richesse."},
      {t:"Un argument non développé dans le corrigé", d:"Le corrigé se termine par une ligne non développée (l'existence de la classe inférieure comme argument supplémentaire) : non complétée ici puisque la professeure ne la développe pas elle-même, à vérifier avec elle si ce troisième argument est attendu au contrôle.", flag:true}
    ],
    dissert: "Sujet type : peut-on encore parler de classes sociales dans la société française actuelle ? Plan en trois temps : pertinence historique (Marx, Weber) ; remise en cause (distance intra-classe, moyennisation, individualisation, genre) ; persistance (retour des inégalités, grande bourgeoisie comme classe pour soi). Comparer Marx et Weber sur quatre points : dimension, sphère d'analyse, nature du groupe, type de rapport. Illustrer avec les exemples du corrigé : employé administratif contre employé de commerce, plafond de verre, grande bourgeoisie. Rapports sociaux de genre : hiérarchisation homme-femme qui traverse chaque classe — cumul des désavantages dans les catégories populaires (précarité, temps partiel, postes subordonnés), plafond de verre dans les catégories supérieures malgré de meilleurs résultats scolaires en moyenne."
  },

  "hggsp-01": {
    titre: "Environnement, entre exploitation et protection",
    m: "hggsp", n: "01",
    auteurs: [
      {n:"Laurent Testot", d:"Auteur de Cataclysmes, une histoire environnementale de l'humanité."},
      {n:"Greta Thunberg", d:"Discours à l'ONU, exemple de politisation d'un problème environnemental par la société civile."},
      {n:"Rapport Meadows", dates:"1972", d:"Club de Rome, Halte à la croissance ? — conception systémique, croissance menaçante si le rythme se poursuit."},
      {n:"Edgar Morin", d:"La conscience écologique naît des interactions entre phénomènes naturels."},
      {n:"Ratzel / Vidal de la Blache", d:"Ratzel : déterminisme géographique (le milieu déterminerait les sociétés). Vidal de la Blache : possibilisme (les sociétés choisissent parmi les possibilités offertes par leur milieu). Repère mobilisable pour nuancer la pensée déterministe du cours ; le lien exact fait par le professeur entre les deux reste à confirmer."},
      {n:"Colbert", d:"Ordonnance des eaux et forêts (1669) : gestion de la forêt française, à la fois pour protéger la ressource et sécuriser le bois de marine de la flotte royale. Méthode associée en cours : enquêter, mesurer, ordonner."},
      {n:"Andrée Corvol-Dessert", d:"Historienne ; dépendance de la France d'Ancien Régime à ses forêts."},
      {n:"Bernardin de Saint-Pierre", d:"Auteur auquel le cours attribue aux arbres des fonctions de maintien de l'humidité et de la fraîcheur, mobilisé au XIXe siècle en lien avec la prévention des incendies."}
    ],
    dates: [
      "Édit de Louis XIV (XVIIe siècle) puis 1669 : Ordonnance des eaux et forêts.",
      "13 à 18 % : part du territoire français couverte par la forêt sous l'Ancien Régime.",
      "1788–1789 : grand hiver, crise frumentaire, prélude à la Révolution française.",
      "Années 1930 : naissance de l'écologie comme science.",
      "1972 : rapport Meadows.",
      "1827 : code forestier, qui renforce l'administration de la forêt française au XIXe siècle.",
      "Entre 1942 et 1949 : grands épisodes d'incendie dans les Landes, attribués en cours à la sécheresse et au régime pétainiste.",
      "Étude de cas de la forêt de Fontainebleau : 32 000 hectares, à environ 70 km au sud-est de Paris, plus de 3 millions de visiteurs par an ; schéma de cohérence territoriale (SCoT) de 2018.",
      "Anthropocène : terme proposé au début des années 2000 ; en mars 2024, l'instance internationale de stratigraphie a voté contre sa reconnaissance comme époque géologique officielle."
    ],
    pieges: [
      {t:"Pensée déterministe", d:"C'est l'inégalité des ressources en fonction de l'endroit sur Terre. Formulation du cours, à garder telle quelle ; le lien avec le déterminisme environnemental mentionné par le professeur (voir Auteurs et repères, Ratzel/Vidal de la Blache) reste à confirmer avec lui — ne pas le reconstituer soi-même.", flag:true},
      {t:"Anthropocène", d:"Ne pas la présenter comme une époque géologique officiellement reconnue : son statut scientifique fait encore débat."},
      {t:"Problème environnemental / fait environnemental", d:"Ne pas les confondre : le second suppose une mobilisation collective qui juge le premier inacceptable."},
      {t:"Exploiter, conserver, préserver", d:"Trois logiques distinctes face à l'environnement, à ne pas confondre (voir Notions clés)."},
      {t:"Forêt domaniale / forêt privée, reboisement / déforestation", d:"Ne pas confondre forêt domaniale et forêt privée, ni reboisement et déforestation, qui sont deux processus opposés."},
      {t:"Création du Fonds forestier national (FFN)", d:"Le cours date sa création de 1949, présentée comme consécutive aux incendies des Landes. Les sources historiques usuelles situent sa création en 1946 (après le rapport Leloup, dans le contexte de la reconstruction d'après-guerre). Garder la date du cours dans les révisions, mais savoir qu'un écart existe : à vérifier avec le professeur plutôt qu'à trancher seul.", flag:true},
      {t:"Parc national cité en cours sous le nom de « parc de Bizerte »", d:"Pas de nom officiel confirmé : il pourrait s'agir du parc national de l'Ichkeul, près de Bizerte, mais cette précision n'a pas été vérifiée en cours, à confirmer plutôt qu'à recopier telle quelle.", flag:true},
      {t:"Conflit d'usage et pastoralisme", d:"Définitions générales de géographie, à confronter aux explications précises données par le professeur."}
    ],
    dissert: "Esprit critique à appliquer systématiquement à un document : le contexte de production, la date (jamais neutre), ce qui n'est pas immédiatement visible (exemple : l'usage du mot « paysage »). Utiliser le modèle naming, blaming, claiming pour analyser l'émergence d'un problème dans un document, et repérer l'expertise et la construction médiatique comme leviers d'accélération de sa reconnaissance. Comparer des cas de gestion différente (Californie et Caroline du Sud, cités en cours) pour montrer que la gestion de l'environnement dépend de choix politiques et sociaux, pas seulement de contraintes naturelles. L'Ordonnance de 1669 vue par Andrée Corvol-Dessert est un bon exemple de mise en perspective d'un texte réglementaire ancien par un regard historique contemporain. Utiliser le triptyque exploiter/conserver/préserver comme grille de classement des politiques ou des acteurs présentés dans un document. L'étude de cas de la forêt de Fontainebleau (carte IGN et SCoT de 2018) illustre bien la multifonctionnalité d'un espace forestier et les conflits d'usage qu'elle engendre. Retracer la chronologie longue du chapitre (Moyen Âge : le censier ; Ancien Régime : Colbert, ordonnance de 1669 ; XIXe siècle : code forestier de 1827, incendies des Landes, FFN ; enjeux contemporains : Fontainebleau) est une bonne façon de montrer, sur la durée, que la gestion de la forêt combine puissance de l'État, enjeux économiques et conflits d'usage."
  },

  "hg-01": {
    titre: "Les espaces maritimes, une approche géostratégique",
    m: "hg", n: "01",
    auteurs: [
      {n:"Thème 1 du programme (tronc commun)", d:"« Mers et océans au cœur de la mondialisation » (programme Eduscol)."},
      {n:"Étude de cas : la Chine, premier pôle portuaire mondial", d:"Deng Xiaoping est associé en cours à l'émergence maritime chinoise à la fin des années 1980. Ses réformes d'ouverture ont en réalité commencé dès 1978 (zones économiques spéciales dès 1980, quatorze villes côtières ouvertes en 1984) : la fin des années 1980 correspond à l'approfondissement de cette ouverture plutôt qu'à son point de départ, à vérifier auprès du professeur."}
    ],
    dates: ["La Chine a adhéré à l'Organisation mondiale du commerce le 11 décembre 2001, étape majeure de son intégration à la mondialisation (repère général, non donné en cours, à confronter au cours)."],
    pieges: [
      {t:"Espace maritime / espace stratégique", d:"Un espace maritime n'est stratégique que s'il réunit certains critères : position remarquable, forte connectivité, concentration de flux, fonctions de commandement, concentration d'acteurs et d'armateurs."},
      {t:"Maritimisation / espace maritime", d:"La maritimisation est un processus (la hausse du rôle des mers dans l'économie mondiale), l'espace maritime est un lieu : ne pas les confondre."},
      {t:"Estuaire, ria, delta", d:"L'estuaire est une vallée ennoyée par la mer avec comblement partiel, la ria une vallée ennoyée sans le même comblement, le delta une embouchure où les sédiments progressent sur la mer."},
      {t:"Émergence maritime chinoise", d:"Ne pas dater le début des réformes d'ouverture de la Chine de la seule fin des années 1980 : elles commencent dès 1978, la fin des années 1980 en marque l'approfondissement.", flag:true}
    ],
    dissert: "L'histoire-géographie du tronc commun est évaluée en contrôle continu, sans épreuve terminale nationale (voir la fiche de méthodologie de la matière). Mobiliser les notions clés (espace stratégique, maritimisation, armateur, espace maritime, estuaire, rangée portuaire) et des exemples précis de façades maritimes, comme la Chine. Pour un document sur la façade maritime chinoise, interroger la hiérarchie entre les cinq ensembles portuaires et le rôle moteur de Shanghai et du delta du Yangzi, plutôt que de présenter les ports chinois comme un ensemble homogène."
  },

  "hg-02": {
    titre: "Lexique des espaces maritimes",
    m: "hg", n: "02",
    pieges: [
      {t:"Delta / embouchure", d:"Tout delta est une embouchure, mais toute embouchure n'est pas un delta : un estuaire est aussi une embouchure (voir la fiche « Les espaces maritimes »)."},
      {t:"Canal / corridor", d:"Ne pas confondre canal (un aménagement) et corridor (un espace de circulation, qui peut inclure un canal)."},
      {t:"Littoralisation / maritimisation", d:"Ne pas confondre littoralisation (les hommes et les activités se concentrent sur les côtes) et maritimisation (le rôle des mers dans l'économie mondiale augmente)."},
      {t:"ZEE / eaux territoriales", d:"Ne pas confondre la ZEE (200 milles marins, droits sur les ressources) avec les eaux territoriales (12 milles, pleine souveraineté de l'État)."}
    ],
    dissert: "Mobiliser ce vocabulaire avec la fiche « Les espaces maritimes, une approche géostratégique » : un corridor ou un canal fait partie de ce qui rend un espace maritime stratégique, et la ZEE ou les nodules polymétalliques expliquent les rivalités pour l'appropriation des mers. Lexique ajouté par Adam le 21 septembre 2026 et vérifié ; à confronter aux définitions données en cours."
  },

  "hg-03": {
    titre: "Mers et océans, des réserves de ressources",
    m: "hg", n: "03",
    dates: [
      "Population mondiale : environ 1,6 milliard d'habitants en 1900 (le cours arrondit à 2 milliards), et près de 10 milliards projetés pour 2050 (9,7 selon l'ONU).",
      "Selon le cours, 1 milliard de personnes dépendent exclusivement des ressources halieutiques. Repère complémentaire (FAO, 2026) : la production mondiale de poisson a atteint 188 millions de tonnes en 2024, et environ 600 millions de personnes vivent de la filière."
    ],
    pieges: [
      {t:"Chiffre de 1900", d:"2 milliards est un arrondi du cours ; l'ordre de grandeur plus juste est 1,6 milliard. Utilise l'un ou l'autre, mais sache que c'est une approximation."},
      {t:"« Dépendre exclusivement »", d:"La formulation du cours est forte. Les sources internationales disent plutôt que le poisson est la principale source de protéines animales pour une partie de la population mondiale. Garde la formulation du cours, mais nuance-la dans une copie si tu cites une autre source.", flag:true},
      {t:"Ressources halieutiques / pêche", d:"Ne pas réduire les ressources halieutiques à la pêche : l'aquaculture pèse désormais davantage."}
    ],
    dissert: "Sujet type : « Les mers et océans, des espaces convoités pour leurs ressources. » I. Des ressources vitales (pêche, besoins d'une population en forte croissance). II. Des ressources qui polarisent des flux et attirent des acteurs. La partie 2 du cours n'est pas terminée à ce stade de l'année : cette fiche sera complétée avec les cours suivants."
  },

  "philo-01": {
    titre: "Le bonheur et les plaisirs (l'hédonisme)",
    m: "philo", n: "01",
    auteurs: [{n:"Épicure", dates:"341–270 av. J.-C.", d:"Fondateur de l'épicurisme, doctrine axée sur la modération et non sur l'excès. Source du texte étudié : Lettre à Ménécée."}],
    pieges: [
      {t:"Hédonisme / épicurisme antique / carpe diem populaire", d:"Ne pas les confondre : l'hédonisme est le calcul rationnel des plaisirs ; l'épicurisme antique vise l'ataraxie par la modération des désirs ; le carpe diem populaire est une philosophie de l'excès, une déformation de la pensée d'Épicure."},
      {t:"Épicure n'est pas un hédoniste naïf", d:"Ne pas réduire Épicure à un hédonisme immédiat : tout plaisir n'est pas à choisir, une fois passé au crible du calcul rationnel (Lettre à Ménécée)."}
    ],
    dissert: "Sujet type : le bonheur est-il affaire de plaisirs ? Plan possible : la thèse hédoniste d'Épicure, puis ses trois limites (l'intellectualisation, qui réduit le bonheur à un calcul rationnel ; la réduction de la morale à un calcul d'intérêt, qui la rend égoïste plutôt que désintéressée ; la subjectivité du plaisir, qui varie d'un individu à l'autre — exemple du cours : le personnage de fiction Dexter tire du plaisir de tuer, ce qui montre que le plaisir seul ne suffit pas à distinguer une action bonne d'une action mauvaise), puis l'ouverture sur le bonheur d'autrui (peut-on être heureux quand les autres ne le sont pas ? voir la fiche « Le Bonheur », Platon)."
  },

  "philo-02": {
    titre: "Le Bonheur",
    m: "philo", n: "02",
    auteurs: [
      {n:"Démocrite", dates:"Ve–IVe siècle av. J.-C.", d:"L'heureuse disposition de l'âme (l'euthymie) naît de la modération du plaisir, non de sa quantité. Méthode : la comparaison descendante (se comparer aux plus malheureux) plutôt qu'ascendante (source d'envie et de désir sans fin). Repère mobilisé : absolu / relatif."},
      {n:"Platon", dates:"428/427–348/347 av. J.-C.", d:"La République, IV : la loi ne vise pas le bonheur exceptionnel d'une classe, mais celui de la cité tout entière ; le bonheur individuel se subordonne à la fonction politique de chacun. Repère mobilisé : obligation / contrainte."},
      {n:"Descartes", dates:"1596–1650", d:"Lettre à Élisabeth (1645) : la passion fait croire les choses meilleures qu'elles ne sont ; le vrai office de la raison est d'examiner la juste valeur des biens pour orienter nos efforts vers les plus désirables, indépendamment du succès fixé par la fortune. Repère mobilisé : idéal / réel."},
      {n:"Pascal", dates:"1623–1662", d:"Pensées : tous les hommes recherchent le bonheur sans exception, mais aucun, sans la foi, n'y parvient jamais ; l'échec, constaté chez toutes les catégories humaines, ne suffit pourtant jamais à éteindre l'espoir. Repère mobilisé : exemple / preuve."}
    ],
    pieges: [
      {t:"Bonheur individuel / bonheur collectif", d:"Ne pas confondre le bonheur individuel (Démocrite, Épicure, Descartes), réglé par une discipline du désir ou des passions, et le bonheur collectif (Platon), réglé par la loi."},
      {t:"Chez Pascal, l'universel porte sur le désir, pas la satisfaction", d:"Tous veulent être heureux (universel), aucun, sans la foi, n'y parvient (universel aussi, mais dans l'échec) : ne pas confondre les deux niveaux."}
    ],
    dissert: "Q5, peut-on apprendre à être heureux : Démocrite répond oui, par un exercice réfléchi de comparaison plutôt qu'un savoir théorique immédiat. Q2, peut-on être heureux quand les autres ne le sont pas : chez Platon, le bonheur individuel est subordonné au bonheur collectif, finalisé par le lien social. Q4, pour être heureux faut-il être raisonnable : chez Descartes, la raison corrige les erreurs de jugement de la passion et garantit un bonheur possible, non un succès garanti. Q3, le bonheur est-il une aspiration universelle : chez Pascal, oui pour le désir, non pour sa satisfaction, dont l'échec est tout aussi universel hors la foi. Une cinquième réponse à ce problème, celle d'Épicure (le calcul hédoniste), fait l'objet d'une fiche séparée : voir « Le bonheur et les plaisirs »."
  },

  "philo-03": {
    titre: "La Raison",
    m: "philo", n: "03",
    auteurs: [
      {n:"Maïmonide", dates:"1138–1204", d:"Guide des égarés, III, XXVII : la Loi vise le bien-être du corps (condition nécessaire, obtenue par la vie en société) puis, seule fin vraiment noble, le bien-être de l'âme, c'est-à-dire le passage de la raison en puissance à la raison en acte. Repère mobilisé : en acte / en puissance."},
      {n:"Montaigne", dates:"1533–1592", d:"Les Essais (1580) : ce que nous prenons pour les lois naturelles de la conscience naît en réalité de la coutume, intériorisée dès la naissance ; seul un patient retour sur soi permet de distinguer le vrai jugement du simple pli de l'habitude. Repère mobilisé : universel / général / particulier / singulier."},
      {n:"Comte", dates:"1798–1857", d:"Cours de philosophie positive : l'esprit humain ne peut s'observer lui-même en train de penser, l'organe observé et l'organe observateur étant identiques ; la connaissance des phénomènes humains doit donc se fonder sur l'observation extérieure et intersubjective. Repère mobilisé : objectif / subjectif / intersubjectif."},
      {n:"Wittgenstein", dates:"1889–1951", d:"Conférence sur l'éthique : tout fait, aussi extraordinaire soit-il, cesse d'être miraculeux dès qu'on l'examine scientifiquement ; la science ne rencontre donc jamais l'absolu, seulement du relatif provisoirement inexpliqué. Repère mobilisé : absolu / relatif."}
    ],
    pieges: [
      {t:"Quatre obstacles à la raison, quatre natures différentes", d:"Corporel et temporaire chez Maïmonide, culturel et jamais totalement levé chez Montaigne, logique mais contournable par une autre méthode chez Comte, catégoriel et définitif chez Wittgenstein : ne pas les traiter comme un seul et même obstacle."},
      {t:"Chez Wittgenstein, une limite de nature, pas de degré", d:"La limite de la raison scientifique n'est pas une limite de degré (elle expliquerait indéfiniment plus de faits) mais une limite de nature : elle ne rencontre jamais l'absolu."}
    ],
    dissert: "Q6, faut-il se fier à sa propre raison : Maïmonide et Montaigne convergent vers un oui conditionnel, une fois la raison affranchie de ses entraves (le manque corporel, la coutume). Q7, la raison a-t-elle des limites : Comte et Wittgenstein répondent oui, mais avec des limites de nature différente — une méthode à changer chez Comte, la catégorie même du factuel chez Wittgenstein."
  },

  "ang-01": {
    titre: "Tradwives and the Women's Liberation Movement",
    m: "ang", n: "01",
    vocab: [
      {en:"Homemaking", fr:"la tenue du foyer"},
      {en:"Motherhood", fr:"la maternité"},
      {en:"Breadwinner", fr:"le soutien de famille"},
      {en:"From scratch", fr:"fait maison"},
      {en:"Reproductive rights", fr:"les droits reproductifs"},
      {en:"Childcare", fr:"la garde d'enfants"},
      {en:"Unaffordable", fr:"trop cher"},
      {en:"To embrace a lifestyle", fr:"adopter un mode de vie"},
      {en:"To normalise", fr:"banaliser"},
      {en:"Mainstream feminism", fr:"le féminisme dominant"},
      {en:"Compulsory", fr:"obligatoire"},
      {en:"Misleading", fr:"trompeur"}
    ],
    auteurs: [
      {n:"Texte de lecture « From Liberation to Tradwife: Has the Debate Changed? »", d:"Donné par Mme Chamakhi pour le chapitre 1."},
      {n:"Betty Friedan", dates:"The Feminine Mystique, 1963", d:"Repère complémentaire, hors texte : critique de l'idéal de la femme au foyer de banlieue, souvent citée comme point de départ de la deuxième vague du féminisme américain. À utiliser seulement si la professeure l'accepte comme référence."}
    ],
    dates: ["Années 1950 : idéal de la suburban housewife dans l'Amérique d'après-guerre.", "Années 1960 et 1970 : naissance puis apogée du Women's Liberation Movement.", "Aujourd'hui : phénomène tradwife sur les réseaux sociaux, avec des millions de vues."],
    pieges: [
      {t:"Le Women's Liberation Movement ne voulait pas abolir la famille", d:"Son objectif était d'ouvrir des choix au-delà des rôles assignés aux femmes."},
      {t:"Toutes les familles d'après-guerre ne suivaient pas le modèle de la femme au foyer", d:"Le texte précise que ce n'était qu'un idéal, pas la réalité de toutes les familles."},
      {t:"Ne pas généraliser sur les tradwives", d:"Toutes ne prônent pas la soumission, et l'auteur juge simpliste de les voir toutes comme des victimes."},
      {t:"Un même comportement, des situations très différentes", d:"Rester à la maison peut être un choix financé par un revenu suffisant, ou une contrainte (garde d'enfants trop chère, pas d'emploi, pression du conjoint)."},
      {t:"True or False", d:"Dans un exercice de ce type, toujours justifier avec une citation précise du texte."}
    ],
    dissert: "Essential question du chapitre : Are tradwives rejecting women's liberation, or redefining what female freedom means? Essay type (200 à 250 mots) : « Women's liberation should be about freedom of choice rather than a particular way of life. » Discuss. Plan possible : introduction sur le débat relancé par les tradwives ; argument 1, le mouvement des années 1970 voulait élargir les choix ; argument 2, certaines tradwives y voient l'exercice de leur autonomie ; contre-argument, un choix peut être influencé par les attentes sociales, l'argent ou une idéologie ; nuance, tout dépend de la liberté et des ressources pour choisir ; conclusion. Mini-débat : Can a traditional lifestyle be feminist if it is freely chosen? Donner son opinion, deux arguments, un contre-argument, puis y répondre. Expressions utiles : In my view, I would argue that, From my perspective, One could argue that, Admittedly, It is true that, Nevertheless, On the other hand, It would be simplistic to say that, This depends largely on."
  },

  "es-01": {
    titre: "L'alternateur",
    m: "es", n: "01",
    pieges: [
      {t:"C'est la variation du champ magnétique qui crée la tension, pas sa présence", d:"Un aimant immobile devant une bobine ne produit rien."},
      {t:"Résistance « mécanique » ou « électrique » ?", d:"Les notes de cours parlent de « résistance mécanique du conducteur ». La perte en question est en général la résistance électrique du conducteur (effet Joule). Vérifie ta formulation avec ton professeur.", flag:true},
      {t:"Rotor / stator", d:"Ne pas confondre le rotor (mobile) et le stator (fixe) : l'aimant et les bobines peuvent être placés sur l'un ou l'autre selon les modèles, c'est leur mouvement relatif qui compte."}
    ],
    dissert: "Question type : « Expliquez comment un alternateur produit une tension électrique. » Plan court : 1. Les deux parties (rotor mobile, stator fixe). 2. L'aimant crée un champ, la bobine le reçoit. 3. Le mouvement fait varier le champ, ce qui fait apparaître une tension (induction). 4. Limite : une partie de l'énergie est perdue (frottements, effet Joule), d'où un rendement inférieur à 1."
  },

  "droit-01": {
    titre: "Qu'est-ce que le droit ?",
    m: "droit", n: "01",
    auteurs: [
      {n:"Justinien Ier et le Digeste", dates:"530–533", d:"Recueil des textes des grands juristes romains, commandé en 530 et publié le 16 décembre 533. Il qualifie le droit d'« art du bon et de l'équitable » (ius est ars boni et aequi), formule du juriste romain Celse citée par Ulpien au tout début du Digeste."},
      {n:"Georges Vedel", dates:"1990", d:"Doyen, grand juriste de droit public ; dans un article intitulé « Indéfinissable mais présent », il avoue ne pas savoir définir le droit, mais retient : « je sais ce que serait une société sans droit »."}
    ],
    dates: ["530 et 533 : commande puis publication du Digeste.", "Loi des 16 et 24 août 1790 : séparation des fonctions judiciaires et administratives, à l'origine de la distinction entre droit privé et droit public.", "1905 : loi de séparation des Églises et de l'État.", "1990 : article de Vedel sur l'impossible définition du droit."],
    pieges: [
      {t:"Droit (objectif) et droits (subjectifs)", d:"Ne pas confondre l'ensemble des règles (le Droit, avec une majuscule) avec les prérogatives d'une personne. Une copie qui mélange les deux perd tout de suite en précision."},
      {t:"La bonne foi n'est pas que morale", d:"La leçon range la bonne foi dans la morale, non sanctionnée. Pourtant, en droit des contrats, elle est une obligation juridique : l'article 1104 du Code civil impose de négocier, former et exécuter les contrats de bonne foi. Point à nuancer avec ton professeur.", flag:true},
      {t:"Victime et procès pénal", d:"C'est bien le ministère public (le procureur) qui exerce l'action publique. La victime n'est pas absente pour autant : elle peut se constituer partie civile pour obtenir réparation."},
      {t:"Juges du fond et Cour de cassation", d:"Les juges de première instance et d'appel tranchent les faits et appliquent le droit ; la Cour de cassation ne juge que le droit, sans revenir sur les faits. Il ne faut pas dire que les juges du fond ne font « que » des faits."},
      {t:"Droit international privé", d:"Il concerne des particuliers, pas le commerce entre États. Le poly parle de « deux branches du commerce international » : il s'agit en fait des deux branches du droit international.", flag:true},
      {t:"Droit et liberté", d:"Avoir le droit de faire quelque chose ne veut pas dire que tout est permis : le droit fixe aussi des interdits."}
    ],
    dissert: "Sujet type : « Le droit se distingue-t-il de la morale ? » I. Deux systèmes normatifs proches : ils règlent les conduites et expriment les valeurs d'une société. II. Mais seul le droit est sanctionné par l'autorité publique ; la morale reste affaire de conscience et de sanctions informelles. Ouverture possible : le droit reprend parfois des exigences morales (bonne foi dans les contrats, codes de déontologie). Sujet type : « Peut-on définir le droit ? » I. Une définition difficile : le mot a plusieurs sens (droit objectif, droits subjectifs, branches multiples), et Vedel lui-même n'y parvient pas. II. Une approche par les fonctions : se demander à quoi sert le droit et ce que serait une société sans droit (voir la fiche « Le droit et ses fonctions »)."
  },

  "droit-02": {
    titre: "Le droit et ses fonctions",
    m: "droit", n: "02",
    auteurs: [
      {n:"Boris Starck", d:"Introduction au droit : « l'ensemble des règles de conduite qui gouvernent les rapports entre les hommes et dont le respect est assuré par l'autorité publique ». Ce qui fait le droit, c'est donc la contrainte publique."},
      {n:"Philippe Malinvaud", d:"Introduction à l'étude du droit : le droit suit les mœurs, et parfois les devance."}
    ],
    dates: ["1789 : Déclaration des droits de l'homme et du citoyen.", "1905 : loi de séparation des Églises et de l'État.", "1948 : Déclaration universelle des droits de l'homme (son article 1 dit « libres et égaux en dignité et en droits »)."],
    pieges: [
      {t:"Articles 4 et 5 de la DDHC", d:"Le poly enchaîne les deux sans les séparer. « Ces bornes ne peuvent être déterminées que par la Loi » termine l'article 4. « Tout ce qui n'est pas défendu par la Loi ne peut être empêché, et nul ne peut être contraint à faire ce qu'elle n'ordonne pas » est l'article 5 : il faut citer le bon numéro."},
      {t:"Ordre public", d:"Le poly l'attribue au Conseil constitutionnel. Les composantes classiques (bon ordre, sûreté, sécurité, salubrité, tranquillité publiques) figurent en réalité dans l'article L2212-2 du Code général des collectivités territoriales, sur les pouvoirs de police du maire ; le Conseil d'État y a ajouté la dignité de la personne humaine en 1995 (arrêt Commune de Morsang-sur-Orge, dit du « lancer de nains »).", flag:true},
      {t:"Égalité en droits / égalité sociale", d:"Ne pas les confondre : on peut être égaux devant la loi tout en ayant des revenus très différents."},
      {t:"Neutralité", d:"Elle s'impose à l'État et aux services publics, pas aux citoyens en général. Exception à connaître : en France, la loi de 2004 interdit aux élèves des écoles, collèges et lycées publics le port de signes religieux ostensibles."},
      {t:"Solidarité / charité", d:"La charité est un geste volontaire ; la solidarité, telle qu'elle est présentée ici, est un devoir de la société organisé par le droit, avec des conditions d'accès."},
      {t:"Observatoire de la laïcité", d:"Sa source a été supprimée en 2021. Le texte reste valable, mais il ne faut pas présenter cet organisme comme toujours en activité."},
      {t:"« Stark » ou « Starck » ?", d:"Le poly écrit « Stark », mais l'orthographe usuelle est Starck."}
    ],
    corrige: [
      {q:"I.1", r:"La règle de droit est sanctionnée par l'autorité publique ; la règle morale ne l'est que par la conscience ou le regard des autres."},
      {q:"I.2", r:"Règles de droit : respecter le Code de la route, payer ses impôts, ne pas voler. Règles morales : ne pas mentir à un ami, aider une personne en difficulté, être reconnaissant. Certaines règles sont les deux à la fois (ne pas tuer)."},
      {q:"I.3", r:"Un monde sans règles, c'est la loi du plus fort : insécurité, vengeance privée, aucune protection des plus faibles, aucun moyen pacifique de régler les conflits."},
      {q:"I.4", r:"Le Parlement est légitime parce qu'il est élu par le peuple souverain (directement pour l'Assemblée nationale, indirectement pour le Sénat) et qu'il vote la loi en son nom."},
      {q:"I.5", r:"La paix sociale est un état de concorde où les conflits se règlent par le droit et non par la violence."},
      {q:"I.6", r:"Pourquoi : pour éviter la loi du plus fort. Comment : en fixant des règles communes, en les faisant respecter par l'autorité publique, et en suivant l'évolution des mœurs (Malinvaud)."},
      {q:"II.1", r:"« Libres et égaux en droits » : chacun a les mêmes droits dès la naissance et les garde toute sa vie, quelle que soit son origine ; ce n'est pas une égalité de situation."},
      {q:"II.2", r:"La liberté peut être réduite quand son exercice nuit à autrui ou trouble l'ordre public, et seulement par la loi (articles 4 et 10)."},
      {q:"II.3", r:"L'article 10 protège les opinions « même religieuses » : chacun peut croire ou ne pas croire sans être inquiété, dans la limite de l'ordre public. C'est déjà la liberté de conscience, premier pilier de la laïcité."},
      {q:"II.4", r:"Piste de définition : la liberté est la possibilité d'agir selon sa volonté, dans la limite des droits des autres fixée par la loi."},
      {q:"II.5", r:"Exemples : choisir ses amis, circuler librement, exprimer son opinion, pratiquer ou non une religion."},
      {q:"II.6", r:"La solidarité est le devoir de la société d'aider ceux qui manquent de ressources, organisé et garanti par le droit."},
      {q:"II.7", r:"Exemples : les bourses scolaires, la Sécurité sociale, les aides aux personnes âgées ou handicapées."},
      {q:"II.8", r:"En organisant l'aide aux plus fragiles, le droit réduit les inégalités de fait, évite l'exclusion et renforce la cohésion, donc la paix sociale."},
      {q:"II.9", r:"La laïcité est le principe qui garantit la liberté de conscience, la séparation de l'État et des religions et l'égalité de tous devant la loi, quelles que soient les croyances. Exemples : la neutralité des services publics, la liberté de pratiquer ou non une religion."},
      {q:"II.10", r:"La laïcité permet à des personnes de convictions différentes de vivre sous les mêmes règles sans qu'aucune religion ne s'impose aux autres. Elle évite ainsi les conflits religieux et garantit l'égalité devant les services publics."}
    ],
    dissert: "Sujet type : « Le droit est-il un facteur d'organisation et de pacification de la société ? » I. Le droit organise la vie en société : il fixe des règles sanctionnées par l'autorité publique (Starck), garantit l'ordre public et empêche la loi du plus fort. II. Il pacifie en exprimant des valeurs partagées : liberté, égalité, solidarité, laïcité (DDHC, DUDH, loi de 1905), et en s'adaptant aux mœurs (Malinvaud)."
  }
};
