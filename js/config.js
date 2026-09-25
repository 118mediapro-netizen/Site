/* =========================================================================
   LES FLOTS DES REMPARTS — CONFIGURATION DU SITE
   -------------------------------------------------------------------------
   👉 C'EST LE SEUL FICHIER À MODIFIER POUR VOS COORDONNÉES.
   Remplacez les valeurs entre guillemets par les vôtres, puis enregistrez.
   Tout le site (numéro cliquable, adresse, horaires, réseaux…) se met à
   jour automatiquement.
   ========================================================================= */

window.SITE = {
  /* --- Identité --- */
  nom: "Les Flots des Remparts",
  slogan: "Poissons & Grillades",
  ville: "Carcassonne",

  /* --- Téléphone (pour les réservations & renseignements) ---
     - telephoneAffiche : ce qui est écrit à l'écran
     - telephoneLien    : format international, sans espaces, pour les liens cliquables
                          (France : +33 puis le numéro sans le 0 initial)               */
  telephoneAffiche: "04 68 00 00 00",
  telephoneLien: "+33468000000",

  /* --- E-mail (utilisé pour les demandes de réservation) --- */
  email: "contact@lesflotsdesremparts.fr",

  /* --- Adresse --- */
  adresse: "6 avenue du Souvenir Français",   // n° et rue
  codePostal: "11000",
  adresseVille: "Carcassonne",

  /* Lien Google Maps (bouton « Itinéraire »).
     Astuce : cherchez le restaurant sur Google Maps → Partager → Copier le lien. */
  mapsLien: "https://www.google.com/maps/search/?api=1&query=Les+Flots+des+Remparts+Carcassonne",

  /* --- Horaires --- (service du soir uniquement ; ordre = ordre d'affichage) */
  horaires: [
    { jour: "Lundi",    creneaux: "Fermé" },
    { jour: "Mardi",    creneaux: "18h30 – 22h30" },
    { jour: "Mercredi", creneaux: "18h30 – 22h30" },
    { jour: "Jeudi",    creneaux: "18h30 – 22h30" },
    { jour: "Vendredi", creneaux: "18h30 – 22h30" },
    { jour: "Samedi",   creneaux: "18h30 – 22h30" },
    { jour: "Dimanche", creneaux: "18h30 – 22h30" }
  ],

  /* --- Réseaux sociaux --- (laissez "" pour masquer l'icône) */
  instagram: "",
  facebook: ""
};
