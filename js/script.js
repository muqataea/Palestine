"use strict";
// Products data
const productsData = [
  {
    imgUrl: "assets/images/chess-craft.webp",
    type: "dairy",
    scale: .8,
    id: 1,
  },
  {
    imgUrl: "assets/images/kiri.webp",
    type: "dairy",
    scale: .9,
    id: 2,
  },
  {
    imgUrl: "assets/images/president.avif",
    type: "dairy",
    scale: .9,
    id: 3,
  },
  {
    imgUrl: "assets/images/laVacheQuiRit.webp",
    type: "dairy",
    id: 4,
  },
  {
    imgUrl: "assets/images/aboalwld.webp",
    type: "dairy",
    scale: .8,
    id: 5,
  },
  {
    imgUrl: "assets/images/7up.webp",
    type: "drinks",
    scale: .5,
    id: 6,
  },
  {
    imgUrl: "assets/images/lipton.webp",
    type: "drinks",
    scale: .6,
    id: 7,
  },
  {
    imgUrl: "assets/images/nescafe.webp",
    type: "companies drinks",
    scale: .8,
    id: 8,
  },
  {
    imgUrl: "assets/images/pepsi.webp",
    type: "drinks",
    scale: .6,
    id: 9,
  },
  {
    imgUrl: "assets/images/fanta.webp",
    type: "drinks",
    scale: .5,
    id: 10,
  },
  {
    imgUrl: "assets/images/cocacola.webp",
    type: "drinks",
    scale: .5,
    id: 11,
  },
  {
    imgUrl: "assets/images/mirinda.webp",
    type: "drinks",
    scale: .5,
    id: 12,
  },
  {
    imgUrl: "assets/images/fabercastell.webp",
    type: "luxuries",
    scale: .7,
    id: 13,
  },
  {
    imgUrl: "assets/images/kodak.webp",
    type: "companies",
    scale: .7,
    id: 14,
  },
  {
    imgUrl: "assets/images/knorr.avif",
    type: "luxuries",
    scale: .8,
    id: 15,
  },
  {
    imgUrl: "assets/images/twix.webp",
    type: "luxuries",
    id: 16,
  },
  {
    imgUrl: "assets/images/mars.webp",
    type: "luxuries",
    id: 17,
  },
  {
    imgUrl: "assets/images/kitkat.webp",
    type: "luxuries",
    scale: 1.1,
    id: 18,
  },
  {
    imgUrl: "assets/images/galaxy.webp",
    type: "luxuries",
    scale: 1.1,
    id: 19,
  },
  {
    imgUrl: "assets/images/bounty.webp",
    type: "luxuries",
    scale: 1.1,
    id: 20,
  },
  {
    imgUrl: "assets/images/snuckers.webp",
    type: "luxuries",
    scale: 1.2,
    id: 21,
  },
  {
    imgUrl: "assets/images/chipsy.webp",
    type: "luxuries",
    scale: .8,
    id: 22,
  },
  {
    imgUrl: "assets/images/doeitos.webp",
    type: "luxuries",
    scale: .8,
    id: 23,
  },
  {
    imgUrl: "assets/images/cheetos.avif",
    type: "luxuries",
    scale: .8,
    id: 24,
  },
  {
    imgUrl: "assets/images/pringles.avif",
    type: "luxuries",
    scale: .9,
    id: 25,
  },
  {
    imgUrl: "assets/images/lays.webp",
    type: "luxuries",
    scale: .8,
    id: 26,
  },
  {
    imgUrl: "assets/images/cornflakes.avif",
    type: "luxuries",
    scale: .75,
    id: 27,
  },
  {
    imgUrl: "assets/images/chiclets.webp",
    type: "luxuries",
    scale: .8,
    id: 28,
  },
  {
    imgUrl: "assets/images/pizzahut.webp",
    type: "restaurants",
    scale: .7,
    id: 29,
  },
  {
    imgUrl: "assets/images/kfc.webp",
    type: "restaurants",
    scale: .6,
    id: 30,
  },
  {
    imgUrl: "assets/images/fridays.webp",
    type: "restaurants",
    scale: .8,
    id: 31,
  },
  {
    imgUrl: "assets/images/dominos.webp",
    type: "restaurants",
    id: 32,
  },
  {
    imgUrl: "assets/images/maggi.webp",
    type: "companies",
    scale: .8,
    id: 33,
  },
  {
    imgUrl: "assets/images/dasani.webp",
    type: "drinks",
    scale: .8,
    id: 34,
  },
  {
    imgUrl: "assets/images/baraka.webp",
    type: "drinks",
    scale: .65,
    id: 35,
  },
  {
    imgUrl: "assets/images/evian.webp",
    type: "drinks",
    scale: .8,
    id: 36,
  },
  {
    imgUrl: "assets/images/spraite.webp",
    type: "drinks",
    scale: .5,
    id: 37,
  },
  {
    imgUrl: "assets/images/dew.webp",
    type: "drinks",
    scale: .55,
    id: 38,
  },
  {
    imgUrl: "assets/images/tang.webp",
    type: "drinks",
    scale: .5,
    id: 39,
  },
  {
    imgUrl: "assets/images/aquafina.webp",
    type: "drinks",
    scale: .6,
    id: 40,
  },
  {
    imgUrl: "assets/images/bonux.webp",
    type: "detergents",
    scale: .55,
    id: 41,
  },
  {
    imgUrl: "assets/images/vanish.webp",
    type: "detergents",
    scale: .6,
    id: 42,
  },
  {
    imgUrl: "assets/images/comfort.webp",
    type: "detergents",
    scale: .6,
    id: 43,
  },
  {
    imgUrl: "assets/images/nido.webp",
    type: "detergents",
    scale: .6,
    id: 44,
  },
  {
    imgUrl: "assets/images/pertplus.webp",
    type: "detergents",
    scale: .6,
    id: 45,
  },
  {
    imgUrl: "assets/images/pantene.webp",
    type: "detergents",
    scale: .6,
    id: 46,
  },
  {
    imgUrl: "assets/images/persil.webp",
    type: "detergents",
    scale: .6,
    id: 47,
  },
  {
    imgUrl: "assets/images/tide.webp",
    type: "detergents",
    scale: .6,
    id: 48,
  },
  {
    imgUrl: "assets/images/ariel.webp",
    type: "detergents",
    scale: .6,
    id: 49,
  },
  {
    imgUrl: "assets/images/omo.webp",
    type: "detergents",
    scale: .75,
    id: 50,
  },
  {
    imgUrl: "assets/images/johnson.webp",
    type: "detergents",
    scale: .7,
    id: 51,
  },
  {
    imgUrl: "assets/images/downy.webp",
    type: "detergents",
    scale: .6,
    id: 52,
  },
  {
    imgUrl: "assets/images/general.webp",
    type: "detergents",
    id: 53,
  },
  {
    imgUrl: "assets/images/fairy.webp",
    type: "detergents",
    scale: .6,
    id: 54,
  },
  {
    imgUrl: "assets/images/pril.webp",
    type: "detergents",
    scale: .6,
    id: 55,
  },
  {
    imgUrl: "assets/images/head&shoulders.webp",
    type: "detergents",
    scale: .6,
    id: 56,
  },
  {
    imgUrl: "assets/images/zest.webp",
    type: "detergents",
    scale: .7,
    id: 57,
  },
  {
    imgUrl: "assets/images/camay.webp",
    type: "detergents",
    scale: .8,
    id: 58,
  },
  {
    imgUrl: "assets/images/lifebouy.avif",
    type: "detergents",
    scale: .9,
    id: 59,
  },
  {
    imgUrl: "assets/images/mcdonald's.webp",
    type: "restaurants",
    scale: .6,
    id: 60,
  },
  {
    imgUrl: "assets/images/dettol.webp",
    type: "companies",
    scale: .6,
    id: 61,
  },
  {
    imgUrl: "assets/images/clorox.webp",
    type: "companies",
    scale: .7,
    id: 62,
  },
  {
    imgUrl: "assets/images/danone.webp",
    type: "companies",
    scale: .8,
    id: 63,
  },
  {
    imgUrl: "assets/images/starbuks.webp",
    type: "companies",
    scale: .7,
    id: 64,
  },
  {
    imgUrl: "assets/images/halls.webp",
    type: "luxuries",
    id: 65,
  },
  {
    imgUrl: "assets/images/oreo.webp",
    type: "luxuries",
    scale: 1.1,
    id: 66,
  },
  {
    imgUrl: "assets/images/vicks.webp",
    type: "companies",
    id: 67,
  },
  {
    imgUrl: "assets/images/nike.webp",
    type: "companies",
    scale: .8,
    id: 68,
  },
  {
    imgUrl: "assets/images/always.webp",
    type: "luxuries",
    scale: .6,
    id: 69,
  },
  {
    imgUrl: "assets/images/pampers.webp",
    type: "luxuries",
    scale: .7,
    id: 70,
  },
  {
    imgUrl: "assets/images/luvs.webp",
    type: "luxuries",
    scale: .8,
    id: 71,
  },
  {
    imgUrl: "assets/images/kleenex.webp",
    type: "luxuries",
    scale: .8,
    id: 72,
  },
  {
    imgUrl: "assets/images/kotex.webp",
    type: "luxuries",
    scale: .8,
    id: 73,
  },
  {
    imgUrl: "assets/images/signal.webp",
    type: "luxuries",
    id: 74,
  },
  {
    imgUrl: "assets/images/colgate.webp",
    type: "luxuries",
    scale: 1.1,
    id: 75,
  },
  {
    imgUrl: "assets/images/closeup.webp",
    type: "luxuries",
    scale: .9,
    id: 76,
  },
  {
    imgUrl: "assets/images/crest.webp",
    type: "luxuries",
    scale: .8,
    id: 77,
  },
  {
    imgUrl: "assets/images/raid.webp",
    type: "luxuries",
    scale: .9,
    id: 78,
  },
  {
    imgUrl: "assets/images/burgerking.webp",
    type: "restaurants",
    scale: .6,
    id: 79,
  },
  {
    imgUrl: "assets/images/nesquik.webp",
    type: "luxuries",
    scale: .6,
    id: 80,
  },
  {
    imgUrl: "assets/images/hardees.webp",
    type: "restaurants",
    scale: .9,
    id: 81,
  },
  {
    imgUrl: "assets/images/PapaJohn's.svg",
    type: "restaurants",
    scale: .8,
    id: 82,
  },
  {
    imgUrl: "assets/images/carrefour.webp",
    type: "companies",
    scale: .8,
    id: 83,
  },
  {
    imgUrl: "assets/images/marlboro.webp",
    type: "luxuries",
    scale: 1.1,
    id: 84,
  },
  {
    imgUrl: "assets/images/gillette.webp",
    type: "luxuries",
    scale: .8,
    id: 85,
  },
  {
    imgUrl: "assets/images/vaseline.webp",
    type: "luxuries",
    id: 86,
  },
  {
    imgUrl: "assets/images/cocopops.webp",
    type: "luxuries",
    scale: .8,
    id: 87,
  },
  {
    imgUrl: "assets/images/activia.webp",
    type: "drinks",
    id: 88,
  },
  {
    imgUrl: "assets/images/ahava.webp",
    type: "luxuries",
    id: 89,
  },
  {
    imgUrl: "assets/images/coffeemate.webp",
    type: "drinks",
    id: 90,
  },
  {
    imgUrl: "assets/images/m&m.webp",
    type: "luxuries",
    scale: .8,
    id: 91,
  },
  {
    imgUrl: "assets/images/wix.webp",
    type: "companies",
    scale: .8,
    id: 92,
  },
];




// Selectors
const productsContainer = document.querySelector(".product-cards .cards");




// Functions
function createProductEle({ imgUrl, type, scale, id }) {
  const productName = getProductName(imgUrl);
  const productStructure = `
  <div class="mix card ${type}" title=${productName}>
    <img
      src=${imgUrl}
      alt=${productName}
      ${scale ? `style="transform: scale(${scale})"` : ""} />
  </div>`;

  productsContainer.innerHTML += productStructure;
}

function getProductName(str) {
  const splittedWords = str.split("/");
  const fullName = splittedWords[splittedWords.length - 1];
  const nameOnly = fullName.split(".")[0];
  return nameOnly;
}

function displayProducts() {
  productsData.forEach((productData) => createProductEle(productData));
}
displayProducts();




// Filter Animations
let mixer = mixitup(".cards", {
  selectors: {
    target: ".card",
  },
  animation: {
    duration: 300,
  },
});
