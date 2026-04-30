// ============================================================
// KOUPÉ — Données de démonstration partagées
// ============================================================

const SALONS = [
  {
    id: 1,
    slug: "barber-elite-tunis",
    nom: "Barber Elite Tunis",
    genre: "men",
    genreLabel: "♂ Homme",
    categorie: "Barbershop",
    note: 4.9,
    nbAvis: 142,
    prixMin: 25,
    adresse: "12 Rue du Lac Windermere, Lac 1, Tunis",
    quartier: "Lac 1, Tunis",
    distance: "1.2 km",
    horaires: "Lun–Sam : 09h–19h · Dim : 10h–16h",
    tel: "+216 71 234 567",
    couleur: "plum",
    tags: ["Coupe", "Barbe", "Rasage", "Fade", "Dégradé"],
    description: "Barber Elite est le barbershop de référence à Tunis. Fondé en 2018, nous combinons techniques modernes et traditions du rasage traditionnel maghrébin. Notre équipe de 4 barbiers certifiés vous accueille dans un cadre premium au cœur du quartier du Lac.",
    services: [
      { cat: "Coupes", items: [
        { nom: "Coupe homme", prix: 25, duree: "30 min", desc: "Coupe + finitions au rasoir" },
        { nom: "Dégradé / Fade", prix: 30, duree: "35 min", desc: "Dégradé bas, moyen ou haut" },
        { nom: "Coupe + Barbe", prix: 45, duree: "45 min", desc: "Coupe complète + taille barbe" },
      ]},
      { cat: "Barbe", items: [
        { nom: "Taille barbe", prix: 15, duree: "20 min", desc: "Contours nets, finitions" },
        { nom: "Rasage traditionnel", prix: 20, duree: "25 min", desc: "Rasoir droit + serviette chaude" },
        { nom: "Barbe complète", prix: 25, duree: "30 min", desc: "Taille + rasage contours + soin" },
      ]},
      { cat: "Soins", items: [
        { nom: "Soin du cuir chevelu", prix: 20, duree: "20 min", desc: "Massage + masque hydratant" },
        { nom: "Coloration barbe", prix: 15, duree: "20 min", desc: "Coloration naturelle ou chimique" },
      ]},
    ],
    avis: [
      { nom: "Mehdi K.", initiales: "MK", note: 5, date: "Il y a 2 jours", texte: "Le meilleur barbershop de Tunis. Ambiance top, résultat impeccable. Je reviendrai !" },
      { nom: "Sami Ben Ali", initiales: "SB", note: 5, date: "Il y a 5 jours", texte: "Zakaria est un vrai artiste. La coupe dégradé est parfaite, exactement ce que je voulais." },
      { nom: "Amine T.", initiales: "AT", note: 4, date: "Il y a 1 semaine", texte: "Très bonne expérience. Un peu d'attente à l'arrivée mais la qualité compense largement." },
    ],
    prochainCreneau: "Auj. 14h30",
    populaire: true,
    badge: "badge-new",
    badgeText: "★ Top semaine",
  },
  {
    id: 2,
    slug: "salon-yasmine",
    nom: "Salon Yasmine",
    genre: "women",
    genreLabel: "♀ Femme",
    categorie: "Salon de coiffure",
    note: 4.7,
    nbAvis: 89,
    prixMin: 35,
    adresse: "45 Avenue Habib Bourguiba, Menzah 6, Tunis",
    quartier: "Menzah 6, Tunis",
    distance: "2.8 km",
    horaires: "Lun–Sam : 09h–20h",
    tel: "+216 71 456 789",
    couleur: "almond",
    tags: ["Coupe femme", "Brushing", "Coloration", "Soin", "Lissage"],
    description: "Salon Yasmine vous accueille dans un espace cosy et moderne dédié à la beauté féminine. Spécialisées dans les coupes tendance et les colorations, nos stylistes diplômées à Paris et à Tunis sont à votre service depuis 2015.",
    services: [
      { cat: "Coupe & Style", items: [
        { nom: "Coupe femme", prix: 35, duree: "45 min", desc: "Coupe + brushing inclus" },
        { nom: "Brushing seul", prix: 25, duree: "30 min", desc: "Brushing classique ou volume" },
        { nom: "Coupe + Brushing", prix: 55, duree: "60 min", desc: "Coupe + brushing professionnel" },
      ]},
      { cat: "Coloration", items: [
        { nom: "Coloration racines", prix: 45, duree: "60 min", desc: "Reprise couleur racines" },
        { nom: "Balayage", prix: 80, duree: "90 min", desc: "Balayage naturel ou californien" },
        { nom: "Mèches complètes", prix: 70, duree: "90 min", desc: "Mèches traditionnelles" },
      ]},
      { cat: "Soins", items: [
        { nom: "Lissage brésilien", prix: 120, duree: "120 min", desc: "Lissage longue durée 6 mois" },
        { nom: "Soin kératine", prix: 60, duree: "60 min", desc: "Soin réparateur intensif" },
      ]},
    ],
    avis: [
      { nom: "Salma B.", initiales: "SB", note: 5, date: "Il y a 3 jours", texte: "Coiffure parfaite pour mon mariage. L'équipe est à l'écoute et très professionnelle." },
      { nom: "Nour M.", initiales: "NM", note: 4, date: "Il y a 1 semaine", texte: "Très satisfaite du balayage. La couleur est exactement ce que je voulais." },
      { nom: "Fatma Z.", initiales: "FZ", note: 5, date: "Il y a 2 semaines", texte: "Yasmine est formidable ! Elle a compris exactement ce que je cherchais." },
    ],
    prochainCreneau: "Dem. 10h00",
    populaire: true,
    badge: "badge-popular",
    badgeText: "↑ Populaire",
  },
  {
    id: 3,
    slug: "hammam-sidi-bou",
    nom: "Hammam Sidi Bou",
    genre: "mixed",
    genreLabel: "⚥ Mixte",
    categorie: "Hammam & Spa",
    note: 5.0,
    nbAvis: 37,
    prixMin: 40,
    adresse: "Rue de la Médina, Médina, Tunis",
    quartier: "Médina, Tunis",
    distance: "4.1 km",
    horaires: "Tous les jours : 08h–21h",
    tel: "+216 71 789 012",
    couleur: "velvet",
    tags: ["Hammam", "Gommage", "Massage", "Soin corps", "Relaxation"],
    description: "Niché au cœur de la Médina de Tunis, le Hammam Sidi Bou est une institution centenaire rénovée avec goût. Nous perpétuons les traditions du hammam maghrébin tout en offrant les standards d'un spa moderne. Une expérience authentique et apaisante.",
    services: [
      { cat: "Hammam", items: [
        { nom: "Hammam classique", prix: 40, duree: "60 min", desc: "Vapeur + gommage traditionnel" },
        { nom: "Hammam VIP", prix: 65, duree: "90 min", desc: "Hammam + gommage + savon beldi" },
        { nom: "Hammam duo", prix: 110, duree: "90 min", desc: "Pour 2 personnes, cabine privée" },
      ]},
      { cat: "Soins corps", items: [
        { nom: "Gommage au savon beldi", prix: 30, duree: "45 min", desc: "Exfoliation profonde traditionnelle" },
        { nom: "Enveloppement argile", prix: 45, duree: "60 min", desc: "Argile verte, reminéralisant" },
        { nom: "Massage relaxant", prix: 55, duree: "60 min", desc: "Massage corps complet aux huiles" },
      ]},
    ],
    avis: [
      { nom: "Lilia K.", initiales: "LK", note: 5, date: "Il y a 4 jours", texte: "Un moment hors du temps. Le hammam traditionnel est absolument parfait." },
      { nom: "Yassine M.", initiales: "YM", note: 5, date: "Il y a 1 semaine", texte: "Cadre magnifique, personnel attentionné. Le meilleur hammam de Tunis sans hésitation." },
    ],
    prochainCreneau: "Ven. 11h00",
    populaire: true,
    badge: "badge-verified",
    badgeText: "✓ Authentique",
  },
  {
    id: 4,
    slug: "beauty-spa-hanaa",
    nom: "Beauty Spa Hanaa",
    genre: "women",
    genreLabel: "♀ Femme",
    categorie: "Institut beauté",
    note: 4.6,
    nbAvis: 201,
    prixMin: 30,
    adresse: "23 Rue d'Arabie, Ennasr 2, Ariana",
    quartier: "Ennasr, Ariana",
    distance: "3.5 km",
    horaires: "Lun–Sam : 09h–19h30",
    tel: "+216 71 321 654",
    couleur: "warm",
    tags: ["Épilation", "Soin visage", "Manucure", "Pédicure", "Maquillage"],
    description: "Beauty Spa Hanaa est votre institut de beauté complet à Ariana. Avec plus de 8 ans d'expérience, notre équipe vous propose une gamme complète de soins esthétiques dans un cadre chaleureux et professionnel.",
    services: [
      { cat: "Soins visage", items: [
        { nom: "Soin visage classique", prix: 40, duree: "60 min", desc: "Nettoyage + hydratation" },
        { nom: "Soin anti-âge", prix: 65, duree: "75 min", desc: "Actifs lissants, fermeté" },
        { nom: "Peeling chimique", prix: 55, duree: "45 min", desc: "Exfoliation douce ou profonde" },
      ]},
      { cat: "Épilation", items: [
        { nom: "Épilation jambes complètes", prix: 30, duree: "40 min", desc: "Cire froide ou tiède" },
        { nom: "Épilation bras", prix: 20, duree: "25 min", desc: "Cire froide ou tiède" },
        { nom: "Épilation intégrale", prix: 55, duree: "60 min", desc: "Corps complet" },
      ]},
      { cat: "Ongles", items: [
        { nom: "Manucure classique", prix: 20, duree: "30 min", desc: "Lime + vernis + soin" },
        { nom: "Pose gel ongles", prix: 45, duree: "60 min", desc: "Gel semi-permanent, tenue 3-4 sem." },
        { nom: "Pédicure complète", prix: 30, duree: "45 min", desc: "Soin pieds + vernis" },
      ]},
    ],
    avis: [
      { nom: "Hana S.", initiales: "HS", note: 5, date: "Hier", texte: "Institut très propre, personnel adorable. Je viens ici depuis 3 ans et je recommande à toutes mes amies." },
      { nom: "Rim B.", initiales: "RB", note: 4, date: "Il y a 3 jours", texte: "Bon rapport qualité/prix. Le soin visage est excellent. Un peu d'attente à l'accueil." },
      { nom: "Amira T.", initiales: "AT", note: 5, date: "Il y a 1 semaine", texte: "La pose gel est parfaite, la qualité est au rendez-vous !" },
    ],
    prochainCreneau: "Jeu. 15h30",
    populaire: false,
    badge: "",
    badgeText: "",
  },
  {
    id: 5,
    slug: "coiff-and-co",
    nom: "Coiff & Co",
    genre: "men",
    genreLabel: "♂ Homme",
    categorie: "Salon de coiffure",
    note: 4.5,
    nbAvis: 64,
    prixMin: 20,
    adresse: "8 Rue Ibn Khaldoun, Centre Ville, Tunis",
    quartier: "Centre Ville, Tunis",
    distance: "0.8 km",
    horaires: "Lun–Sam : 08h–18h",
    tel: "+216 71 111 222",
    couleur: "sand",
    tags: ["Coupe", "Dégradé", "Barbe", "Rasage"],
    description: "Salon de coiffure moderne au centre-ville de Tunis. Prix accessibles, qualité garantie. Notre équipe de jeunes coiffeurs passionnés vous accueille du lundi au samedi.",
    services: [
      { cat: "Coupes", items: [
        { nom: "Coupe simple", prix: 20, duree: "25 min", desc: "Coupe aux ciseaux" },
        { nom: "Coupe + débrouille barbe", prix: 25, duree: "30 min", desc: "" },
      ]},
      { cat: "Barbe", items: [
        { nom: "Barbe simple", prix: 10, duree: "15 min", desc: "" },
      ]},
    ],
    avis: [
      { nom: "Khaled M.", initiales: "KM", note: 5, date: "Il y a 3 jours", texte: "Très bien pour le prix. Coupe nette et rapide." },
    ],
    prochainCreneau: "Auj. 16h00",
    populaire: false,
    badge: "",
    badgeText: "",
  },
  {
    id: 6,
    slug: "spa-orient",
    nom: "Spa Orient",
    genre: "mixed",
    genreLabel: "⚥ Mixte",
    categorie: "Spa & Massage",
    note: 4.8,
    nbAvis: 53,
    prixMin: 50,
    adresse: "Tour Montplaisir, Montplaisir, Tunis",
    quartier: "Montplaisir, Tunis",
    distance: "5.2 km",
    horaires: "Mar–Dim : 10h–22h",
    tel: "+216 71 555 999",
    couleur: "velvet",
    tags: ["Massage", "Soins corps", "Relaxation", "Spa privatif"],
    description: "Spa Orient vous propose une parenthèse de détente et de bien-être au cœur de Tunis. Massages thérapeutiques, soins du corps et accès spa privatif pour une expérience haut de gamme.",
    services: [
      { cat: "Massages", items: [
        { nom: "Massage relaxant 60min", prix: 55, duree: "60 min", desc: "Huiles essentielles, détente musculaire" },
        { nom: "Massage aux pierres chaudes", prix: 75, duree: "75 min", desc: "Basalte volcanique, profond" },
        { nom: "Massage duo", prix: 120, duree: "60 min", desc: "Pour 2, cabine privée" },
      ]},
    ],
    avis: [
      { nom: "Ons B.", initiales: "OB", note: 5, date: "Il y a 5 jours", texte: "Une heure de pur bonheur. Le massage aux pierres est incroyable." },
    ],
    prochainCreneau: "Sam. 18h00",
    populaire: false,
    badge: "",
    badgeText: "",
  },
  {
    id: 7,
    slug: "atelier-nour-lac2",
    nom: "Atelier Nour",
    genre: "women",
    genreLabel: "♀ Femme",
    categorie: "Salon de coiffure",
    note: 4.8,
    nbAvis: 112,
    prixMin: 38,
    adresse: "8 Rue du Lac Biwa, Lac 2, Tunis",
    quartier: "Lac 2, Tunis",
    distance: "2.1 km",
    horaires: "Lun-Sam : 09h-20h",
    tel: "+216 70 222 310",
    couleur: "almond",
    tags: ["Brushing", "Coloration", "Coupe femme", "Soin"],
    description: "Atelier Nour propose des coupes et colorations sur mesure avec une equipe specialisee dans les tendances modernes.",
    services: [
      { cat: "Coupe & Brushing", items: [
        { nom: "Coupe + brushing signature", prix: 58, duree: "60 min", desc: "Diagnostic, coupe et finition pro" },
        { nom: "Brushing event", prix: 38, duree: "35 min", desc: "Volume et fixation longue tenue" },
      ]},
      { cat: "Coloration", items: [
        { nom: "Gloss + patine", prix: 52, duree: "45 min", desc: "Reflets et brillance" },
      ]},
    ],
    avis: [
      { nom: "Rania H.", initiales: "RH", note: 5, date: "Il y a 2 jours", texte: "Equipe douce et tres pro. Resultat exactement comme sur la photo de reference." },
    ],
    prochainCreneau: "Auj. 17h00",
    populaire: true,
    badge: "badge-popular",
    badgeText: "↑ Tendance",
  },
  {
    id: 8,
    slug: "medina-groom-house",
    nom: "Medina Groom House",
    genre: "men",
    genreLabel: "♂ Homme",
    categorie: "Barbershop",
    note: 4.7,
    nbAvis: 76,
    prixMin: 22,
    adresse: "21 Rue Sidi Ben Arous, Medina, Tunis",
    quartier: "Medina, Tunis",
    distance: "3.7 km",
    horaires: "Mar-Dim : 10h-21h",
    tel: "+216 29 100 440",
    couleur: "plum",
    tags: ["Coupe", "Barbe", "Rasage trad.", "Contour"],
    description: "Barbershop style vintage au coeur de la Medina, specialise dans les coupes modernes et le rasage traditionnel.",
    services: [
      { cat: "Prestations barber", items: [
        { nom: "Coupe classique", prix: 22, duree: "25 min", desc: "Coupe propre + finition nuque" },
        { nom: "Rituel barbe premium", prix: 28, duree: "30 min", desc: "Serviette chaude et huile barbe" },
        { nom: "Pack coupe + barbe", prix: 42, duree: "45 min", desc: "Pack complet signature" },
      ]},
    ],
    avis: [
      { nom: "Anis C.", initiales: "AC", note: 5, date: "Il y a 6 jours", texte: "Excellent accueil, precision dans les details, tres bon rapport qualite prix." },
    ],
    prochainCreneau: "Dem. 09h30",
    populaire: false,
    badge: "",
    badgeText: "",
  },
];

const USER_DEMO = {
  prenom: "Salma",
  nom: "Ben Khalil",
  initiales: "SB",
  email: "salma.bk@gmail.com",
  tel: "+216 55 123 456",
  points: 650,
  rdvAVenir: [
    { salonId: 1, salonNom: "Barber Elite Tunis", service: "Coupe + Barbe", date: "Mer. 30 avr.", heure: "10h30", prix: 45, adresse: "Lac 1, Tunis", statut: "confirmé" },
    { salonId: 2, salonNom: "Salon Yasmine", service: "Brushing + Soin kératine", date: "Lun. 5 mai", heure: "14h00", prix: 85, adresse: "Menzah 6, Tunis", statut: "confirmé" },
  ],
  rdvPasses: [
    { salonId: 3, salonNom: "Hammam Sidi Bou", service: "Hammam VIP", date: "Mar. 15 avr.", heure: "11h00", prix: 65, adresse: "Médina, Tunis", statut: "passé" },
    { salonId: 4, salonNom: "Beauty Spa Hanaa", service: "Manucure + Pédicure", date: "Sam. 5 avr.", heure: "15h30", prix: 50, adresse: "Ennasr, Ariana", statut: "passé" },
  ],
  favoris: [1, 2, 3],
};

const PRO_DEMO = {
  salonId: 1,
  prenom: "Zakaria",
  role: "Gérant",
  stats: { rdvJour: 14, caMois: 3240, nouveauxClients: 28, tauxRemplissage: 87 },
  agenda: [
    { heure: "09h00", client: "Mehdi Khelil", service: "Coupe + Barbe", duree: 45, statut: "booked" },
    { heure: "10h00", client: "Sami Trabelsi", service: "Rasage traditionnel", duree: 30, statut: "booked-velvet" },
    { heure: "10h30", client: null, statut: "free" },
    { heure: "11h00", client: "Amine Ben Said", service: "Dégradé Fade", duree: 35, statut: "booked-plum" },
    { heure: "11h30", client: null, statut: "free" },
    { heure: "12h00", client: null, statut: "pause" },
    { heure: "14h00", client: "Rami Jouini", service: "Coupe simple", duree: 30, statut: "booked" },
    { heure: "14h30", client: "Yassine Mrad", service: "Barbe complète", duree: 30, statut: "booked-velvet" },
    { heure: "15h00", client: null, statut: "free" },
    { heure: "15h30", client: "Khalil Ben Amor", service: "Coupe + Barbe", duree: 45, statut: "booked-plum" },
  ],
  activite: [
    { type: "new", texte: "<strong>Nouveau RDV</strong> — Rami Jouini, Coupe simple · 14h00", temps: "Il y a 12 min" },
    { type: "check", texte: "<strong>Confirmé</strong> — Yassine Mrad, Barbe complète · 14h30", temps: "Il y a 30 min" },
    { type: "review", texte: "<strong>Nouvel avis ★★★★★</strong> — Sami Trabelsi : \"Parfait comme toujours !\"", temps: "Il y a 1h" },
    { type: "new", texte: "<strong>Nouveau RDV</strong> — Mehdi Khelil, Coupe + Barbe · 09h00", temps: "Il y a 2h" },
  ],
  clients: [
    { id: 1, nom: "Mehdi Khelil", tel: "+216 54 214 302", visites: 12, derniereVisite: "23 avr.", preference: "Coupe + Barbe", statut: "VIP" },
    { id: 2, nom: "Sami Trabelsi", tel: "+216 27 902 118", visites: 7, derniereVisite: "Hier", preference: "Rasage traditionnel", statut: "Actif" },
    { id: 3, nom: "Karim Saidi", tel: "+216 98 441 125", visites: 3, derniereVisite: "15 avr.", preference: "Degrade skin fade", statut: "Nouveau" },
    { id: 4, nom: "Yassine Mrad", tel: "+216 22 017 883", visites: 9, derniereVisite: "Aujourd'hui", preference: "Barbe complete", statut: "Actif" },
    { id: 5, nom: "Ahmed K.", tel: "+216 31 560 444", visites: 5, derniereVisite: "12 avr.", preference: "Coupe classique", statut: "Actif" },
  ],
  reservations: [
    { id: "R-2401", client: "Mehdi Khelil", service: "Coupe + Barbe", date: "30 avr.", heure: "09h00", statut: "Confirmé", montant: 45 },
    { id: "R-2402", client: "Sami Trabelsi", service: "Rasage traditionnel", date: "30 avr.", heure: "10h00", statut: "Confirmé", montant: 20 },
    { id: "R-2403", client: "Karim Saidi", service: "Rasage trad.", date: "30 avr.", heure: "11h00", statut: "En attente", montant: 20 },
    { id: "R-2404", client: "Yassine Mrad", service: "Barbe complete", date: "30 avr.", heure: "14h30", statut: "Confirmé", montant: 25 },
    { id: "R-2405", client: "Ahmed K.", service: "Coupe classique", date: "30 avr.", heure: "16h30", statut: "Annulé", montant: 22 },
  ],
};

// Helpers
function getSalonById(id) { return SALONS.find(s => s.id === id); }
function getSalonBySlug(slug) { return SALONS.find(s => s.slug === slug); }
function getPopulaires() { return SALONS.filter(s => s.populaire); }
function renderStars(note) {
  const full = Math.floor(note);
  const half = note % 1 >= 0.5;
  let s = '';
  for (let i = 0; i < 5; i++) s += i < full ? '★' : (i === full && half ? '⭑' : '☆');
  return s;
}
function colorStyle(couleur) {
  const map = {
    plum: 'background: linear-gradient(135deg, #48252f 0%, #6b3a45 100%)',
    almond: 'background: linear-gradient(135deg, #e7d4bb 0%, #c9b088 100%)',
    velvet: 'background: linear-gradient(135deg, #4a4a3d 0%, #29281e 100%)',
    sand: 'background: linear-gradient(135deg, #c9b088 0%, #857861 100%)',
    warm: 'background: linear-gradient(135deg, #d4956a 0%, #a06040 100%)',
  };
  return map[couleur] || map.plum;
}
function genreBadge(genre, label) {
  const cls = { men: 'badge-men', women: 'badge-women', mixed: 'badge-mixed' };
  return `<span class="badge ${cls[genre]}">${label}</span>`;
}

const STORAGE_KEYS = {
  userRdv: "koupe_user_rdv_avenir",
  proClients: "koupe_pro_clients",
  proReservations: "koupe_pro_reservations",
};

function readStorageArray(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback.slice();
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : fallback.slice();
  } catch (e) {
    return fallback.slice();
  }
}

function writeStorageArray(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getUserRdv() {
  return readStorageArray(STORAGE_KEYS.userRdv, USER_DEMO.rdvAVenir);
}

function getProClients() {
  return readStorageArray(STORAGE_KEYS.proClients, PRO_DEMO.clients);
}

function getProReservations() {
  return readStorageArray(STORAGE_KEYS.proReservations, PRO_DEMO.reservations);
}

function saveProClients(clients) {
  writeStorageArray(STORAGE_KEYS.proClients, clients);
}

function saveProReservations(reservations) {
  writeStorageArray(STORAGE_KEYS.proReservations, reservations);
}

function saveUserRdv(rdv) {
  const data = getUserRdv();
  data.unshift(rdv);
  writeStorageArray(STORAGE_KEYS.userRdv, data);
}

function goReservationFromSalon(salonId, clientName) {
  const salon = getSalonById(salonId) || SALONS[0];
  const first = salon.services[0] && salon.services[0].items[0] ? salon.services[0].items[0] : { nom: "Coupe", prix: salon.prixMin, duree: "30 min" };
  const name = clientName || sessionStorage.getItem("user_name") || USER_DEMO.prenom;
  const booking = {
    salonId: salon.id,
    salonNom: salon.nom,
    service: first.nom,
    prix: first.prix,
    duree: first.duree,
    date: "Mer. 30 avr.",
    heure: "10h30",
    clientName: name,
    clientTel: sessionStorage.getItem("user_tel") || USER_DEMO.tel,
  };
  sessionStorage.setItem("booking", JSON.stringify(booking));
  window.location.href = "reservation.html";
}

function initMainNavActive() {
  const links = document.querySelectorAll('.nav-links a');
  if (!links.length) return;
  const page = location.pathname.split('/').pop() || 'index.html';
  let key = 'home';
  if (page === 'resultats.html' || page === 'salon.html' || page === 'reservation.html') key = 'salons';
  if (page === 'dashboard-pro.html' || page.startsWith('pro-')) key = 'pro';
  if (page === 'compte.html') key = 'compte';
  links.forEach(a => {
    const href = a.getAttribute('href') || '';
    const isHome = key === 'home' && href.includes('index.html');
    const isSalons = key === 'salons' && href.includes('resultats.html');
    const isPro = key === 'pro' && (href.includes('dashboard-pro.html') || href.includes('pro-dashboard.html'));
    const isCompte = key === 'compte' && href.includes('compte.html');
    a.classList.toggle('active', isHome || isSalons || isPro || isCompte);
  });
}
