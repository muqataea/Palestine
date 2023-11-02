"use strict";
// Products data
const productsData = [
  {
    imgUrl: "./assets/images/chess-craft.webp",
    type: "dairy",
    id: 1,
  },
  {
    imgUrl: "./assets/images/kiri.webp",
    type: "dairy",
    id: 2,
  },
  {
    imgUrl: "./assets/images/president.avif",
    type: "dairy",
    id: 3,
  },
  {
    imgUrl: "./assets/images/laVacheQuiRit.webp",
    type: "dairy",
    id: 4,
  },
  {
    imgUrl: "./assets/images/aboalwld.webp",
    type: "dairy",
    id: 5,
  },
  {
    imgUrl: "./assets/images/lipton.webp",
    type: "drinks",
    id: 6,
  },
  {
    imgUrl: "./assets/images/nescafe.webp",
    type: "companies drinks",
    id: 7,
  },
  {
    imgUrl: "./assets/images/pepsi.webp",
    type: "drinks",
    id: 8,
  },
  {
    imgUrl: "./assets/images/cocacola.webp",
    type: "drinks",
    id: 9,
  },
  {
    imgUrl: "./assets/images/mirinda.webp",
    type: "drinks",
    id: 10,
  },
  {
    imgUrl: "./assets/images/faberCastell.webp",
    type: "luxuries",
    id: 66,
  },
  {
    imgUrl: "./assets/images/kodak.webp",
    type: "companies",
    id: 67,
  },
  {
    imgUrl: "./assets/images/knorr.avif",
    type: "luxuries",
    id: 68,
  },
  {
    imgUrl: "./assets/images/twix.webp",
    type: "luxuries",
    id: 69,
  },
  {
    imgUrl: "./assets/images/mars.webp",
    type: "luxuries",
    id: 70,
  },
  {
    imgUrl: "./assets/images/kitkat.webp",
    type: "luxuries",
    id: 71,
  },
  {
    imgUrl: "./assets/images/galaxy.webp",
    type: "luxuries",
    id: 72,
  },
  {
    imgUrl: "./assets/images/bounty.webp",
    type: "luxuries",
    id: 73,
  },
  {
    imgUrl: "./assets/images/snuckers.webp",
    type: "luxuries",
    id: 74,
  },
  {
    imgUrl: "./assets/images/chipsy.webp",
    type: "luxuries",
    id: 75,
  },
  {
    imgUrl: "./assets/images/doeitos.webp",
    type: "luxuries",
    id: 76,
  },
  {
    imgUrl: "./assets/images/cheetos.avif",
    type: "luxuries",
    id: 77,
  },
  {
    imgUrl: "./assets/images/pringles.avif",
    type: "luxuries",
    id: 78,
  },
  {
    imgUrl: "./assets/images/lays.webp",
    type: "luxuries",
    id: 79,
  },
  {
    imgUrl: "./assets/images/cornflakes.avif",
    type: "luxuries",
    id: 80,
  },
  {
    imgUrl: "./assets/images/chiclets.webp",
    type: "luxuries",
    id: 81,
  },
  {
    imgUrl: "./assets/images/pizzahut.webp",
    type: "restaurants",
    id: 82,
  },
  {
    imgUrl: "./assets/images/KFC.webp",
    type: "restaurants",
    id: 83,
  },
  {
    imgUrl: "./assets/images/fridays.webp",
    type: "restaurants",
    id: 84,
  },
  {
    imgUrl: "./assets/images/burgerking.webp",
    type: "restaurants",
    id: 85,
  },
  {
    imgUrl: "./assets/images/nesquik.webp",
    type: "luxuries",
    id: 86,
  },
  {
    imgUrl: "./assets/images/hardees.webp",
    type: "restaurants",
    id: 87,
  },
  {
    imgUrl: "./assets/images/PapaJohn's.svg",
    type: "restaurants",
    id: 88,
  },
  {
    imgUrl: "./assets/images/carrefour.webp",
    type: "companies",
    id: 89,
  },
  {
    imgUrl: "./assets/images/dominos.webp",
    type: "restaurants",
    id: 90,
  },
  {
    imgUrl: "./assets/images/Maggi.webp",
    type: "companies",
    id: 91,
  },
  {
    imgUrl: "./assets/images/dasani.webp",
    type: "drinks",
    id: 92,
  },
  {
    imgUrl: "./assets/images/baraka.webp",
    type: "drinks",
    id: 93,
  },
  {
    imgUrl: "./assets/images/evian.webp",
    type: "drinks",
    id: 94,
  },
  {
    imgUrl: "./assets/images/aquafina.webp",
    type: "drinks",
    id: 95,
  },
  {
    imgUrl: "./assets/images/bonux.webp",
    type: "detergents",
    id: 96,
  },
  {
    imgUrl: "./assets/images/vanish.webp",
    type: "detergents",
    id: 97,
  },
  {
    imgUrl: "./assets/images/comfort.webp",
    type: "detergents",
    id: 98,
  },
  {
    imgUrl: "./assets/images/pertPlus.webp",
    type: "detergents",
    id: 99,
  },
  {
    imgUrl: "./assets/images/pantene.webp",
    type: "detergents",
    id: 100,
  },
  {
    imgUrl: "./assets/images/persil.webp",
    type: "detergents",
    id: 101,
  },
  {
    imgUrl: "./assets/images/tide.webp",
    type: "detergents",
    id: 102,
  },
  {
    imgUrl: "./assets/images/ariel.webp",
    type: "detergents",
    id: 103,
  },
  {
    imgUrl: "./assets/images/omo.webp",
    type: "detergents",
    id: 104,
  },
  {
    imgUrl: "./assets/images/johnson.webp",
    type: "detergents",
    id: 105,
  },
  {
    imgUrl: "./assets/images/downy.webp",
    type: "detergents",
    id: 106,
  },
  {
    imgUrl: "./assets/images/general.webp",
    type: "detergents",
    id: 107,
  },
  {
    imgUrl: "./assets/images/fairy.webp",
    type: "detergents",
    id: 108,
  },
  {
    imgUrl: "./assets/images/pril.webp",
    type: "detergents",
    id: 109,
  },
  {
    imgUrl: "./assets/images/head&shoulders.webp",
    type: "detergents",
    id: 110,
  },
  {
    imgUrl: "./assets/images/zest.webp",
    type: "detergents",
    id: 111,
  },
  {
    imgUrl: "./assets/images/camay.webp",
    type: "detergents",
    id: 112,
  },
  {
    imgUrl: "./assets/images/lifebouy.avif",
    type: "detergents",
    id: 113,
  },
  {
    imgUrl: "./assets/images/mcdonald's.webp",
    type: "restaurants",
    id: 114,
  },
  {
    imgUrl: "./assets/images/dettol.webp",
    type: "companies",
    id: 115,
  },
  {
    imgUrl: "./assets/images/Clorox.webp",
    type: "companies",
    id: 116,
  },
  {
    imgUrl: "./assets/images/danone.webp",
    type: "companies",
    id: 117,
  },
  {
    imgUrl: "./assets/images/starbuks.webp",
    type: "companies",
    id: 118,
  },
  {
    imgUrl: "./assets/images/halls.webp",
    type: "luxuries",
    id: 119,
  },
  {
    imgUrl: "./assets/images/oreo.webp",
    type: "luxuries",
    id: 120,
  },
  {
    imgUrl: "./assets/images/vicks.webp",
    type: "companies",
    id: 121,
  },
  {
    imgUrl: "./assets/images/nike.webp",
    type: "companies",
    id: 122,
  },
  {
    imgUrl: "./assets/images/always.webp",
    type: "luxuries",
    id: 123,
  },
  {
    imgUrl: "./assets/images/pampers.webp",
    type: "luxuries",
    id: 124,
  },
  {
    imgUrl: "./assets/images/luvs.webp",
    type: "luxuries",
    id: 125,
  },
  {
    imgUrl: "./assets/images/kleenex.webp",
    type: "luxuries",
    id: 126,
  },
  {
    imgUrl: "./assets/images/kotex.webp",
    type: "luxuries",
    id: 127,
  },
  {
    imgUrl: "./assets/images/signal.webp",
    type: "luxuries",
    id: 128,
  },
  {
    imgUrl: "./assets/images/colgate.webp",
    type: "luxuries",
    id: 129,
  },
  {
    imgUrl: "./assets/images/closeup.webp",
    type: "luxuries",
    id: 130,
  },
  {
    imgUrl: "./assets/images/crest.webp",
    type: "luxuries",
    id: 131,
  },
  {
    imgUrl: "./assets/images/raid.webp",
    type: "luxuries",
    id: 132,
  },
  {
    imgUrl: "./assets/images/faberCastell.webp",
    type: "luxuries",
    id: 133,
  },
  {
    imgUrl: "./assets/images/kodak.webp",
    type: "companies",
    id: 134,
  },
  {
    imgUrl: "./assets/images/knorr.avif",
    type: "luxuries",
    id: 135,
  },
  {
    imgUrl: "./assets/images/twix.webp",
    type: "luxuries",
    id: 136,
  },
  {
    imgUrl: "./assets/images/mars.webp",
    type: "luxuries",
    id: 137,
  },
  {
    imgUrl: "./assets/images/kitkat.webp",
    type: "luxuries",
    id: 138,
  },
  {
    imgUrl: "./assets/images/galaxy.webp",
    type: "luxuries",
    id: 139,
  },
  {
    imgUrl: "./assets/images/bounty.webp",
    type: "luxuries",
    id: 140,
  },
  {
    imgUrl: "./assets/images/snuckers.webp",
    type: "luxuries",
    id: 141,
  },
  {
    imgUrl: "./assets/images/chipsy.webp",
    type: "luxuries",
    id: 142,
  },
  {
    imgUrl: "./assets/images/doeitos.webp",
    type: "luxuries",
    id: 143,
  },
  {
    imgUrl: "./assets/images/cheetos.avif",
    type: "luxuries",
    id: 144,
  },
  {
    imgUrl: "./assets/images/pringles.avif",
    type: "luxuries",
    id: 145,
  },
  {
    imgUrl: "./assets/images/lays.webp",
    type: "luxuries",
    id: 146,
  },
  {
    imgUrl: "./assets/images/cornflakes.avif",
    type: "luxuries",
    id: 147,
  },
  {
    imgUrl: "./assets/images/chiclets.webp",
    type: "luxuries",
    id: 148,
  },
  {
    imgUrl: "./assets/images/pizzahut.webp",
    type: "restaurants",
    id: 149,
  },
  {
    imgUrl: "./assets/images/KFC.webp",
    type: "restaurants",
    id: 150,
  },
  {
    imgUrl: "./assets/images/fridays.webp",
    type: "restaurants",
    id: 151,
  },
  {
    imgUrl: "./assets/images/burgerking.webp",
    type: "restaurants",
    id: 152,
  },
  {
    imgUrl: "./assets/images/nesquik.webp",
    type: "luxuries",
    id: 153,
  },
  {
    imgUrl: "./assets/images/hardees.webp",
    type: "restaurants",
    id: 154,
  },
  {
    imgUrl: "./assets/images/PapaJohn's.svg",
    type: "restaurants",
    id: 155,
  },
  {
    imgUrl: "./assets/images/carrefour.webp",
    type: "companies",
    id: 156,
  },
  {
    imgUrl: "./assets/images/dominos.webp",
    type: "restaurants",
    id: 157,
  },
  {
    imgUrl: "./assets/images/Maggi.webp",
    type: "companies",
    id: 158,
  },
];



// Selectors
const productsContainer = document.querySelector(".product-cards .cards");



// Functions
function createProductEle({ imgUrl, type, id }) {
  const productName = getProductName(imgUrl)
  const productStructure = `
  <div class="mix card ${type}" title=${productName}>
    <img src=${imgUrl} alt=${productName} />
  </div>`;

  productsContainer.innerHTML += productStructure;
}


function getProductName(str) {
  const splittedWords = str.split("/")
  const fullName = splittedWords[splittedWords.length - 1]
  const nameOnly = fullName.split(".")[0]
  return nameOnly
}



function displayProducts() {
  productsData.forEach((productData) => createProductEle(productData));
}




// Portfolio Filter Animations

displayProducts();

let mixer = mixitup(".cards", {
  selectors: {
    target: ".card",
  },
  animation: {
    duration: 300,
  },
});
