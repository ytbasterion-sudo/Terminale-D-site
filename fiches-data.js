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

  "ses-04": {
    titre: "Les sources de la croissance économique",
    m: "ses", n: "04",
    auteurs: [
      {n:"Joseph Schumpeter", d:"Économiste à l'origine du concept de destruction créatrice : l'innovation détruit d'anciennes activités et d'anciens emplois tout en en créant de nouveaux."}
    ],
    dates: [
      "Danemark, 2019 (OCDE) : PIB + 2,8 %, dont facteur travail + 0,9 point, facteur capital + 0,5 point et productivité globale des facteurs + 1,4 point.",
      "France, 2020 : 2,2 % du PIB investi en recherche (DIRD), contre 0,5 % en Roumanie (écart de 1,7 point).",
      "France, 2016 : dépense publique en éducation = 5,4 % du PIB, contre 2,6 % en Roumanie.",
      "PIB par habitant (2017, indice UE = 100) : France 104, Roumanie 63.",
      "Méthode : lire un indice base 100 (ex. 100 en 2011, 108 en 2019) en soustrayant 100 à la valeur finale pour obtenir le taux de variation en pourcentage."
    ],
    pieges: [
      {t:"Croissance économique / développement", d:"Ne pas confondre : la croissance mesure une augmentation quantitative de la production (PIB), le développement une amélioration qualitative des conditions de vie d'une population. Distinction classique du programme, à confronter au cours."},
      {t:"Croissance endogène / croissance exogène", d:"La croissance endogène résulte d'un investissement volontaire de l'État et des entreprises dans les 4 capitaux (humain, technologique, physique, public) ; la croissance exogène résulterait de facteurs extérieurs."},
      {t:"Institutions, condition trop souvent oubliée", d:"Sans droits de propriété protégés et un cadre institutionnel stable, même un investissement massif en capital ne génère pas d'innovation durable."},
      {t:"Destruction créatrice ≠ destruction nette d'emplois", d:"L'innovation fait disparaître certains emplois mais en crée d'autres, en particulier pour les travailleurs qualifiés capables d'exécuter des tâches non répétitives, complémentaires de l'innovation."}
    ],
    dissert: "Sujet type 1 : quelles sont les sources de la croissance économique ? Plan possible : d'abord l'accumulation des facteurs de production (augmentation du facteur travail, investissement en capital) ; ensuite le rôle de la productivité globale des facteurs, via la qualification et la motivation des travailleurs ainsi que l'investissement dans de nouvelles machines ; enfin, montrer que ces deux sources sont alimentées par l'investissement dans les 4 capitaux, qui rend la croissance endogène et cumulative. Sujet type 2 : quel est le rôle des institutions dans la croissance économique ? Plan : institutions → sécurité et stabilité → droits de propriété qui incitent à l'innovation → monopole temporaire qui couvre les coûts de R&D → accumulation du capital humain et technologique. Sujet type 3 : quels défis le processus de croissance soulève-t-il ? Plan : l'innovation s'accompagne d'une destruction créatrice (emplois détruits et créés) → les travailleurs qualifiés sont avantagés par leur complémentarité avec l'innovation → question de la formation et de l'adaptation de la main-d'œuvre."
  },

  "hggsp-02": {
    titre: "Climat et coopération internationale",
    m: "hggsp", n: "02",
    auteurs: [
      {n:"Emmanuel Le Roy Ladurie", d:"Historien pionnier, Histoire du climat depuis l'an mil (1967) ; pour lui, l'orage du 13 juillet 1788 et la météo de 1788-1789 jouent un rôle de « gâchette » de la Révolution, dont les causes sont plus profondes."},
      {n:"Pascal Acot", d:"Histoire du climat (2009) : le léger réchauffement du Xe siècle favorise les grands défrichements et l'essor démographique."},
      {n:"Jean Taté", d:"Chroniqueur de Château-Porcien (Ardennes) : témoignage sur le Grand Hiver de 1709, publié en 1889."},
      {n:"GIEC, CCNUCC et COP", d:"Le GIEC (1988) évalue et synthétise les travaux scientifiques, sans décider des politiques. La CCNUCC et les COP sont le socle et les rendez-vous de la négociation climatique."},
      {n:"Acteurs et trajectoires", d:"La France, historiquement reconnue pour les accords de Paris ; les pays d'Afrique, engagés depuis la COP22 (Marrakech, 2016) ; la Chine et les États-Unis, dont les positions ont évolué mais pas dans le même sens, la Chine passant du statut de pays en développement non engagé par Kyoto à celui de moteur de la transition. L'Alliance des petits États insulaires défend la limite de 1,5 °C et transforme sa vulnérabilité en capacité de mise à l'agenda."},
      {n:"Tuvalu et le traité Falepili", d:"Avec l'Australie : voie de résidence en Australie (jusqu'à 280 places par an) et reconnaissance de la continuité de l'État malgré la montée des eaux ; en échange, l'article 4 soumet certains engagements de sécurité de Tuvalu avec des tiers à l'accord de l'Australie."},
      {n:"Greta Thunberg", d:"Grève scolaire d'août 2018, à l'origine de Fridays for Future et de l'internationalisation des mobilisations de jeunesse en 2019."}
    ],
    dates: [
      "Temps long : plus de 2 millions d'années d'alternance de périodes glaciaires et interglaciaires ; 4 longues glaciations en 700 000 ans ; interglaciaire actuel : l'Holocène.",
      "900-1300 : POM (jusqu'à +0,4 °C), surtout dans l'hémisphère nord ; grands défrichements dès 1050, surface cultivée en hausse d'un tiers à la fin du XIIIe siècle, villes neuves dès le milieu du XIIe siècle.",
      "XIVe-milieu du XIXe siècle : PAG (jusqu'à -0,5 °C), surtout en Europe et en Amérique du Nord. Depuis le milieu du XIXe siècle : hausse rapide (jusqu'à +1,4 °C).",
      "Éruptions volcaniques perturbatrices : 1783, 1815, 1863, 1997.",
      "1648 et 1789 : la Fronde et la Révolution ont pu être « accélérées » par les variations climatiques.",
      "1709 : Grand Hiver (gel du 6 janvier à début mars) ; Louis XIV oblige à déclarer les grains et envoie des commissaires visiter les greniers pour ravitailler les villes et éviter les séditions.",
      "1788-1789 : sécheresse, orage du 13 juillet 1788, froid du 25 novembre 1788 à la mi-janvier 1789 (environ 10 000 morts en janvier 1789), 58 émeutes frumentaires en 1788 et 239 dans les quatre premiers mois de 1789 ; Necker interdit l'exportation des grains (25 août 1788).",
      "1972 : fondation du PNUE, lors de la conférence de Stockholm.",
      "1988 : le PNUE et l'OMM fondent le GIEC. 1990 : premier rapport du GIEC.",
      "1992 : la CCNUCC, ouverte à la signature au Sommet de la Terre de Rio, établit le socle du régime climatique.",
      "1997 : protocole de Kyoto (en vigueur en 2005), premiers objectifs chiffrés et contraignants pour les pays industrialisés ; non ratifié par les États-Unis (voir fiche États-Unis).",
      "2015 : COP21, Accord de Paris (adopté le 12 décembre 2015, en vigueur le 4 novembre 2016) : rester bien en dessous de 2 °C et viser 1,5 °C, CDN révisées tous les cinq ans, bilan mondial.",
      "2021 : rapport Groundswell de la Banque mondiale, jusqu'à 216 millions de migrants climatiques internes d'ici 2050 dans le scénario pessimiste.",
      "2022 : COP27, création d'un fonds pour les pertes et préjudices, rendu opérationnel à la COP28.",
      "2023 : sixième rapport du GIEC (synthèse) : rôle établi des activités humaines, environ +1,1 °C en 2011-2020 par rapport à 1850-1900. COP28 de Dubaï : premier bilan mondial et appel à une transition hors des combustibles fossiles.",
      "Finance climat : objectif de 100 milliards de dollars par an prévu pour 2020, atteint seulement en 2022 ; 136,7 milliards fournis et mobilisés en 2024 (OCDE, mai 2026). COP29 de Bakou (2024) : au moins 300 milliards par an d'ici 2035, et appel à 1 300 milliards toutes sources confondues.",
      "Traité Falepili : signé le 9 novembre 2023, en vigueur le 28 août 2024.",
      "2025 : COP30 de Belém (mise en œuvre, adaptation, financements). 23 juillet 2025 : avis consultatif de la Cour internationale de Justice, qui précise les obligations des États (prévenir les dommages significatifs, coopérer), y compris pour les États non parties aux traités climatiques.",
      "PNUE (rapport Emissions Gap 2025) : une mise en œuvre intégrale des engagements de l'Accord de Paris mènerait à une hausse de 2,3 à 2,5 °C d'ici la fin du siècle, contre environ 2,8 °C avec les politiques actuelles.",
      "1er janvier 2026 : régime définitif du MACF européen.",
      "COP31 : Antalya, du 9 au 20 novembre 2026 ; pré-COP du 5 au 8 octobre 2026 organisée par les Fidji, Tuvalu et l'Australie.",
      "Étude de document (1er octobre) : une carte fondée sur des données de la Banque mondiale (2014) et du BP Statistical Review of World Energy (2019) attribue à la Chine environ 28 % des émissions mondiales de CO2 et aux États-Unis environ 15 %, loin devant la Russie ou l'Australie. Donnée d'un document daté, à actualiser si réutilisée hors de ce contexte."
    ],
    pieges: [
      {t:"Climat / météorologie", d:"Ne pas les confondre : le climat est une moyenne à long terme (30 ans et plus), la météo relève du court terme."},
      {t:"Jalon 1 de l'Axe 2", d:"Ne pas réduire l'étude du climat en Europe à un seul épisode comme 1788-1789 ; croiser plusieurs archives (cernes, pollens, glaciers, vendanges, témoignages) sur la longue durée, et rappeler les variations internes à chaque phase."},
      {t:"Le climat, cause unique des crises ?", d:"Non : il agit comme « gâchette » ou multiplicateur, les causes politiques et sociales restent décisives (1789)."},
      {t:"Négliger les impacts inégalitaires", d:"Le changement climatique affecte d'abord les pays pauvres, mais responsabilités et vulnérabilités ne coïncident pas toujours, et les pays riches ont aussi des inégalités internes."},
      {t:"Ignorer l'urgence de la coopération", d:"Le dérèglement est un problème collectif qui nécessite une action coordonnée au-delà des frontières nationales."},
      {t:"Réduire la négociation à une opposition Nord-Sud", d:"Chine, Inde, pays pétroliers, pays moins avancés et États insulaires n'ont pas les mêmes intérêts."},
      {t:"La trajectoire chinoise", d:"Ne pas confondre les deux moments : en 1997, la Chine est classée pays en développement et n'est pas concernée par les objectifs chiffrés de Kyoto ; aujourd'hui, elle est à la fois le premier émetteur mondial et un moteur de la transition écologique."},
      {t:"Les +1,1 °C du GIEC", d:"Une moyenne pluriannuelle mondiale, pas l'anomalie d'une année ni une température régionale."},
      {t:"Accord de Paris : contraignant, mais sans sanction", d:"Il est juridiquement contraignant (préparer, communiquer, maintenir des CDN, transparence), mais aucune sanction automatique ne garantit les objectifs chiffrés."},
      {t:"Scénarios, pas prédictions", d:"Les trajectoires du PNUE et les 216 millions de Groundswell sont des scénarios ; ces 216 millions sont des migrants internes, non des personnes franchissant les frontières."},
      {t:"Les chiffres de Bakou", d:"Ne pas additionner les 300 et les 1 300 milliards (périmètres différents), ni confondre annonce et versement, prêt et subvention."},
      {t:"Quota / crédit carbone", d:"Ne pas les confondre : acheter des crédits ne garantit pas la baisse d'un plafond d'émissions."},
      {t:"« Réfugié climatique »", d:"Ce n'est pas un statut juridique : la Convention de Genève (1951) suppose une persécution ; des protections peuvent toutefois s'appliquer selon les situations."},
      {t:"L'avis de la CIJ (2025)", d:"Ce n'est pas un jugement condamnant un État, et il ne prévoit aucune réparation automatique."}
    ],
    dissert: "Pour argumenter (professeur) : distinguer objectif diplomatique, obligation juridique, financement annoncé, mesure appliquée et résultat observé ; un exemple est démonstratif quand on explique ce qu'il établit et les limites de sa portée. Documents types : données paléoclimatologiques (cernes, pollens, glaciers comme celui d'Aletsch), témoignages et images (Très Riches Heures du duc de Berry), textes scientifiques, données de production agricole, accords internationaux. Analyser : (1) source et auteur (crédibilité scientifique), (2) données présentées et leur fiabilité, (3) implications pour la coopération internationale, (4) limites des preuves ou des solutions proposées. Exemple de dissertation (cours du professeur) : Le changement climatique global et les relations internationales. Problématique : dans quelle mesure le changement climatique transforme-t-il un système fondé sur la souveraineté des États, alors que l'action collective a des responsabilités, coûts et bénéfices inégaux ? Plan : 1) construire une gouvernance commune (crise globale aux responsabilités inégales ; GIEC, CCNUCC, Kyoto, Paris) ; 2) une coopération traversée par les conflits de développement et de puissance (finance et justice climatique ; marchés carbone, MACF) ; 3) une recomposition par les risques et les demandes de justice (mobilités, Tuvalu ; mobilisations, CIJ). Accroche possible : Tuvalu et le traité Falepili. Exemple d'étude critique : le Grand Hiver de 1709 vu par Jean Taté. Plan inspiré de l'album méthode du professeur : 1) sources et froid (gel brutal de janvier à mars) ; 2) crise et inégalités (blés perdus ; le père du chroniqueur achète de l'orge pour ressemer) ; 3) pouvoir et histoire (déclaration des grains, commissaires, peur des séditions). Critique : un témoignage local, au récit religieux (« la colère de Dieu »), publié en 1889."
  },

  "ang-02": {
    titre: "Chapter 2 : When Fantasy Becomes Reality",
    m: "ang", n: "02",
    auteurs: [
      {n:"Vocabulaire utile du support", d:"human-like (qui ressemble à un humain) ; flawless (parfait, sans défaut) ; to convey a message (transmettre un message) ; to highlight (mettre en avant, souligner) ; to demonstrate (démontrer) ; mankind / humanity (l'humanité) ; creative thinking (pensée créative) ; pair work (travail en binôme)."}
    ],
    dissert: "Chapitre encore peu développé (une seule séance numérisée à ce jour, autour d'une image de robot humanoïde). Le vocabulaire ci-dessus est à réemployer pour décrire et commenter une image de ce type : identifier ce que l'image cherche à transmettre (to convey), ce qu'elle met en avant (to highlight) sur les rapports entre technologie et humanité (mankind/humanity), et discuter si la ressemblance humaine (human-like, flawless) de l'image relève d'une vision réaliste ou futuriste (futuristic vision) de la technologie. Fiche à enrichir au fil des prochains cours de ce chapitre."
  },

  "hggsp-01": {
    titre: "Environnement, entre exploitation et protection",
    m: "hggsp", n: "01",
    auteurs: [
      {n:"Laurent Testot", d:"Auteur de Cataclysmes, une histoire environnementale de l'humanité."},
      {n:"Greta Thunberg", d:"Discours à l'ONU, exemple de politisation d'un problème environnemental par la société civile."},
      {n:"Rapport Meadows", d:"1972, Club de Rome, Halte à la croissance ? — conception systémique, croissance menaçante si le rythme se poursuit."},
      {n:"Edgar Morin", d:"La conscience écologique naît des interactions entre phénomènes naturels."},
      {n:"Ratzel / Vidal de la Blache", d:"Ratzel : déterminisme géographique ou environnemental (le milieu déterminerait les sociétés). Vidal de la Blache : possibilisme (les sociétés choisissent parmi les possibilités offertes par leur milieu). Repère pour nuancer la pensée déterministe du cours."},
      {n:"Colbert", d:"Ordonnance des eaux et forêts (1669), pour protéger la ressource et sécuriser le bois de marine de la flotte royale. Méthode associée en cours : enquêter, mesurer, ordonner. Formule qui lui est attribuée : « La France périra faute de bois. »"},
      {n:"Andrée Corvol-Dessert", d:"Historienne (« Bois, forêts », Dictionnaire de l'Ancien Régime, dir. Lucien Bély, PUF, 1996). Sans bois, ni chauffage, ni cuisson, ni défense (affûts de canon, fortins), ni marine : « la forêt conditionnait la survie de chacun et la vie de tous » ; les paysans y mènent le bétail et y raclent les litières. Le pouvoir veut moins des gestionnaires que des conservateurs capables d'écarter usurpateurs, défricheurs et délinquants."},
      {n:"Bernardin de Saint-Pierre", d:"Auteur auquel le cours attribue aux arbres des fonctions de maintien de l'humidité et de la fraîcheur, mobilisé au XIXe siècle en lien avec la prévention des incendies."}
    ],
    dates: [
      "Néolithique : à partir de -10 000 environ au Moyen-Orient, puis diffusion sur près de 7 000 ans (synthèse du professeur) ; le document de la présentation orale donne -9 500 au Proche-Orient, -6 500 en Europe, jusqu'au début de l'âge du bronze vers -2 300. Peintures rupestres du Tassili n'Ajjer (Algérie, vers le VIIe millénaire avant J.-C.) : domestication des animaux.",
      "Édit de Louis XIV (XVIIe siècle) : préservation de la forêt française face aux besoins de bois de marine contre les Anglais. 1669 : Ordonnance des eaux et forêts.",
      "13 à 18 % : taux de boisement de la France sous l'Ancien Régime.",
      "Forêt française aujourd'hui (francetvinfo, 2016) : environ un tiers de la surface du pays, quatrième forêt d'Europe ; la moitié de la forêt privée est faite de parcelles d'un ou deux hectares, souvent laissées à l'abandon.",
      "1972 : rapport Meadows et conférence de Stockholm, première grande conférence des Nations unies sur l'environnement.",
      "1987 : rapport Brundtland, qui popularise la notion de développement durable.",
      "1992 : sommet de Rio (Sommet de la Terre), qui donne une forte portée à la conciliation entre exploitation et protection de l'environnement.",
      "Anthropocène : terme proposé au début des années 2000 ; en mars 2024, l'instance internationale de stratigraphie a voté contre sa reconnaissance comme époque géologique officielle, sans nier l'impact humain sur la planète.",
      "Crise de 1929, citée en cours comme exemple de spéculation rapide (des actions à 100 dollars à midi ne valant plus qu'un dollar à 13 heures) ; lien précis avec le thème environnemental à confirmer.",
      "Étude de cas de la forêt de Fontainebleau (dossier du 21 septembre) : 32 000 hectares, à environ 70 km au sud-est de Paris, plus de 3 millions de visiteurs par an ; schéma de cohérence territoriale (SCoT) de 2018.",
      "Entre 1942 et 1949 : grands épisodes d'incendie dans les Landes, attribués en cours à la sécheresse et au régime pétainiste.",
      "1949 : date retenue par le cours pour la création du FFN, après les incendies des Landes ; les sources historiques usuelles retiennent 1946 (loi de 1946, après le rapport Leloup) : écart à vérifier avec le professeur."
    ],
    pieges: [
      {t:"Anthropocène", d:"Ne pas la présenter comme une époque géologique officiellement reconnue : son statut scientifique fait encore débat. À vérifier avec le professeur : le lexique du Padlet parle de « période géologique actuelle » (tout en signalant le débat), alors que la fiche retient le vote de mars 2024 contre sa reconnaissance officielle.", flag:true},
      {t:"Écologie : 1866 ou années 1930 ?", d:"À vérifier avec le professeur : le lexique du Padlet date le terme « écologie » de 1866, alors que les notes de cours situent la naissance de l'écologie comme science dans les années 1930 (autour de la notion d'écosystème) ; préciser ce que le cours veut faire retenir.", flag:true},
      {t:"Pensée déterministe", d:"Ne pas la présenter comme une théorie admise sans nuance : le déterminisme géographique est critiqué par la géographie contemporaine (possibilisme de Vidal de la Blache). Le lien exact fait par le professeur entre pensée déterministe et déterminisme environnemental reste à vérifier avec lui.", flag:true},
      {t:"Fait environnemental / problème environnemental", d:"Ne pas les confondre : le problème, au sens sociologique, suppose une mobilisation collective qui juge le fait inacceptable."},
      {t:"Exploiter, conserver, préserver", d:"Ne pas confondre ces trois logiques, ni cette grille avec le titre de l'Axe 1, « Exploiter, préserver, protéger »."},
      {t:"« La France périra faute de bois »", d:"Ne pas prendre la formule au pied de la lettre : selon Andrée Corvol-Dessert, le conditionnel s'impose, la France n'ayant jamais manqué de bois."},
      {t:"Parc national cité en cours sous le nom de « parc de Bizerte »", d:"Pas de nom officiel confirmé : il pourrait s'agir du parc national de l'Ichkeul, près de Bizerte, à confirmer plutôt qu'à recopier tel quel.", flag:true},
      {t:"Conflit d'usage, pastoralisme, expertise et construction médiatique", d:"Définitions générales, à confronter aux explications précises du professeur."},
      {t:"Forêt domaniale / forêt privée, reboisement / déforestation", d:"Ne pas confondre forêt domaniale et forêt privée, ni reboisement et déforestation, qui sont deux processus opposés."},
      {t:"Création du Fonds forestier national (FFN)", d:"Garder la date de 1949 du cours dans les révisions, sans la présenter comme indiscutable (les sources usuelles retiennent 1946).", flag:true}
    ],
    dissert: "Problématique de l'Axe 1 (professeur) : l'humanité peut-elle encore continuer à exploiter son environnement sans chercher à le préserver, le protéger ? Utiliser le modèle naming, blaming, claiming pour analyser l'émergence d'un problème dans un document ; repérer l'expertise et la construction médiatique comme leviers de sa reconnaissance. Esprit critique à appliquer systématiquement : contexte de production, date (jamais neutre), ce qui n'est pas immédiatement visible (exemple : l'usage du mot « paysage »). Le triptyque exploiter, conserver, préserver sert de grille de classement des politiques ou des acteurs présentés dans un document ; le schéma systémique permet de situer acteurs, espaces et flux. La forêt de Fontainebleau (carte IGN et SCoT de 2018) illustre la multifonctionnalité d'un espace forestier et les conflits d'usage qu'elle engendre, du XVIIe siècle à nos jours. Chronologie longue de la forêt française : Moyen Âge (censier), Ancien Régime (Colbert, 1669), XIXe siècle (code forestier de 1827), XXe siècle (incendies des Landes, FFN), enjeux contemporains (Fontainebleau) : la gestion de la forêt combine puissance de l'État, enjeux économiques et conflits d'usage. Exemple d'étude critique (dossier 1 du professeur) : Ordonnance des eaux et forêts (1669) et texte d'Andrée Corvol-Dessert (1996). Consigne : dans quelle mesure la réglementation de la forêt est-elle une manifestation de la volonté de puissance de Louis XIV ? Plan : 1) une ressource aux usages multiples (chauffage, cuisson, pâturage, artisanat, marine) ; 2) des moyens de préservation et de gestion (corps de lois, registre du bétail, Maîtrises, bois réservé) ; 3) une affirmation de la puissance royale (marine, défense, contrôle des usagers), à nuancer : la France ne manquait pas de bois. Critique : un texte normatif royal confronté au regard rétrospectif d'une historienne. Exemple de dissertation : Exploiter, préserver et protéger la forêt française depuis Colbert. Plan chronologique : 1) une ressource stratégique sous le contrôle de l'État (1669, bois de marine) ; 2) une gestion devenue technique (1827, reboisement, FFN après les incendies des Landes) ; 3) une forêt multifonctionnelle et vulnérable (Fontainebleau, conflits d'usage, changement climatique)."
  },

  "hg-01": {
    titre: "Les espaces maritimes, une approche géostratégique",
    m: "hg", n: "01",
    auteurs: [
      {n:"Thème 1 du programme (tronc commun)", d:"« Mers et océans au cœur de la mondialisation » (programme Eduscol)."},
      {n:"Étude de cas : la Chine, premier pôle portuaire mondial", d:"Deng Xiaoping est associé en cours à l'émergence maritime chinoise à la fin des années 1980. Ses réformes d'ouverture ont en réalité commencé dès 1978 (zones économiques spéciales dès 1980, quatorze villes côtières ouvertes en 1984) : la fin des années 1980 correspond à l'approfondissement de cette ouverture plutôt qu'à son point de départ, à vérifier auprès du professeur."},
      {n:"Port de Yangzi (étude de cas Chine)", d:"Situé à 32 kilomètres de Shanghai, largement automatisé, ce qui garantit des échanges fluides malgré un flux de marchandises considérable ; il relie à la mondialisation maritime des régions sans façade maritime, comme le Sichuan, en import comme en export."}
    ],
    dates: [
      "La Chine a adhéré à l'Organisation mondiale du commerce le 11 décembre 2001, étape majeure de son intégration à la mondialisation (repère général, non donné en cours, à confronter au cours).",
      "32 kilomètres : distance entre le port de Yangzi et Shanghai, exemple du rôle des infrastructures portuaires automatisées dans l'intégration des régions chinoises à la mondialisation maritime."
    ],
    pieges: [
      {t:"Espace maritime / espace stratégique", d:"Un espace maritime n'est stratégique que s'il réunit certains critères : position remarquable, forte connectivité, concentration de flux, fonctions de commandement, concentration d'acteurs et d'armateurs."},
      {t:"Maritimisation / espace maritime", d:"La maritimisation est un processus (la hausse du rôle des mers dans l'économie mondiale), l'espace maritime est un lieu : ne pas les confondre."},
      {t:"Détroit stratégique", d:"Passage maritime entre deux terres relativement proches, qui permet d'optimiser le flux maritime entre plusieurs espaces et qui dépend de la configuration naturelle du terrain (exemple : le détroit d'Ormuz)."},
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
      "Selon le cours, 1 milliard de personnes dépendent exclusivement des ressources halieutiques. Repère complémentaire (FAO, 2026) : la production mondiale de poisson a atteint 188 millions de tonnes en 2024, et environ 600 millions de personnes vivent de la filière.",
      "Le crabe bleu, introduit en Méditerranée par les eaux de ballast ou via le canal de Suez (premières signalisations dans les années 1990, espèce bien installée depuis le début des années 2010), perturbe la pêche artisanale du golfe de Gabès en Tunisie, où il représente aujourd'hui une large part des captures côtières.",
      "L'AMP de la mer de Ross (Antarctique), créée en 2016 sous l'égide de la CCAMLR, protège 1,55 million de km², l'une des plus grandes aires marines protégées au monde.",
      "L'accord BBNJ est entré en vigueur début 2026 et couvre potentiellement environ 60 % de la surface des océans (la haute mer, au-delà des zones économiques exclusives nationales)."
    ],
    pieges: [
      {t:"Chiffre de 1900", d:"2 milliards est un arrondi du cours ; l'ordre de grandeur plus juste est 1,6 milliard. Utilise l'un ou l'autre, mais sache que c'est une approximation."},
      {t:"« Dépendre exclusivement »", d:"La formulation du cours est forte. Les sources internationales disent plutôt que le poisson est la principale source de protéines animales pour une partie de la population mondiale. Garde la formulation du cours, mais nuance-la dans une copie si tu cites une autre source.", flag:true},
      {t:"Ressources halieutiques / pêche", d:"Ne pas réduire les ressources halieutiques à la pêche : l'aquaculture pèse désormais davantage."},
      {t:"Protection / interdiction totale", d:"Ne pas confondre : une AMP organise souvent les usages (recherche, tourisme, droits autochtones) plutôt que d'exclure toute activité humaine."},
      {t:"Échelle régionale / échelle mondiale", d:"Ne pas confondre la Convention de Barcelone (régionale, Méditerranée) et la CNUDM ou le BBNJ (mondiaux) : des niveaux de gouvernance complémentaires, pas concurrents."}
    ],
    dissert: "Sujet type : « Les mers et océans, des espaces convoités pour leurs ressources. » I. Des ressources vitales (pêche, besoins d'une population en forte croissance). II. Des ressources qui polarisent des flux et attirent des acteurs, entre exploitation (pêche, hydrocarbures, minerais des fonds marins, tourisme) et tentative de régulation (AMP, Convention de Barcelone, CNUDM, accord BBNJ). Exemple mobilisable : le crabe bleu en Méditerranée (golfe de Gabès), qui illustre à la fois une menace écologique (espèce invasive) et un enjeu économique, avec des réponses nationales divergentes entre la Tunisie et la France. La fiche pourra être complétée avec les cours suivants."
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
  },
  "hggsp-03": {
    titre: "Étude conclusive : les États-Unis et la question environnementale",
    m: "hggsp", n: "03",
    auteurs: [
      {n:"Henry David Thoreau", d:"Walden, ou la Vie dans les bois (1854)."},
      {n:"John Muir", dates:"1838-1914", d:"Né en Écosse, père du préservationnisme ; fonde le Sierra Club (1892) et pèse sur Theodore Roosevelt pour faire de Yosemite un parc fédéral, statut plus protecteur qu'un parc d'État."},
      {n:"Gifford Pinchot", d:"Forestier, futur chef du service fédéral des forêts, figure du conservationnisme, allié de Roosevelt."},
      {n:"Theodore Roosevelt", dates:"président républicain, 1901-1909", d:"Affirme la responsabilité fédérale envers l'environnement ; environ 93 millions d'hectares protégés (forêts nationales, réserves animales, cinq parcs nationaux). Logique de conservation : les forêts protégées fournissent encore du bois."},
      {n:"Sierra Club", d:"Agit par l'éducation, les bénévoles, les recours juridiques et le lobbying ; illustre le rôle de la société civile."},
      {n:"Frederick Jackson Turner", d:"Conférence de 1893 qui fait de la Frontière le creuset de la société américaine (autonomie, initiative) ; lecture à historiciser, qui marginalise les peuples dépossédés."},
      {n:"Rachel Carson", d:"Silent Spring (1962), contre les pesticides."},
      {n:"Arne Naess", d:"Écologie profonde."},
      {n:"Joseph Schumpeter", d:"La puissance d'un État repose sur sa capacité à innover."},
      {n:"Robert Redford", d:"Et au milieu coule une rivière (1992), célébration de la wilderness du Montana ; engagé au Natural Resources Defense Council. Le succès du film accroît la fréquentation de la rivière Big Hole, d'où conflits d'usage et restrictions de pêche."},
      {n:"ONG américaines internationales", d:"Wildlife Conservation Society (aires protégées, présente dans 65 pays), Amis de la Terre (d'abord contre le nucléaire)."},
      {n:"Acteurs opposés aux politiques climatiques", d:"Conservateurs et évangélistes (déni climatique, méfiance envers la science et l'État fédéral, parallèle avec le créationnisme), concentrés dans les États ruraux du centre et du sud-est et les États pétroliers (Texas, Alaska) ; lobbies des énergies fossiles (Global Climate Coalition)."},
      {n:"Acteurs favorables", d:"États littoraux et métropolitains, villes (New York, Chicago), Californie ; mouvement « We Are Still In » et U.S. Climate Alliance, contre-pouvoirs face au retrait de Paris."},
      {n:"Patagonia", d:"Fondée en 1972 par Yvon Chouinard : matériaux recyclés ou bio, 1 % du chiffre d'affaires reversé, entreprise léguée à une fondation ; mais accusée de greenwashing (coton lié à l'exploitation des Ouïghours)."}
    ],
    dates: [
      "1776 : indépendance. 1804-1806 : expédition de Lewis et Clark, inventaire des milieux de l'Ouest. 1845 : Destinée manifeste.",
      "1859 : forage d'Edwin Drake près de Titusville (Pennsylvanie), essor de l'industrie pétrolière.",
      "1862 : Homestead Act (Lincoln), 160 acres (environ 65 hectares) contre résidence et mise en valeur : l'État fédéral organise la conquête.",
      "1869 : première liaison ferroviaire transcontinentale.",
      "1864 : protection de la vallée de Yosemite. 1872 : parc national de Yellowstone, sous Grant, géré par l'État fédéral (secrétaire à l'Intérieur), destiné aussi à l'accueil du public (4,76 millions de visites en 2025).",
      "1890 : création du parc national de Yosemite autour de la vallée ; la vallée elle-même, confiée à la Californie en 1864, ne rejoint le parc national qu'en 1906.",
      "1892 : Sierra Club. 1895 : Wildlife Conservation Society. 1905 : création du United States Forest Service et de l'American Bison Society (Roosevelt, William Hornaday). 1906 : Antiquities Act, qui permet au président de classer des monuments nationaux.",
      "1913 : le Congrès autorise le barrage de Hetch Hetchy (Yosemite) pour alimenter San Francisco, contre Muir et avec Pinchot. 1916 : National Park Service.",
      "Années 1930 : Dust Bowl dans les Grandes Plaines (sécheresses et sols fragilisés par l'agriculture). 1935 : barrage Hoover sur le Colorado.",
      "1962 : Silent Spring. 1969 : Amis de la Terre. 1970 : Earth Day, Environmental Protection Agency (EPA) et Clean Air Act. 1972 : Clean Water Act.",
      "1989 : marée noire de l'Exxon Valdez ; à la conférence de Noordwijk, refus américain des objectifs chiffrés de réduction des émissions ; création de la Global Climate Coalition pour bloquer les limites d'émissions.",
      "1997 : sous Clinton, le Sénat adopte à l'unanimité (95 voix contre 0) la résolution Byrd-Hagel, qui refuse tout traité climatique n'engageant pas aussi les pays en développement ; le protocole de Kyoto, signé par Clinton, n'est jamais soumis à la ratification.",
      "2006 : en Californie, la loi AB 32 fixe un objectif de réduction des émissions de gaz à effet de serre. 2009 : des courriels et brouillons de climatologues sont piratés et publiés en ligne (« Climategate ») pour discréditer leurs conclusions.",
      "2015 : Obama, démocrate modéré, s'investit dans la COP21. 2017 : Trump annonce le retrait de Paris et bloque les négociations climatiques jusqu'en 2021 ; Californie, New York et l'État de Washington créent la U.S. Climate Alliance ; mouvement « We Are Still In ». 2021 : retour dans l'accord avec Biden.",
      "2022 : Inflation Reduction Act, 370 milliards de dollars pour les infrastructures et les renouvelables, réservés à la production sur le sol américain (mesure protectionniste). 2022 : arrêt West Virginia v. EPA de la Cour suprême, qui restreint le pouvoir de l'EPA de réguler les émissions de carbone des centrales.",
      "27 janvier 2026 : second retrait de l'Accord de Paris effectif ; en janvier 2026, annonce du retrait de la CCNUCC. 2025 : production énergétique américaine record.",
      "Les États-Unis : pionniers de la protection et deuxièmes consommateurs de ressources naturelles au monde, derrière la Chine."
    ],
    pieges: [
      {t:"Préservationnisme / conservationnisme", d:"Ne pas les confondre : préservationnisme (Muir : protéger la nature de l'homme), conservationnisme (Pinchot, Roosevelt : organiser son usage). Hetch Hetchy oppose deux visions de l'intérêt collectif, pas des écologistes à des industriels."},
      {t:"Le paradoxe américain", d:"Les États-Unis ne sont pas seulement protecteurs ou seulement exploitants : le cours insiste sur le paradoxe, des paysages liés à l'identité nationale protégés tout en exploitant les ressources ; ce n'est pas non plus un passage linéaire de l'exploitation à la protection."},
      {t:"Au-delà du clivage démocrates-républicains", d:"Ne pas y réduire les positions américaines : le refus de Kyoto est unanime au Sénat (résolution Byrd-Hagel), et États fédérés, villes, entreprises et ONG agissent aussi."},
      {t:"Une société homogène, un Ouest vide ?", d:"Ne pas présenter la société américaine comme homogène, ni l'Ouest comme un espace vide : la wilderness et la Frontière effacent les peuples autochtones."},
      {t:"Retrait de Paris / retrait de la CCNUCC (2026)", d:"Deux démarches distinctes, aux calendriers juridiques différents."},
      {t:"Parc d'État / parc national", d:"Le premier relève d'un État fédéré (Dead Horse Point, Utah), le second de l'État fédéral."},
      {t:"Achat de la Louisiane", d:"À vérifier avec le professeur : dans le cours, l'achat de la Louisiane est noté 1863, alors qu'il date de 1803 (le Padlet n'en parle pas et ne permet pas de trancher).", flag:true},
      {t:"Yosemite : 1864 ou 1890 ?", d:"À vérifier avec le professeur : le document du Padlet sur John Muir dit que la vallée de Yosemite obtient « le statut de parc d'État » en 1890 ; en réalité, elle est confiée à la Californie dès 1864, et 1890 est la création du parc national de Yosemite.", flag:true},
      {t:"Kyoto : un refus « à l'unanimité » ?", d:"À vérifier avec le professeur : le document du Padlet dit que le Sénat « refuse à l'unanimité de ratifier le protocole de Kyoto » ; le vote unanime de 1997 porte en fait sur la résolution Byrd-Hagel, et le protocole n'a jamais été soumis au vote.", flag:true}
    ],
    dissert: "Comparer des cas de gestion différente (Californie et Caroline du Sud, cités en cours) pour montrer que la gestion de l'environnement dépend de choix politiques et sociaux, pas seulement de contraintes naturelles. Articuler les échelles : fédérale, États fédérés, locale, internationale ; les choix américains ont des conséquences planétaires. Pour une étude de document sur un parc (Yellowstone, Dead Horse Point) : distinguer objectifs annoncés par la loi, fréquentation mesurée et effets écologiques réellement démontrés ; repérer la mise en scène de la wilderness. Sujet type : Les États-Unis, entre protection et exploitation de leur environnement. Esquisse : 1) un territoire riche et contrasté, exploité dès le XIXe siècle ; 2) l'invention de la protection (parcs, Roosevelt, EPA) ; 3) une politique climatique discontinue (accords de Paris, retraits, retours). Dissertation rédigée du professeur : L'esprit pionnier et le rapport des États-Unis à leur environnement depuis le XIXe siècle. Problématique : dans quelle mesure l'héritage de l'esprit pionnier permet-il de comprendre les tensions entre exploitation et protection ? Plan : 1) la conquête de la nature, fondement de l'identité (Lewis et Clark, Destinée manifeste, Turner, Homestead Act) ; 2) une transformation des milieux au service de la puissance (chemin de fer, Drake, Hoover, Dust Bowl) ; 3) une protection précoce mais contradictoire (Yellowstone, Muir et Pinchot, Hetch Hetchy, EPA, AB 32). Accroche : 1862 Homestead Act, 1872 Yellowstone. Sujet possible (jalon 2) : Les États-Unis et l'environnement à l'échelle internationale. Plan : 1) une diplomatie changeante (Noordwijk, Kyoto, Paris, retraits) ; 2) des acteurs divisés (ONG, évangélistes, États et villes, entreprises) ; 3) un enjeu de puissance face à la Chine et à l'Europe (IRA, unilatéralisme)."
  },

  "ses-05": {
    titre: "Chapitre 3 · Les fondements du commerce international",
    m: "ses", n: "05",
    auteurs: [
      {n:"David Ricardo", dates:"1772–1823", d:"Économiste britannique, théorie de l'avantage comparatif (Des principes de l'économie politique et de l'impôt, 1817)."}
    ],
    pieges: [
      {t:"Avantage comparatif / avantage absolu", d:"L'avantage comparatif se juge par le coût relatif entre deux productions, pas par la production la plus efficace en valeur absolue. Définition générale, à confronter au cours.", note:"Définition générale, à confronter au cours."},
      {t:"Cours incomplet à vérifier", d:"La phrase du cours « se spécialiser dans laquelle il a un avantage comparatif » est incomplète (le mot production semble manquer), et le cours est numéroté « 2. L'avantage comparatif » sans partie 1 visible. À vérifier avec le professeur.", flag:true}
    ],
    dissert: "Sujet type : pourquoi les pays ont-ils intérêt à échanger ? Plan possible : 1) mesurer la situation commerciale d'un pays (exportations, importations, solde) ; 2) la spécialisation selon l'avantage comparatif (Ricardo, draps et vin). Chapitre à enrichir au fil des prochains cours."
  }
};
