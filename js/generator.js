

// function createOptions() {
//     const table1 = document.createElement("table");
//     for (let i = 0; i < Math.floor(num / 10); ++i) {
//         for (let j = 0; j < 10; ++j) {

//             const newRow = document.createElement("tr");

//             // make the actual table cells 
//             const newCell = document.createElement("td");

//             // what should cell say?
//             // set inner Html 
//             newCell.innerHTML = String((i * 10) + j + 1);

//             // set the classname 
//             newCell.className = "gameCell";


//             // add it to the row 
//             newRow.append(newCell);
//             // row += String((i*10) + j+1); 

//         }

//         // all cells are added to the row 
//         // add row to table 
//         table1.appendChild(newRow);

//     }

//     document.getElementById("options1").append(table1);

//     const table2 = document.createElement("table");

//     for (let i = 0; i < Math.floor(num / 10); ++i) {
//         for (let j = 0; j < 10; ++j) {

//             const newRow2 = document.createElement("tr");

//             // make the actual table cells 
//             const newCell2 = document.createElement("td");

//             // what should cell say?
//             // set inner Html 
//             newCell2.innerHTML = String((i * 10) + j + 1);

//             // set the classname 
//             newCell2.className = "gameCell";


//             // add it to the row 
//             newRow2.append(newCell2);
//             // row += String((i*10) + j+1); 

//         }

//         // all cells are added to the row 
//         // add row to table 
//         table2.appendChild(newRow2);

//     }

//     document.getElementById("options2").append(table2);

// }

function createTable() {
    
    let foodArray = ["tomatoes", "lettuce", "carrots", "spinach"];

    let num = foodArray.length; 

    const newTable = document.createElement("table");
    if ( num < 10 ) { 
        num = 10; 
    }
    for (let i = 0; i < Math.floor(num / 10); ++i) {
        // loops for correct number of rows 
        // make a row 
        const newRow = document.createElement("tr");

        let foodArray = ["tomatoes", "lettuce", "carrots", "spinach"]
        // within each row, what should happen?
        // print out ten numbers 
        for (let j = 0; j < foodArray.length; ++j) {
            // make the actual table cells 
            const newCell = document.createElement("td");

            // what should cell say?
            // set inner Html 
            newCell.innerHTML = foodArray[j]; 

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

    document.getElementById("options1").append(newTable);


}

function init() { 
    // createOptions(); 
    createTable(); 
}

init(); 