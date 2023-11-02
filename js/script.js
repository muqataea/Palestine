"use strict";
// Products data
const productsData = [
  {
    imgUrl: "assets/images/chess-craft.webp",
    type: "dairy",
    id: 1,
  },
  {
    imgUrl: "assets/images/kiri.webp",
    type: "dairy",
    id: 2,
  },
  {
    imgUrl: "assets/images/president.avif",
    type: "dairy",
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
    id: 5,
  },
  {
    imgUrl: "assets/images/7up.webp",
    type: "drinks",
    id: 6,
  },
  {
    imgUrl: "assets/images/lipton.webp",
    type: "drinks",
    id: 7,
  },
  {
    imgUrl: "assets/images/nescafe.webp",
    type: "companies drinks",
    id: 8,
  },
  {
    imgUrl: "assets/images/pepsi.webp",
    type: "drinks",
    id: 9,
  },
  {
    imgUrl: "assets/images/fanta.webp",
    type: "drinks",
    id: 10,
  },
  {
    imgUrl: "assets/images/cocacola.webp",
    type: "drinks",
    id: 11,
  },
  {
    imgUrl: "assets/images/mirinda.webp",
    type: "drinks",
    id: 12,
  },
  {
    imgUrl: "assets/images/faberCastell.webp",
    type: "luxuries",
    id: 13,
  },
  {
    imgUrl: "assets/images/kodak.webp",
    type: "companies",
    id: 14,
  },
  {
    imgUrl: "assets/images/knorr.avif",
    type: "luxuries",
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
    id: 18,
  },
  {
    imgUrl: "assets/images/galaxy.webp",
    type: "luxuries",
    id: 19,
  },
  {
    imgUrl: "assets/images/bounty.webp",
    type: "luxuries",
    id: 20,
  },
  {
    imgUrl: "assets/images/snuckers.webp",
    type: "luxuries",
    id: 21,
  },
  {
    imgUrl: "assets/images/chipsy.webp",
    type: "luxuries",
    id: 22,
  },
  {
    imgUrl: "assets/images/doeitos.webp",
    type: "luxuries",
    id: 23,
  },
  {
    imgUrl: "assets/images/cheetos.avif",
    type: "luxuries",
    id: 24,
  },
  {
    imgUrl: "assets/images/pringles.avif",
    type: "luxuries",
    id: 25,
  },
  {
    imgUrl: "assets/images/lays.webp",
    type: "luxuries",
    id: 26,
  },
  {
    imgUrl: "assets/images/cornflakes.avif",
    type: "luxuries",
    id: 27,
  },
  {
    imgUrl: "assets/images/chiclets.webp",
    type: "luxuries",
    id: 28,
  },
  {
    imgUrl: "assets/images/pizzahut.webp",
    type: "restaurants",
    id: 29,
  },
  {
    imgUrl: "assets/images/KFC.webp",
    type: "restaurants",
    id: 30,
  },
  {
    imgUrl: "assets/images/fridays.webp",
    type: "restaurants",
    id: 31,
  },
  {
    imgUrl: "assets/images/dominos.webp",
    type: "restaurants",
    id: 32,
  },
  {
    imgUrl: "assets/images/Maggi.webp",
    type: "companies",
    id: 33,
  },
  {
    imgUrl: "assets/images/dasani.webp",
    type: "drinks",
    id: 34,
  },
  {
    imgUrl: "assets/images/baraka.webp",
    type: "drinks",
    id: 35,
  },
  {
    imgUrl: "assets/images/evian.webp",
    type: "drinks",
    id: 36,
  },
  {
    imgUrl: "assets/images/spraite.webp",
    type: "drinks",
    id: 37,
  },
  {
    imgUrl: "assets/images/dew.webp",
    type: "drinks",
    id: 38,
  },
  {
    imgUrl: "assets/images/tang.webp",
    type: "drinks",
    id: 39,
  },
  {
    imgUrl: "assets/images/aquafina.webp",
    type: "drinks",
    id: 40,
  },
  {
    imgUrl: "assets/images/bonux.webp",
    type: "detergents",
    id: 41,
  },
  {
    imgUrl: "assets/images/vanish.webp",
    type: "detergents",
    id: 42,
  },
  {
    imgUrl: "assets/images/comfort.webp",
    type: "detergents",
    id: 43,
  },
  {
    imgUrl: "assets/images/nido.webp",
    type: "detergents",
    id: 44,
  },
  {
    imgUrl: "assets/images/pertPlus.webp",
    type: "detergents",
    id: 45,
  },
  {
    imgUrl: "assets/images/pantene.webp",
    type: "detergents",
    id: 46,
  },
  {
    imgUrl: "assets/images/persil.webp",
    type: "detergents",
    id: 47,
  },
  {
    imgUrl: "assets/images/tide.webp",
    type: "detergents",
    id: 48,
  },
  {
    imgUrl: "assets/images/ariel.webp",
    type: "detergents",
    id: 49,
  },
  {
    imgUrl: "assets/images/omo.webp",
    type: "detergents",
    id: 50,
  },
  {
    imgUrl: "assets/images/johnson.webp",
    type: "detergents",
    id: 51,
  },
  {
    imgUrl: "assets/images/downy.webp",
    type: "detergents",
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
    id: 54,
  },
  {
    imgUrl: "assets/images/pril.webp",
    type: "detergents",
    id: 55,
  },
  {
    imgUrl: "assets/images/head&shoulders.webp",
    type: "detergents",
    id: 56,
  },
  {
    imgUrl: "assets/images/zest.webp",
    type: "detergents",
    id: 57,
  },
  {
    imgUrl: "assets/images/camay.webp",
    type: "detergents",
    id: 58,
  },
  {
    imgUrl: "assets/images/lifebouy.avif",
    type: "detergents",
    id: 59,
  },
  {
    imgUrl: "assets/images/mcdonald's.webp",
    type: "restaurants",
    id: 60,
  },
  {
    imgUrl: "assets/images/dettol.webp",
    type: "companies",
    id: 61,
  },
  {
    imgUrl: "assets/images/Clorox.webp",
    type: "companies",
    id: 62,
  },
  {
    imgUrl: "assets/images/danone.webp",
    type: "companies",
    id: 63,
  },
  {
    imgUrl: "assets/images/starbuks.webp",
    type: "companies",
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
    id: 68,
  },
  {
    imgUrl: "assets/images/always.webp",
    type: "luxuries",
    id: 69,
  },
  {
    imgUrl: "assets/images/pampers.webp",
    type: "luxuries",
    id: 70,
  },
  {
    imgUrl: "assets/images/luvs.webp",
    type: "luxuries",
    id: 71,
  },
  {
    imgUrl: "assets/images/kleenex.webp",
    type: "luxuries",
    id: 72,
  },
  {
    imgUrl: "assets/images/kotex.webp",
    type: "luxuries",
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
    id: 75,
  },
  {
    imgUrl: "assets/images/closeup.webp",
    type: "luxuries",
    id: 76,
  },
  {
    imgUrl: "assets/images/crest.webp",
    type: "luxuries",
    id: 77,
  },
  {
    imgUrl: "assets/images/raid.webp",
    type: "luxuries",
    id: 78,
  },
  {
    imgUrl: "assets/images/burgerking.webp",
    type: "restaurants",
    id: 79,
  },
  {
    imgUrl: "assets/images/nesquik.webp",
    type: "luxuries",
    id: 80,
  },
  {
    imgUrl: "assets/images/hardees.webp",
    type: "restaurants",
    id: 81,
  },
  {
    imgUrl: "assets/images/PapaJohn's.svg",
    type: "restaurants",
    id: 82,
  },
  {
    imgUrl: "assets/images/carrefour.webp",
    type: "companies",
    id: 83,
  },
];




// Selectors
const productsContainer = document.querySelector(".product-cards .cards");




// Functions
function createProductEle({ imgUrl, type, id }) {
  const productName = getProductName(imgUrl);
  const productStructure = `
  <div class="mix card ${type}" title=${productName}>
    <img src=${imgUrl} alt=${productName} />
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
