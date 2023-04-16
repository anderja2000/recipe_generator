let counter = 0;
let cartString = "";
const cart = document.getElementById("cart");
cart.innerHTML = "you added " + String(counter) + " ingredients!";

let foodArray = ["tomatoes", "lettuce", "carrots", "spinach", "cabbage", "potato", "onion", "spinach",
    "broccoli", "peas", "celery", "eggplant", "cucumber", "cauliflower", "zuccini"];
let foodArray2 = ["lemon", "apple", "lime", "orange", "bananna", "peach", "grape", "kiwi",
    "grapefruit", "pear", "mango", "nectarine", "cuconut", "cantelope", "honeydew"];
let foodArray3 = ["butter", "eggs", "milk", "heavy cream", "sour cream", "yogurt", "chocolate milk", "ice cream",
    "ricotta", "margaine", "frosting", "buttermilk", "cottage cheese", "greek yogurt", "cream"];

let foodArray4 = ["parmesan", "sharp cheddar", "mozzarella", "provolone", "american", "gouda", "swiss cheese", " asiago",
    "smoked", "babybel", "brie", "colby", "pepperjack", "Feta", "Havarti"];

let foodArray5 = ["bacon", "pork loin", "italian sausage", "pork chops", "salami", "ham", "lamb", "bolgna",
    "ground beef", "steak", "roast beef", "sausage", "turkey sausage", "pork", "lamb chops"];

let vegetablesChosen = []; 
let fruitsChosen = []; 
let dairyChosen = []; 
let cheesesChosen = []; 
let meatsChosen = [];


let addedToPantry = [];


function createTable() {

    // let foodArray = ["tomatoes", "lettuce", "carrots", "spinach", "cabbage", "potato", "onion", "spinach",
    //     "broccoli", "peas", "celery", "eggplant", "cucumber", "cauliflower", "zuccini"];

    let num = foodArray.length;

    const newTable = document.createElement("table");
    if (num < 10) {
        num = 10;
    }
    for (let i = 0; i < Math.floor(num / 10); ++i) {
        // loops for correct number of rows 
        // make a row 
        const newRow = document.createElement("tr");


        // within each row, what should happen?
        // print out ten numbers 
        for (let j = 0; j < foodArray.length; ++j) {
            // make the actual table cells 
            const newCell = document.createElement("td");

            // what should cell say?
            // set inner Html 
            newCell.innerHTML = foodArray[j];

            // this is the ongoing pantry array that keeps track of the ite

            newCell.addEventListener("click", () => {
                vegetablesChosen.push(newCell.innerHTML);

            });

            // set the classname 
            newCell.className = "choices";



            // add it to the row 
            newRow.append(newCell);
            // row += String((i*10) + j+1); 

        }

        // all cells are added to the row 
        // add row to table 
        newTable.appendChild(newRow);

    }

    document.getElementById("vegetableOptions").append(newTable);

    // creates the interactive options for selections available for fruits 

    // let foodArray2 = ["lemon", "apple", "lime", "orange", "bananna", "peach", "grape", "kiwi",
    //     "grapefruit", "pear", "mango", "nectarine", "cuconut", "cantelope", "honeydew"];

    let num2 = foodArray2.length;

    const newTable2 = document.createElement("table");
    if (num2 < 10) {
        num2 = 10;
    }
    for (let i = 0; i < Math.floor(num2 / 10); ++i) {
        // loops for correct number of rows 
        // make a row 
        const newRow2 = document.createElement("tr");


        // within each row, what should happen?
        // print out ten numbers 
        for (let j = 0; j < foodArray2.length; ++j) {
            // make the actual table cells 
            const newCell2 = document.createElement("td");

            // what should cell say?
            // set inner Html 
            newCell2.innerHTML = foodArray2[j];

            // this is the ongoing pantry array that keeps track of the ite

            newCell2.addEventListener("click", () => {
                fruitsChosen.push(newCell2.innerHTML);

            })

            // set the classname 
            newCell2.className = "choices";



            // add it to the row 
            newRow2.append(newCell2);
            // row += String((i*10) + j+1); 

        }

        // all cells are added to the row 
        // add row to table 
        newTable2.appendChild(newRow2);

    }

    document.getElementById("fruitOptions").append(newTable2);

    // creates interactive options available to users selcting dairy and eggs products 

    // let foodArray3 = ["butter", "eggs", "milk", "heavy cream", "sour cream", "yogurt", "chocolate milk", "ice cream",
    //     "ricotta", "margaine", "frosting", "buttermilk", "cottage cheese", "greek yogurt", "cream"];

    let num3 = foodArray2.length;

    const newTable3 = document.createElement("table");
    if (num3 < 10) {
        num3 = 10;
    }
    for (let i = 0; i < Math.floor(num3 / 10); ++i) {
        // loops for correct number of rows 
        // make a row 
        const newRow3 = document.createElement("tr");


        // within each row, what should happen?
        // print out ten numbers 
        for (let j = 0; j < foodArray3.length; ++j) {
            // make the actual table cells 
            const newCell3 = document.createElement("td");

            // what should cell say?
            // set inner Html 
            newCell3.innerHTML = foodArray3[j];

            newCell3.addEventListener("click", () => {
                dairyChosen.push(newCell3.innerHTML);

            })

            // set the classname 
            newCell3.className = "choices";



            // add it to the row 
            newRow3.append(newCell3);
            // row += String((i*10) + j+1); 

        }

        // all cells are added to the row 
        // add row to table 
        newTable3.appendChild(newRow3);

    }

    document.getElementById("dairyEggsOptions").append(newTable3);

    // creates cheese options 

    // let foodArray4 = ["parmesan", "sharp cheddar", "mozzarella", "provolone", "american", "gouda", "swiss cheese", " asiago",
    //     "smoked", "babybel", "brie", "colby", "pepperjack", "Feta", "Havarti"];

    let num4 = foodArray4.length;

    const newTable4 = document.createElement("table");
    if (num4 < 10) {
        num4 = 10;
    }
    for (let i = 0; i < Math.floor(num4 / 10); ++i) {
        // loops for correct number of rows 
        // make a row 
        const newRow4 = document.createElement("tr");


        // within each row, what should happen?
        // print out ten numbers 
        for (let j = 0; j < foodArray4.length; ++j) {
            // make the actual table cells 
            const newCell4 = document.createElement("td");

            // what should cell say?
            // set inner Html 
            newCell4.innerHTML = foodArray4[j];

            newCell4.addEventListener("click", () => {
                cheesesChosen.push(newCell4.innerHTML);

            })

            // set the classname 
            newCell4.className = "choices";



            // add it to the row 
            newRow4.append(newCell4);
            // row += String((i*10) + j+1); 

        }

        // all cells are added to the row 
        // add row to table 
        newTable4.appendChild(newRow4);

    }

    document.getElementById("cheesesOptions").append(newTable4);

    // the meat options 

    // let foodArray5 = ["bacon", "pork loin", "italian sausage", "pork chops", "salami", "ham", "lamb", "bolgna",
    //     "ground beef", "steak", "roast beef", "sausage", "turkey sausage", "pork", "lamb chops"];

    let num5 = foodArray4.length;

    const newTable5 = document.createElement("table");
    if (num4 < 10) {
        num4 = 10;
    }
    for (let i = 0; i < Math.floor(num5 / 10); ++i) {
        // loops for correct number of rows 
        // make a row 
        const newRow5 = document.createElement("tr");


        // within each row, what should happen?
        // print out ten numbers 
        for (let j = 0; j < foodArray5.length; ++j) {
            // make the actual table cells 
            const newCell5 = document.createElement("td");

            // what should cell say?
            // set inner Html 
            newCell5.innerHTML = foodArray5[j];

            newCell5.addEventListener("click", () => {
                meatsChosen.push(newCell5.innerHTML);

            })

            // set the classname 
            newCell5.className = "choices";



            // add it to the row 
            newRow5.append(newCell5);
            // row += String((i*10) + j+1); 

        }

        // all cells are added to the row 
        // add row to table 
        newTable5.appendChild(newRow5);

    }

    document.getElementById("meatsOptions").append(newTable5);


    // 
    document.addEventListener("DOMContentLoaded", function () {
        // Get all buttons with class name "choices"
        const buttons = document.getElementsByClassName("choices");

        // Get the reset button element
        const resetBtn = document.getElementById("resetBtn");

        // Get the H2 element with the ID "cart"


        // Declare the counter variable outside of the click event handler function
        let counter = 0;

        // Attach click event handler to each button
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", function () {
                // Check if the button has the "active" class
                if (this.classList.contains("active")) {
                    // If it does, remove the "active" class and reset the background color to hover color
                    this.classList.remove("active");
                    this.style.backgroundColor = "orange";
                    // Decrement the counter by 1
                    counter--;
                    // Set the updated counter value to the cart element
                    cart.innerHTML = "You have " + String(counter) + " ingredients added!";
                } else {
                    // If it doesn't, add the "active" class and change the background color to clicked color
                    this.classList.add("active");
                    this.style.backgroundColor = "green";
                    // Increment the counter by 1
                    counter++;
                    // Set the updated counter value to the cart element
                    cart.innerHTML = "You have " + String(counter) + " ingredients added!";
                }
            });

            buttons[i].addEventListener("mouseover", function () {
                // Check if the button does not have the "active" class
                if (!this.classList.contains("active")) {
                    // If it doesn't, set the background color to hover color
                    this.style.backgroundColor = "orange";
                }
            });

            buttons[i].addEventListener("mouseout", function () {
                // Check if the button does not have the "active" class
                if (!this.classList.contains("active")) {
                    // If it doesn't, reset the background color to original color
                    this.style.backgroundColor = "";
                }
            });
        }

        // Attach click event handler to reset button
        resetBtn.addEventListener("click", function () {
            // Reset the button colors to original color
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].classList.remove("active");
                buttons[i].style.backgroundColor = "";
            }
            // Reset the counter to 0
            counter = 0;
            // Set the updated counter value to the cart element
            cart.innerHTML = "You have " + String(counter) + " ingredients added!";
        });
        let allOptionsButtons = document.getElementsByClassName("allOptions");

        // Loop through all .allOptions buttons
        Array.from(allOptionsButtons).forEach(function (button) {
            button.addEventListener("click", function () {
                // Get the div that contains the current allOptions button
                let div = button.parentElement;

                // Get the id of the div
                let divId = div.id;

                // Select the .choices buttons within the current div
                let choicesButtons = div.getElementsByClassName("choices");

                // Loop through the .choices buttons within the current div
                for (let j = 0; j < choicesButtons.length; j++) {
                    let button = choicesButtons[j];
                    // Change the button color to green and increment the counter
                    button.classList.add("active");
                    button.style.backgroundColor = "green";
                    counter++;
                }

                // Set the updated counter value to the cart element
                cart.innerHTML = "You have " + String(counter) + " ingredients added!";
            });
        });



    });



    // increment counter and add to the header 


}
console.log(addedToPantry);



function consolidateArrays(ingredients1, ingredients2, ingredients3, ingredients4, ingredients5) {
    let pantryArray = [];
    pantryArray = pantryArray.concat(ingredients1, ingredients2, ingredients3, ingredients4, ingredients5)

    return pantryArray;
}

function recipeSearch() {
    

    // // Fetch recipes by ingredients from Spoonacular API

    // Replace with your own API key
    const API_KEY = '48db75c1229848028d55cf2962ff68b0';
    
    let gathered = [];
    
    
    // List of ingredie nts to search for
    document.getElementById("submit").addEventListener("click", () => { 
        gathered.push(consolidateArrays(vegetablesChosen, fruitsChosen, dairyChosen, cheesesChosen, meatsChosen));
        
    });
    console.log(gathered)

    // Number of results to fetch
    const numResults = 5;

    // Function to fetch recipes from Spoonacular API
    async function fetchRecipes() {
        try {
            i
            // Make GET request to the Spoonacular API
            const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${gathered.join(',')}&number=${numResults}`);

            // Parse the JSON response
            const data = await response.json();
            console.log(data);
            
            data.forEach( (entry) => { 
                console.log(entry.title)
            });

            // Extract the recipe data from the response
            const recipes = data;
            for ( const [key, value] of data.entries()) { 
              
            }

            // Do something with the recipes, e.g. display them on the page
            
        } catch (error) {
            console.error(error);
        }
    }
    

    // Function to fetch new recipes and call it whenever needed
    function fetchNewRecipes() {
        fetchRecipes();
    }

    // Call the fetchNewRecipes function initially when the page is loaded
    window.addEventListener('load', fetchNewRecipes);



}








function init() {
    // createOptions(); 
    createTable();
    recipeSearch();


}

init();     