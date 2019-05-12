const inquirer = require("inquirer");
const mySQL = require("mysql");

const connection = mySQL.createConnection({
    host: "localhost",
    user: "root",
    password: "Yellow13",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    runSearch();

});

function runSearch() {
    inquirer
        .prompt({
            type: "list",
            message: "Welcom to Bamazon. How can I help you?",
            choices: [
                "Show me whats available",
                "Oops. Forgot my wallet. I'll come back later."
            ],
            name: "order",
        })
        .then(function (answer) {
            switch (answer.order) {
                case "Show me whats available":
                    takeOrder();
                    break;
                case "Oops. Forgot my wallet. I'll come back later.":
                    console.log("Have a nice day!");
                    connection.end();
                    break;
            }
        });
}


function takeOrder() {
    inquirer
        .prompt({
            type: "list",
            message: "Here is our available products. What would you like to order?",
            choices: [
                "Cookies",
                "Keybord",
                "Blue Paint",
                "AA Batteries",
                "Nerf Gun",
                "Bananas",
                "Dog Bones",
                "Folding Chir",
                "Printer Paper",
                "Crayons"
            ],
            name: "selection",
        })
        .then(function (answer) {
            let query = "SELECT product_name,price FROM products WHERE product_name ?";
            connection.query(query, { product_name: selection.answer }, function (err, res) {
                console.log("Ok. " + res.product_name + " will cost " + res.price);
            })
            break;
        });
}



