// Global Variables:
const baseURL = 'https://fakestoreapi.com';
const theStore = document.getElementById("store-link");
const cartBtn = document.getElementById("cart-btn");
const electronics = document.getElementById("electronics-link");
const jewelery = document.getElementById("jewelery-link");
const mensClothing = document.getElementById("mens-link");
const womensClothing = document.getElementById("womens-link");
const display = document.getElementById("display");
let cardsShown = [];

// Variables to connect to API:
const productsAll = "/products";
const productsElectronics = "/products/category/electronics";
const productsJewelery = "/products/category/jewelery";
const productsMens = "/products/category/men's%20clothing";
const productsWomens = "/products/category/women's%20clothing";

// fakeStore function:
const fakeStore = async (endpoint) => {
    try {
    const response = await fetch(baseURL + endpoint);
        let data = await response.json();
        cardsShown = data;
        console.log(data);
        // console.log(cardsShown);
        displayCards();
    } catch (error) {
        console.error('Error has occured', error); 
    }
};

// const fakeStore = async (endpoint) => {
//     fetch(baseURL + endpoint)
//         .then ((res) => res.json())
//         .then((data) => {
//             let cardsShown = data.map((item) => {{
//                 id: item.id,
//                 title: item.title,
//                 desc: item.description,
//                 price: item.price,
//                 img: item.image,
//                 category: item.category
//             }});
//         })
        // let data = 
        // cardsShown = data;
        // console.log(data);
        // console.log(cardsShown);
        // displayCards();
// };


// Onload method: 

// Event Listeners: 
electronics.addEventListener('click', () => {
    fakeStore(productsElectronics);
    console.log(baseURL + productsElectronics);
});

jewelery.addEventListener('click', () => {
    fakeStore(productsJewelery);
    
});

mensClothing.addEventListener('click', () => {
    fakeStore(productsMens);
});

womensClothing.addEventListener('click', () => {
    fakeStore(productsWomens);
});

theStore.addEventListener('click', () => {
    fakeStore(productsAll);
});

// not getting specific category data console logged yet, still seeing all the data. Is that right?

const displayCards = () => {
    console.log(`Items to sell array:`, );

cardsShown.map(obj => {

//  //* Create
//  let div = document.createElement('div');
//  let card = document.createElement('div');
//  let img = document.createElement('img');
//  let body = document.createElement('div');
//  let title = document.createElement('h3');
//  let descBody = document.createElement('descBody');
//  let priceBody = document.createElement('priceBody');
//  let a = document.createElement('a');
//  let addToCart = document.createElement('cart')

 //* Attributes
 div.className = 'col';
 card.className = 'card';
 img.className = 'card-img-top';
 img.src = obj.img;
 img.alt = obj.title; 
 body.className = 'card-body';
 title.className = 'card-title';
 title.textContent;  // do i need?
 descBody.id = 'collapseOne'; // these are ids, do that matter?
 priceBody.id = 'collapseTwo'; // these are ids, do that matter?
//  addTocart = 'd-grid gap-2';
 a.href = obj.src; //from object
 a.target = '_blank';
 a.textContent = 'Add To Cart';

//  //* Attach
//  p.appendChild(a);
//  body.appendChild(title);
//  body.appendChild(p);
//  div.appendChild(card);
//  div.appendChild(img);
//  div.appendChild(body);
//  priceBody.appendChild(priceBody)

})
}

// window.onload = () => {
//     let endpoint = productsAll;
//     // console.log("page is fully loaded"); //works
//     fakeStore(endpoint);
//     // console.log(productsAll);
// };

window.onload = (e) => {
    fakeStore(productsAll + '?limit=8');
    console.log('Page Load Completed.');
};

