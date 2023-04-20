let counter = 0;
let cartString = "";
const cart = document.getElementById("cart");
cart.innerHTML = "you added " + String(counter) + " ingredients!";


// Daily Quota is 150 api calls 

// apikey for jdanders2000@gmail.com: 48db75c1229848028d55cf2962ff68b0  around 110 api calls 
// apiKey for photoWiz0000@gmail.com: 9e3d27b8f50c45d9b2f4f96f86e7780f around 5 api calls 

// alterneate keys as needed 

let foodArray = ["tomatoes", "lettuce", "carrots", "spinach", "cabbage", "potato", "onion", "spinach",
    "broccoli", "peas", "celery", "eggplant", "cucumber", "cauliflower", "zuccini"];
let foodArray2 = ["lemon", "apple", "lime", "orange", "bananna", "peach", "grape", "kiwi",
    "grapefruit", "pear", "mango", "nectarine", "cuconut", "cantelope", "honeydew"];
let foodArray3 = ["butter", "eggs", "milk", "heavy cream", "sour cream", "yogurt", "chocolate milk", "ice cream",
    "ricotta", "margaine", "frosting", "buttermilk", "cottage cheese", "greek yogurt", "cream"];

let foodArray4 = ["parmesan", "sharp cheddar", "mozzarella", "provolone", "american", "gouda", "swiss cheese", " asiago",
    "smoked", "babybel", "brie", "colby", "pepperjack", "Feta", "Havarti"];

let foodArray5 = ["bacon", "pork loin", "italian sausage", "pork chops", "salami", "ham", "lamb", "chicken",
    "ground beef", "steak", "roast beef", "sausage", "turkey sausage", "pork", "lamb chops"];

let foodArray6 = ["garlic powder", "lemon pepper", "cumin", "Chili powder", "oregano", "onion powder", "rosemary", "thyme", "Italian", "basil",
    "black pepper", "curry powder", "tumeric", "parsely", "sea salt"]

let vegetablesChosen = [];
let fruitsChosen = [];
let dairyChosen = [];
let cheesesChosen = [];
let meatsChosen = [];
let spicesChosen = [];


let addedToPantry = [];
let gathered = [];

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
            // newCell = Array.from(newCell);

            // // or

            // // Convert newCell to an array using the spread operator
            // newCell = [...newCell];

            const allVegetables = document.getElementById("vegetables");
            allVegetables.addEventListener("click", () => {
                document.querySelectorAll("td").forEach((btn) => {
                    vegetablesChosen.push(btn.innerHTML);
                });
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

            });

            const allFruits = document.getElementById("fruits");
            allFruits.addEventListener("click", () => {
                document.querySelectorAll("td").forEach((btn) => {
                    fruitsChosen.push(btn.innerHTML);
                });
            });

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

            });

            const allDairy = document.getElementById("dairy");
            allDairy.addEventListener("click", () => {
                document.querySelectorAll("td").forEach((btn) => {
                    dairyChosen.push(btn.innerHTML);
                });
            });

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

            const allCheeses = document.getElementById("cheeses");
            allCheeses.addEventListener("click", () => {
                document.querySelectorAll("td").forEach((btn) => {
                    cheesesChosen.push(btn.innerHTML);
                });
            });

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
            const allOptionsMeats = document.getElementById("meats");
            allOptionsMeats.addEventListener("click", () => {
                document.querySelectorAll("td").forEach((btn) => {
                    meatsChosen.push(btn.innerHTML);
                });
            });

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


    // creates interactive options available to users selcting dairy and eggs products 

    // let foodArray3 = ["butter", "eggs", "milk", "heavy cream", "sour cream", "yogurt", "chocolate milk", "ice cream",
    //     "ricotta", "margaine", "frosting", "buttermilk", "cottage cheese", "greek yogurt", "cream"];

    let num6 = foodArray2.length;

    const newTable6 = document.createElement("table");
    if (num6 < 10) {
        num6 = 10;
    }
    for (let i = 0; i < Math.floor(num6 / 10); ++i) {
        // loops for correct number of rows 
        // make a row 
        const newRow6 = document.createElement("tr");


        // within each row, what should happen?
        // print out ten numbers 
        for (let j = 0; j < foodArray6.length; ++j) {
            // make the actual table cells 
            const newCell6 = document.createElement("td");

            // what should cell say?
            // set inner Html 
            newCell6.innerHTML = foodArray6[j];

            newCell6.addEventListener("click", () => {
                spicesChosen.push(newCell6.innerHTML);

            });

            const allSpices = document.getElementById("spices");
            allSpices.addEventListener("click", () => {
                document.querySelectorAll("td").forEach((btn) => {
                    dairyChosen.push(btn.innerHTML);
                });
            });

            // set the classname 
            newCell6.className = "choices";



            // add it to the row 
            newRow6.append(newCell6);
            // row += String((i*10) + j+1); 

        }

        // all cells are added to the row 
        // add row to table 
        newTable6.appendChild(newRow6);

    }

    document.getElementById("spiceOptions").append(newTable6);

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
                    this.style.backgroundColor = "pink";

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

            vegetablesChosen = [];
            fruitsChosen = [];
            dairyChosen = [];
            cheesesChosen = [];
            meatsChosen = [];
            spicesChosen = [];


            addedToPantry = [];
            gathered = [];

            // Set the updated counter value to the cart element
            cart.innerHTML = "You have " + String(counter) + " ingredients added!";

            for (let i = 1; i <= 4; i++) {
                const titleId = `recipeTitle${i}`;
                const titleElement = document.getElementById(titleId);
                titleElement.innerHTML = "";

                const imageId = `image${i}`;
                const imageElement = document.getElementById(imageId);
                imageElement.src = "";
            }
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


// Example usage of recipeSearch() function

let ingredients = [];



/* 

                    BE WARY toucching this function 


*/

// List of ingredients to search for


// listens for user click on submit button 
document.getElementById("submit").addEventListener("click", () => {

    // pushes all of the individual section arrays into one consolidated for easier access when retrieving ingredients 
    gathered.push(consolidateArrays(vegetablesChosen, fruitsChosen, dairyChosen, cheesesChosen, meatsChosen));
    console.log(gathered);

    // function recipeSearch(ingredients, apiKey) {
    //     // Function to fetch recipes from Spoonacular API
    //     function fetchRecipes(ingredients, apiKey) {
    //         const endpoint = "https://api.spoonacular.com/recipes/findByIngredients";
    //         const params = {
    //             apiKey: apiKey,
    //             ingredients: ingredients.join(","),
    //             number: 5 // Change this to the number of recipes you want to retrieve
    //         };
    //         return fetch(endpoint + "?" + new URLSearchParams(params))
    //             .then(response => {
    //                 if (!response.ok) {
    //                     throw new Error("Failed to fetch recipes. Status code: " + response.status);
    //                 }
    //                 return response.json();
    //             })
    //             .catch(error => {
    //                 console.log(error);
    //                 return null;
    //             });
    //     }

    //     // Function to fetch recipe information using recipe ID
    //     function fetchRecipeInformation(id, apiKey) {
    //         const endpoint = `https://api.spoonacular.com/recipes/${id}/information`;
    //         const params = {
    //             apiKey: apiKey
    //         };
    //         return fetch(endpoint + "?" + new URLSearchParams(params))
    //             .then(response => {
    //                 if (!response.ok) {
    //                     throw new Error("Failed to fetch recipe information. Status code: " + response.status);
    //                 }
    //                 return response.json();
    //             })
    //             .catch(error => {
    //                 console.log(error);
    //                 return null;
    //             });
    //     }

    //     // Function to analyze recipe using recipe title
    //     function analyzeRecipe(title, apiKey) {
    //         const endpoint = "https://api.spoonacular.com/recipes/analyze";
    //         const params = {
    //             apiKey: apiKey,
    //             title: title
    //         };
    //         return fetch(endpoint + "?" + new URLSearchParams(params))
    //             .then(response => {
    //                 if (!response.ok) {
    //                     throw new Error("Failed to analyze recipe. Status code: " + response.status);
    //                 }
    //                 return response.json();
    //             })
    //             .catch(error => {
    //                 console.log(error);
    //                 return null;
    //             });
    //     }

    //     // Call fetchRecipes function to fetch recipes from Spoonacular API
    //     fetchRecipes(ingredients, apiKey)
    //         .then(recipes => {
    //             if (recipes && Array.isArray(recipes)) {
    //                 if (recipes.length === 0) {
    //                     console.log("No recipes found");
    //                 } else {
    //                     console.log("Recipes found:");
    //                     recipes.forEach(recipe => {
    //                         console.log("- Recipe ID:", recipe.id);
    //                         console.log("  Recipe Title:", recipe.title);
    //                         const recipeTitle = document.querySelectorAll(".recipeTitle");
    //                         recipeTitle.innerHTML = recipe.title; 

    //                         console.log("  Recipe Image:", recipe.image);
    //                         const images = document.querySelectorAll(".image1"); 
    //                         images.src = recipe.image; 
    //                         document.body.append(images);

    //                         // Call fetchRecipeInformation function to fetch recipe information
    //                         fetchRecipeInformation(recipe.id, apiKey)
    //                             .then(recipeInfo => {
    //                                 console.log(`Recipe Source: ${recipeInfo.sourceUrl}`);
    //                             });

    //                         // Call analyzeRecipe function to analyze recipe using title
    //                         analyzeRecipe(recipe.title, apiKey)
    //                             .then(recipeAnalysis => {
    //                                 console.log("Recipe Analysis:", recipeAnalysis);
    //                             });
    //                     });
    //                 }
    //             } else {
    //                 console.log("Failed to fetch recipes");
    //             }
    //         });

    // }

    document.getElementById("submit").addEventListener("click", () => {

        // pushes all of the individual section arrays into one consolidated for easier access when retrieving ingredients 
        gathered.push(consolidateArrays(vegetablesChosen, fruitsChosen, dairyChosen, cheesesChosen, meatsChosen));
        console.log(gathered);

        function recipeSearch(ingredients, apiKey) {
            // Function to fetch recipes from Spoonacular API
            async function fetchRecipes(ingredients, apiKey) {
                const endpoint = "https://api.spoonacular.com/recipes/findByIngredients";
                const params = {
                    apiKey: apiKey,
                    number: 4 // Change this to the number of recipes you want to retrieve
                };
                const url = `${endpoint}?${new URLSearchParams(params)}&ingredients=${ingredients.join(",")}`;
                try {
                    const response = await fetch(url);
                    if (!response.ok) {
                        throw new Error("Failed to fetch recipes. Status code: " + response.status);
                    }
                    const data = await response.json();
                    return data;
                } catch (error) {
                    console.log(error);
                    return null;
                }
            }
            
            

            // Function to fetch recipe information using recipe ID
            // Function to fetch recipe information and recipe search using recipe ID
            // Async function to fetch recipe information and recipe search using recipe ID
            async function fetchRecipeInformationAndSearch(id, ingredients, apiKey) {
                const endpoint = `https://api.spoonacular.com/recipes/${id}/information`;
                const params = {
                    apiKey: apiKey
                };
                try {
                    const response = await fetch(endpoint + "?" + new URLSearchParams(params));
                    if (!response.ok) {
                        throw new Error("Failed to fetch recipe information. Status code: " + response.status);
                    }
                    const recipeInfo = await response.json();
                    console.log(`Recipe Source: ${recipeInfo.sourceUrl}`);

                    // Call recipeSearch function to show recipe information
                    const recipeData = {
                        id: recipeInfo.id,
                        title: recipeInfo.title,
                        image: recipeInfo.image,
                        summary: recipeInfo.summary,
                        instructions: recipeInfo.instructions
                    };
                    recipeSearch(recipeData, ingredients, apiKey);
                } catch (error) {
                    console.log(error);
                    return null;
                }
            }

            // Call fetchRecipes function to fetch recipes from Spoonacular API
            fetchRecipes(ingredients, apiKey)
                .then(recipes => {
                    if (recipes && Array.isArray(recipes)) {
                        if (recipes.length === 0) {
                            console.log("No recipes found");
                        } else {
                            console.log("Recipes found:");
                            recipes.forEach((recipe, index) => { // Add index parameter to get the current iteration index
                                console.log("- Recipe ID:", recipe.id);
                                console.log("  Recipe Title:", recipe.title);
                                fetchRecipeInformationAndSearch(recipe.id, ingredients, apiKey);

                                // Update recipe titles using IDs and index
                                const titleId = `recipeTitle${index + 1}`; // Add 1 to index to match with 1-based ID
                                const titleElement = document.getElementById(titleId);
                                titleElement.innerHTML = recipe.title;

                                // Update recipe images using IDs and index
                                const imageId = `image${index + 1}`; // Add 1 to index to match with 1-based ID
                                const imageElement = document.getElementById(imageId);
                                imageElement.src = recipe.image;

                            });
                        }
                    } else {
                        console.log("Failed to fetch recipes");
                    }
                });
        }

        // function recipeSearch(recipeData, ingredients, apiKey) {
        //     // Function to fetch recipes from Spoonacular API
        //     async function fetchRecipes(ingredients, apiKey) {
        //         const endpoint = "https://api.spoonacular.com/recipes/findByIngredients";
        //         const params = {
        //             apiKey: apiKey,
        //             number: 4 // Change this to the number of recipes you want to retrieve
        //         };
        //         const url = `${endpoint}?${new URLSearchParams(params)}&ingredients=${ingredients.join(",")}`;
        //         try {
        //             const response = await fetch(url);
        //             if (!response.ok) {
        //                 throw new Error("Failed to fetch recipes. Status code: " + response.status);
        //             }
        //             const data = await response.json();
        //             return data;
        //         } catch (error) {
        //             console.log(error);
        //             return null;
        //         }
        //     }
    
        //     // Function to fetch recipe information using recipe ID
        //     // Async function to fetch recipe information and recipe search using recipe ID
        //     async function fetchRecipeInformationAndSearch(id, ingredients, apiKey) {
        //         const endpoint = `https://api.spoonacular.com/recipes/${id}/information`;
        //         const params = {
        //             apiKey: apiKey
        //         };
        //         try {
        //             const response = await fetch(endpoint + "?" + new URLSearchParams(params));
        //             if (!response.ok) {
        //                 throw new Error("Failed to fetch recipe information. Status code: " + response.status);
        //             }
        //             const recipeInfo = await response.json();
        //             console.log(`Recipe Source: ${recipeInfo.sourceUrl}`);
    
        //             // Call recipeSearch function to show recipe information
        //             recipeSearch(recipeData, ingredients, apiKey);
        //         } catch (error) {
        //             console.log(error);
        //             return null;
        //         }
        //     }
    
        //     // Call fetchRecipes function to fetch recipes from Spoonacular API
        //     fetchRecipes(ingredients, apiKey)
        //         .then(recipes => {
        //             if (recipes && Array.isArray(recipes)) {
        //                 if (recipes.length === 0) {
        //                     console.log("No recipes found");
        //                 } else {
        //                     console.log("Recipes found:");
        //                     recipes.forEach((recipe, index) => { // Add index parameter to get the current iteration index
        //                         console.log("- Recipe ID:", recipe.id);
        //                         console.log("  Recipe Title:", recipe.title);
        //                         fetchRecipeInformationAndSearch(recipe.id, ingredients, apiKey);
    
        //                         // Update recipe titles using IDs and index
        //                         const titleId = `recipeTitle${index + 1}`; // Add 1 to index to match with 1-based ID
        //                         const titleElement = document.getElementById(titleId);
        //                         titleElement.innerHTML = recipe.title;
    
        //                         // Update recipe images using IDs and index
        //                         const imageId = `image${index + 1}`; // Add 1 to index to match with 1-based ID
        //                         const imageElement = document.getElementById(imageId);
        //                         imageElement.src = recipe.image;
        //                     });
        //                 }
        //             } else {
        //                 console.log("Failed to fetch recipes");
        //             }
        //         });
        // }


        ingredients.push(gathered);
        console.log(ingredients)

        const apiKey = '9e3d27b8f50c45d9b2f4f96f86e7780f'; // Replace this with your actual Spoonacular API key
        recipeSearch(ingredients, apiKey);

    });
});

// // Fetch recipes by ingredients from Spoonacular API

// Replace with your own API key

// Number of results to fetch









function init() {
    // createOptions(); 
    createTable();


}

init(); 
