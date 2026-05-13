# 🎨 Carte Interactive - Profil Dynamique

Une carte de profil interactive avec boutons qui modifient le DOM en temps réel.

## 🔘 Fonctionnalités des Boutons

| Bouton | Fonction | Interaction JS/CSS |
|--------|----------|-------------------|
| **Changer le nom** | Remplace "Alex Martin" par "Développeur web" | JS modifie le `textContent` de l'élément `#name` |
| **Changer la couleur** | Change aléatoirement la couleur de fond de la carte | JS applique `backgroundColor` au `.card` + CSS gère la `transition: ease-in 0.3s` |
| **Changer les skills** | Ajoute "JavaScript" dans la liste des compétences | JS crée un `<li>` et l'ajoute au DOM, CSS le style avec flexbox |
| **Afficher/cacher la description** | Affiche ou masque le texte "Développeur débutant" | JS bascule `display: none/block` sur `#description` |

## 🎯 Comment ça Marche

- **JavaScript** : Détecte les clics sur les boutons (`onclick`), modifie le DOM et applique les styles
- **CSS** : Gère l'apparence statique (couleurs, flexbox, animations, transitions) et les effets au survol
- **Ensemble** : Le JS change les propriétés, le CSS les anime et les affiche joliment

## 📱 Responsive

La carte s'adapte automatiquement sur mobile (< 500px) grâce aux media queries CSS.

## 🚀 Utilisation

Ouvrez `index.html` dans votre navigateur et cliquez sur les boutons !
