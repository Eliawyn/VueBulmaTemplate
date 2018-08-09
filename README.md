# Bulma Vue

#### Notes
  - Utiliser AOS pour afficher une navbar fixe après un certain endroit (la navbar simple transparente sera toujours là mais en haut) avec un certain effet

### Liens utiles
**Vue Js**
 - https://coursetro.com/courses/23/Vue-Tutorial-in-2018---Learn-Vue.js-by-Example
 - https://medium.com/@jaouad_45834/full-stack-shopping-cart-with-mevn-stack-part-1-89dae1f35378
---
**Bulma**
 - https://bulma.io/
 - https://github.com/vue-bulma/vue-admin
---
**MongoDB and ElasticSearch**
 - https://dzone.com/articles/cli-for-indexing-data-from-mongodb-to-elasticsearc
 - https://github.com/appbaseio/abc
 - https://medium.appbase.io/cli-for-indexing-data-from-mongodb-to-elasticsearch-ee5a74695945
 - deprecated : https://www.compose.com/articles/mongoosastic-the-power-of-mongodb-and-elasticsearch-together/
 - deprecated : https://github.com/mongoosastic/mongoosastic
---
**Animate On Scroll**
 - http://michalsnik.github.io/aos/
 - https://www.youtube.com/watch?v=j_30KqVCmq8
---
**Site traduction i18n** (voir vue-starter)
 - https://kazupon.github.io/vue-i18n/
 - https://github.com/kazupon/vue-i18n
---
**Input Validation VeeValidate**
 - https://baianat.github.io/vee-validate/
 - https://coursetro.com/posts/code/137/Vue-Forms-Tutorial---Capturing-and-Validating-User-Input
---

### Installation du projet
Initialisation
```bash
# Import du template
git clone https://github.com/Eliawyn/VueBulmaTemplate.git
# renommer le dossier et les noms dans package.json et package-lock.json

cd project-name
npm install

# Lancement vue ui
vue ui

# Ouvrir le dossier importé
```

Modifier le scss qui se trouve dans le fichier `./src/App.vue`
```scss
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Import d'une nouvelle police (ne fonctionne pas ici)
// @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700,900');
// $family-sans-serif: "Montserrat", sans-serif;

// Exemple de css intégré
.tile.is-child {
  padding: 1.5rem;
}

// Set your colors
$primary: #f1896f;
$primary-invert: findColorInvert($primary);
$twitter: #4099ff;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "twitter": ($twitter, $twitter-invert)
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
```