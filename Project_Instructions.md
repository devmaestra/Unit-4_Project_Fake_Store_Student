# Fake Storefront
[Fake Storefront Rubric](https://docs.google.com/spreadsheets/d/1qeNQ0fMighfwl1VL_lzpCjGu8gagUsB5_MLCiFtFr-w/edit?usp=sharing)

## What This Project Covers
- DOM Manipulation
- Async/Await
- Promises / Fetch
- Event Listeners
- Array Methods
- Functions
- Scope

# Concept
This project will provide you a wireframe to help with the general design and layout of the site. Your client is wanting to setup a simple online storefront where users can come view and add to an online cart. 

Now, prior to building out the overall web application, what is needed is a general concept. Here you will code out a mock storefront using a third-party API that will supply 4 different categories of items and a limited inventory for said categories.

Upon load, the user should see everything that the store has to offer. There will be a navbar that will display a brand, a cart button, and the four different categories available. If a user clicks on any of the individual categories, the display will change to show cards of that specific inventory.

With each item, a user should be able to "Add to a Cart". You will need to consider how that information will be stored (within your program) to be referenced when the user clicks the "Cart" button in the navbar.

The cart will display all items, the quantities associated if more than one is added, and the running totals based off of the prices provided for each item from the API.

## Tools
These will be referenced throughout your build processes. 

- [Fake Store API](https://fakestoreapi.com/docs)
- **Bootstrap**
  - [Get Started](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
  - [Navbar](https://getbootstrap.com/docs/5.3/components/navbar/#nav)
  - [Modal](https://getbootstrap.com/docs/5.3/components/modal/#modal-components)
  - [Card](https://getbootstrap.com/docs/5.3/components/card/#grid-cards)
  - [Table](https://getbootstrap.com/docs/5.3/content/tables/)


## Wireframe
 Here is the [Figma Wireframe](https://www.figma.com/file/LEidNGkHRaHj6TTAQIle1g/Fake-Store-DOM?node-id=0%3A1&t=40aoBL5SYbHHtSsw-1). This is **not** pixel perfect; however, base **bootstrap** components will meet most requirements of this wireframe with some changes to the either the component or utilizing your local CSS file.

 Feel free to utilize any color theme that you desire. The only color requirements are detailed within the wireframe itself, such as buttons and the "Total" row within the cart.

---

# Tickets

## Ticket `#U4_01`
### Setup and Framing
The project build is very important in the inital design. Consider the wireframe, API documentation, and detail any comments that you believe would be useful to help navigate your code. 

**Files:**
%- **Given** the project folder has been created.
%- **Then** create the project files and folders.
%- **And** associate files in their proper folders.
%- **And** the entry point file should be `index.html`.

**Connection & Navigation:**
%- **Given** the `index.html` has been framed.
%- **Then** connected **Bootstrap**, **CSS**, and **JavaScript** files.
%- **Given** the file and folder structure has been created.
%- **Then** create a **navbar**.
%- **And** a brand is associated in the top left.
%- **And** each route is associated with a category provided.

**Display Section:**
%- **Given** the navbar has been framed.
%- **Then** create a `div` with an id of "display"

**Footer:**
%- **Given** the navbar and display `div` has been created.
%- **Then** create a `footer`.
%- **And** include a copyright that states, "Unit 4 Project ~ Upright Education Copyright &copy; 2023"

**Notes:**
%- Review the API documentation to note what categories are available.

**Ticket Requirements:**
%- The `title` should be "Fake Store Front"
%- *The Brand* should be called "The Store"
%- The `display div` will be empty.
%- The copyright should be a section heading element. 

---

## Ticket `#U4_02`

### Styling
Setting up some basic styling guides prior to feeding a lot of data through your build can help your overall process.

**Body:**
%- **Given** there is a body element.
%- **Then** set a display of `flex`.
%- **And** align center with a column direction.
%- **And** make sure the x axis for the `overflow` is hidden.

**Navbar:**
%- **Given** there is a `navbar` element.
%- **Then** have it extend the entire width of the viewport.
%- **And** it sticks to the top of the page.

**Display:**
%- **Given** there is a `div` element with an id "display".
%- **Then** have all the text aligned in the center of the element.
%- **And** provide a margin to the top.

**Footer:**
%- **Given** the `footer` element exists.
%- **Then** all content will be centered.
%- **And** set the background to black.
%- **And** set the font to white.
%- **And** fix the element to the bottom of the viewport.

**Note:**
- Consider the bootstrap class names and what they are doing for your templated components.
  - All information can be found within the documentation.

**Ticket Requirements:**
?- The `navbar` element `sticky` should be handled via bootstrap.
%- Make the `footer` content visually appealing with potential padding & margin needs.

---

## Ticket `#U4_03`
### Pulling Data
It is expected to have one single fetch that accepts variable data to help determine what should be obtained depending on user interaction.

**Variables:**
%- **Given** there is a `javaScript` file connected to `index.html`.
%- **Then** create global variables that connect the navbar categories in the `navbar`.
%- **And** create a global variable that connects to the `display div`. 
%- **And** create a global variable that will hold the API URL.

**Obtain Data:**
%- **Given** the global variables are created with assigned values.
%- **Then** create an `async function` called "fakeStore".
%- **And** this function will expect a parameter called "endpoint".
%- **Given** the `fakeStore` function has been framed.
%- **Then** write an `await` response that fetches from the provided api.
%- **And** this fetch should use the global api url variable.
%- **And** incorporate the parameter `endpoint`.

**On Load:**
%- **Given** the user loads the page.
%- **Then** target the window object.
%- **And** use an `onload` method that will invoke the `fakeStore` function.
%- **And** provide an argument that will be the endpoint for the URL fetch.

**Event Listeners:**
- **Given** the page has loaded with data being returned.
- **Then** create event listeners using the proper method for each global variable assigned to each navbar category.
- **And** for each callback function, invoke the `fakeStore` function.
- **And** pass in the associated endpoint to that will return that categories inventory.


**Notes:**
- Be sure to look over the documentation as to how you are to pull data in different manners.
  - Descending, ascending, item, category, etc.
- Consider Scope and Hoisting when writing various aspects of your code, such as event listeners.

**Ticket Requirements:**
%- gloabl variables should not have the capability to change later in the code.
%- The `fakeStore()` function should be written as a block body arrow function.
- The window onload should provide an endpoint that returns **all** data from the API in ascending order.
  - This should be set to the very bottom of the file.
- At this point, all data should be at least displayed within the `console`.

---
## Ticket `#U4_04`
### Displaying Each Card
Once your data is being returned, it's time to display it all. You will be using the `display div` as your entry point for each individual card to show. 

**Frame:**
%- **Given** data is returning to the `console`.
%- **Then** write a function called `displayCards` that accepts a parameter.
?- **And** invoke this function after the fetch results in the `fakeStore`.
- **And** add comments that detail the three main steps of creating elements.

**Card Building**
- **Given** the `displayCards` function is obtaining the correct data from the API.
- **Then** cycle through the data.
- **And** create the necessary elements to make a card.
%- **And** create the necessary elements to include an accordion.
- **Given** each element has been created.
- **Then** set the necessary properties to each element.
- **And** provide the various values from the API.
- **Given** each element has both their properties and values assigned as needed.
- **Then** append each element to their repected parent.
- **And** the overall card is appended to the `display` within `index.html`.

**Error Handling**
- **Given** the user selects a category.
- **Then** only those cards will display.

**Add To Cart**
- **Given** that cards display to the page.
- **Then** create a global variable called `cart` that will be assigned an array.
- **Given** a variable called `cart` exists.
- **Then** write a function called `submitToCart`.
  - This will accept a parameter called "item".
- **And** it will use the parameter to add to the `cart array`.
- **Given** the `submitToCart` function exists.
- **Then** include a button to each card upon the build.
- **And** it should state, "Add to Cart" as its value.
- **Given** the button has been created.
- **Then** assign the **onclick** property to fire off an anonomous function.
- **And** this function will generate a new object that hold the following keys:
  - id, title, cost, quantity.
- **And** each key is assigned the value of the current item, except the quantity will be set to "1".
- **And** it will invoke `submitToCart` passing the newly created object.

**Note:**
- Consider arguments and paramters. What is their relationship?
- What sort of methods can help you cycle through a list of items?
- You will need to consider both the card and accordion components within **bootstrap**.
  - Remember to build so that bootstrap can recognize each element.
- You will need to consider how each card will be individualized. 
  - Consider how the accordion "open" and "closed" aspects work.
  - You may need to update the reference items to use your individualization aspects while you cycle through the data.
- Consider the `forEach()` method.
- Consider if the `display div` needs any other information to help with the elements being attached to it.
  - Consider bootstrap grid cards.
- Consider `while loops`. 

**Ticket Requirements**
- Write the `displayCards()` function as an expression.
- Data to display on each card will be:
  - The image
  - The Title
  - The description
  - The price 
- All monetary values should include the `$` and only display to the tenth position after the decimal. ex: `$0.00`
- Write the `submitToCart()` function as a declarative. 
- Styling will need to be included to handle the images and card sizes.

---

## Ticket `#U4_05`
### Cart Details
Now it is time to consider how to update current existing data within the `index.html`. When a user adds items to the cart, you will need to incorporate the logic to consider if the item already exists in the array along with the overall expense being calculated.

**Item Quantity Check**
- **Given** the `submitToCart()` function exsist.
- **And** it is pushing items to a `cart array`.
- **Then** build the logic that will consider if an item with a matching **id** exists within the array.
- **And** if it does, increase the value of the quantity by 1.
- **And** if it does not, simply add the item to the `cart array`. 

**Displaying the Cart**
- **Given** the cart array is providing correct data. 
- **Then** add a modal component from Bootstrap to the `index.html` document.
- **And** the `button` to call it should be in the `navbar`.
- **And** the `button` should state, "Cart".
- **Given** the `button` is in the `navbar`.
- **And** when it is clicked, it opens the `modal`.
- **Then** set the title, body, and footer with the provided tables from the **wireframe**.

**An Empty Cart:**
- **Given** no item has been added to the `cart array`.
- **Then** the cart should detail only the header of the item list.
- **And** all values are set to $0.00.

**Calculate the Cart:**
- **Given** the user has added items to the `cart array`.
- **And** the `Cart button` is clicked.
- **Then** an event listener should invoke a function called `displayCart`.
- **Given** there is a function called `displayCart`.
- **Then** the `displayCart` function should evaluate each item in the array.
- **And** calculate the subtotal.
- **And** set the tax value. 
- **And** set the shipping value.
- **And** set the total value.

**Populate the Cart:**
- **Given** the values have been calculated.
- **Then** add a row of each item to the item table.
- **Then** update the current values of the expense table.

**Purchasing Items:**
- **Given** the cart is displaying the correct items and expenses associated.
- **Then** include a `button` that states, "Purchase for [TOTAL CALCULATED]".
- **And** include a `button` that states, "Clear Cart".
- **Given** the `Purchase button` exists.
- **Then** an alert should pop up that states, "Thank you for your Purchase!".
- **And** the `cart array` should be cleared.
- **Given** the `Clear Cart button` exists.
- **Then** the `cart array` should be cleared.
- **And** the `displayCart` function should be invoked.

**Note:**
- consider conditionals and the `forEach()` method.
- The `console` is a great way to track your code.
- Think about the quantity of items and their base cost for the subtotal.
- Consider the `map()` method. 
- Consider alerts within the browser.

**Ticket Requirement:**
- **Tax** can be set to your states sales tax percentage. 
  - If not, just use 7%.
- **Shipping** will be set to 10% of the subtotal.
- For each item, it should list the quantity, the title at X price, and the expense for that item in the top table.
  - See wireframe for example.
- All monetary values should be displayed as `$0.00`.
- The `Clear Cart button` should be styled near the right side of the modal footer.

---

# Stretch Goals
### Note:
Stretch goals should not be attempted until previous tickets have been completed and tested.

## Ticket `#U4_06`
- Include a `README.md` to the **root** directory.
  - Detail the concept of this project in psuedo code within the document.
  -  **[Pseudo Code Article](https://www.geeksforgeeks.org/how-to-write-a-pseudo-code/)**
  -  [What is a README file?](https://www.mygreatlearning.com/blog/readme-file/)
- Deploy this project.
  - **GitHub Pages** / **Netlify**
  - [Netlify](https://app.netlify.com/)
  - [How To...GitHub Pages](https://www.loom.com/share/6ef32778118840eb88a4e6d4f00cc3d2?sid=2b084cfe-2d87-4460-a14a-1c8dc54497bc) 
  - Update your **README.md** with a hyperlink to the deployed URL.