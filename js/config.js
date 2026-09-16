/* =========================================================================
   LES FLOTS DES REMPARTS — CONFIGURATION DU SITE
   -------------------------------------------------------------------------
   👉 C'EST LE SEUL FICHIER À MODIFIER POUR VOS COORDONNÉES.
   Remplacez les valeurs entre guillemets par les vôtres, puis enregistrez.
   Tout le site (numéros cliquables, adresse, horaires, carte, réseaux…)
   se met à jour automatiquement.
   ========================================================================= */

window.SITE = {
  /* --- Identité --- */
  nom: "Les Flots des Remparts",
  slogan: "Poissons & Grillades",
  ville: "Carcassonne",

  /* --- Téléphone (LE PLUS IMPORTANT pour les commandes) ---
     - telephoneAffiche : ce qui est écrit à l'écran
     - telephoneLien    : format international, sans espaces, pour les liens cliquables
                          (France : +33 puis le numéro sans le 0 initial)               */
  telephoneAffiche: "04 68 00 00 00",
  telephoneLien: "+33468000000",

  /* --- WhatsApp (optionnel) --- Laissez "" pour masquer le bouton WhatsApp.
     Format international sans + ni espaces, ex : "33612345678" */
  whatsapp: "",

  /* --- E-mail (utilisé pour les demandes de réservation) --- */
  email: "contact@lesflotsdesremparts.fr",

  /* --- Adresse --- */
  adresse: "1 rue des Remparts",       // n° et rue
  codePostal: "11000",
  adresseVille: "Carcassonne",

  /* Lien Google Maps (bouton « Itinéraire »).
     Astuce : cherchez le restaurant sur Google Maps → Partager → Copier le lien. */
  mapsLien: "https://www.google.com/maps/search/?api=1&query=Les+Flots+des+Remparts+Carcassonne",

  /* --- Livraison --- */
  livraisonZone: "Carcassonne et communes alentours (jusqu'à 10 km)",
  livraisonInfo: "Commande minimum 25 € · Frais selon la distance",

  /* --- Horaires --- (ordre = ordre d'affichage) */
  horaires: [
    { jour: "Lundi",    creneaux: "Fermé" },
    { jour: "Mardi",    creneaux: "12h00 – 14h30 · 19h00 – 22h30" },
    { jour: "Mercredi", creneaux: "12h00 – 14h30 · 19h00 – 22h30" },
    { jour: "Jeudi",    creneaux: "12h00 – 14h30 · 19h00 – 22h30" },
    { jour: "Vendredi", creneaux: "12h00 – 14h30 · 19h00 – 23h00" },
    { jour: "Samedi",   creneaux: "12h00 – 14h30 · 19h00 – 23h00" },
    { jour: "Dimanche", creneaux: "12h00 – 15h00" }
  ],

  /* --- Réseaux sociaux --- (laissez "" pour masquer l'icône) */
  instagram: "",
  facebook: "",

  /* --- Message pré-rempli WhatsApp (si activé) --- */
  whatsappMessage: "Bonjour, je souhaite passer une commande :"
};
