// import apiKey from '.key.js'; 

const baseURL = 'https://fakestoreapi.com/';
const theStore = document.getElementById("store-link");
const cartBtn = document.getElementById("cart-btn");
const electronics = document.getElementById("electronics-link");
const jewelery = document.getElementById("jewelery-link");
const mensClothing = document.getElementById("mens-link");
const womensClothing = document.getElementById("womens-link");
const display = document.getElementById("display");


const productsAll = "products";
const productsElectronics = "https://fakestoreapi.com/products/category/electronics";
const productsJewelery = "products/category/jewelery";
const productsMens = "products/category/men's%20clothing";
const productsWomens = "products/category/women's%20clothing";


const fakeStore = async (endpoint) => {
    try {
    const response = await fetch(`${baseURL}${endpoint}`);
        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.log('Error has occured'); 
    }
};

window.onload = () => {
    const endpoint = productsAll;
    console.log("page is fully loaded"); //works
    fakeStore(endpoint);
};


