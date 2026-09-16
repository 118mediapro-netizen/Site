# Les Flots des Remparts — Site web

Site vitrine du restaurant **Les Flots des Remparts** (poissons & grillades, Carcassonne).
Mise en avant de la **commande par téléphone** — à emporter, en livraison et réservation de table.

Site 100 % statique (HTML/CSS/JS) : aucun serveur ni base de données. Il s'héberge
partout (GitHub Pages, Netlify, OVH, o2switch…) en copiant simplement les fichiers.

---

## ✏️ Personnaliser le site (l'essentiel)

**Tout se règle dans un seul fichier : [`js/config.js`](js/config.js).**
Ouvrez-le, remplacez les valeurs entre guillemets par les vôtres, enregistrez. C'est tout.

Les points à compléter en priorité :

| Élément | Où (dans `js/config.js`) | Remarque |
|---|---|---|
| **Numéro de téléphone** | `telephoneAffiche` et `telephoneLien` | ⚠️ le plus important. `telephoneLien` = format international : `+33` puis le numéro **sans le 0** initial. Ex. `04 68 25 30 30` → `+33468253030` |
| **Adresse** | `adresse`, `codePostal`, `adresseVille` | met à jour l'adresse **et** le plan Google |
| **Horaires** | `horaires` | modifiez chaque ligne ; `"Fermé"` s'affiche en rouge |
| **E-mail** | `email` | sert aux demandes de réservation |
| **Zone / infos livraison** | `livraisonZone`, `livraisonInfo` | |
| **Google Maps** | `mapsLien` | Google Maps → votre resto → *Partager* → *Copier le lien* |
| **WhatsApp** (optionnel) | `whatsapp` | laissez `""` pour masquer le bouton. Sinon format `33612345678` |
| **Réseaux sociaux** | `instagram`, `facebook` | laissez `""` pour masquer l'icône |

> Le numéro de téléphone apparaît automatiquement partout (barre du haut, hero,
> boutons « Appeler pour commander », bouton flottant sur mobile, pied de page).

---

## 🖼️ Remplacer la carte / ajouter des photos

- La photo de la **carte imprimée** est `assets/carte-les-flots-des-remparts.jpg`.
  Remplacez ce fichier (même nom) pour mettre à jour la carte affichée et téléchargeable.
- Les **prix et plats** affichés dans la page sont dans `index.html`
  (sections *Entrées, Poissons, Viandes, Desserts, Boissons*). Modifiez le texte directement.
- Pour une **photo de partage** (réseaux sociaux) et une bannière, ajoutez vos images
  dans `assets/` puis ajustez la balise `og:image` dans `index.html`.

---

## 📞 Comment fonctionne la commande

Comme convenu, la commande se fait **par téléphone** (pas de panier en ligne) :

1. le client clique sur un bouton **« Appeler pour commander »** (présent partout) ;
2. sur mobile, l'appel se lance directement ;
3. la **réservation** peut se faire par téléphone ou via le petit formulaire, qui
   ouvre l'application e-mail du client avec la demande pré-remplie (à confirmer par vos soins).

---

## 🚀 Mettre en ligne

**Option simple — GitHub Pages :**
1. Poussez le dépôt sur GitHub.
2. *Settings → Pages → Build and deployment → Source : Deploy from a branch*.
3. Choisissez la branche puis `/root`. Le site est publié en quelques minutes.

**Option glisser-déposer — Netlify :**
- Allez sur app.netlify.com → *Add new site → Deploy manually* → déposez le dossier.

**Hébergeur classique (OVH, o2switch…) :**
- Envoyez tous les fichiers (dont les dossiers `css/`, `js/`, `assets/`) par FTP
  à la racine `www/` ou `public_html/`.

---

## 📁 Structure

```
.
├── index.html      ← la page (contenu, menu, sections)
├── css/styles.css  ← design (couleurs, mise en page)
├── js/
│   ├── config.js   ← ⭐ VOS COORDONNÉES (à modifier)
│   └── main.js     ← logique (liens, horaires, formulaire…)
├── assets/
│   ├── carte-les-flots-des-remparts.jpg
│   └── favicon.svg
└── README.md
```

---

*Bonne dégustation et bonnes commandes ! 🐟🔥*
