// Global Variables:
const baseURL = "https://fakestoreapi.com";
const storeLink = document.getElementById("store-link");
const cartBtn = document.getElementById("cart-btn");
const electronicsLink = document.getElementById("electronics-link");
const jeweleryLink = document.getElementById("jewelery-link");
const mensClothingLink = document.getElementById("mens-link");
const womensClothingLink = document.getElementById("womens-link");
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
    display.innerHTML = "";
    const response = await fetch(baseURL + endpoint);

    if (response.ok) {
      const data = await response.json();
      cardsShown = data;
      console.log(data);
      displayCards(data);
    } else {
      // Handle HTTP error (e.g., 404 Not Found, 500 Internal Server Error)
      console.error(`HTTP Error: ${response.status}`);
    }
  } catch (error) {
    // Handle network or other errors
    console.error("An error has occurred:", error);
  }
};

// Event Listeners:
document.addEventListener("DOMContentLoaded", () => {
  electronicsLink.addEventListener("click", () => {
    fakeStore(productsElectronics);
    console.log(baseURL + productsElectronics);
  });

  jeweleryLink.addEventListener("click", () => {
    fakeStore(productsJewelery);
  });

  mensClothingLink.addEventListener("click", () => {
    fakeStore(productsMens);
  });

  womensClothingLink.addEventListener("click", () => {
    fakeStore(productsWomens);
  });

  storeLink.addEventListener("click", () => {
    fakeStore(productsAll);
  });
});

//displayCards function:
const displayCards = (items) => {
  // Start with cleared display
  display.innerHTML = "";
  const cardsPerRow = 4;

  const rows = [];
  for (let i = 0; i < items.length; i += cardsPerRow) {
    rows.push(items.slice(i, i + cardsPerRow));
  }

  rows.forEach((row, rowIndex) => {
    // Create a row div for each row
    const rowDiv = document.createElement("div");
    rowDiv.className = "row row-cols-1 row-cols-md-4 g-4";

    row.forEach((obj, columnIndex) => {
      // Create elements
      let div = document.createElement("div");
      let card = document.createElement("div");
      let img = document.createElement("img");
      let body = document.createElement("div");
      let title = document.createElement("h3");
      let descBody = document.createElement("div");
      let priceBody = document.createElement("div");
      let a = document.createElement("a");
      let addToCart = document.createElement("button");

      // Set attributes and content for elements
      div.className = "col";
      card.className = "card";
      img.className = "card-img-top";
      img.src = obj.image;
      img.alt = obj.title;
      body.className = "card-body";
      title.className = "card-title";
      title.textContent = obj.title;
      descBody.id = `collapseOne-${rowIndex}-${columnIndex}`;
      priceBody.id = `collapseTwo-${rowIndex}-${columnIndex}`;
      a.href = obj.link;
      a.target = "_blank";
      a.textContent = "Add To Cart";
      addToCart.textContent = "Add To Cart";

      // Append elements to their parents
      body.appendChild(title);
      body.appendChild(descBody);
      body.appendChild(priceBody);
      body.appendChild(a);
      body.appendChild(addToCart);
      card.appendChild(img);
      card.appendChild(body);
      div.appendChild(card);

      // Appending to each row:
      rowDiv.appendChild(div);
    });

    // Appending the product card to display
    display.appendChild(rowDiv);
  });
};

// onload method:
window.onload = (e) => {
  fakeStore(productsAll + "?limit=8");
  console.log("Page Load Completed.");
};

// fakeStore(productsAll);
