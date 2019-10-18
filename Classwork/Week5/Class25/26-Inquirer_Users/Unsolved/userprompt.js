// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
var inquirer = require("inquirer");

inquirer.prompt([
    {
        type: "input",
        message: "What is your name?",
        name: "username"
    },
    {
        type: "password",
        message: "Set your password?",
        name: "pwd"
    },
    {
        type: "list",
        message: "Which account do you have?",
        choices: ["Admin", "PowerUser", "Staff"],
        name: "Account"
    },
    {
        type: "checkbox",
        message: "Choose one",
        choices: ["Choice 1", "Choice 2", "Choice 3"],
        name: "checkbox"
    },
    {
        type: "confirm",
        message: "Say yes",
        name: "confirm",
        default: true
    }
]).then(function(res) {
    if(res.confirm) {
        console.log("Input: ", res.username);
        console.log("Pwd: ", res.pwd);
        console.log("List: ", res.Account);
        console.log("checkbox: ", res.checkbox);
        console.log("confirm: ", res.confirm);
    } else {
        console.log("you didnt select Y");
    }
})
