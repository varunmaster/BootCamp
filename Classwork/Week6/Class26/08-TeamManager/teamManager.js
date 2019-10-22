var inquirer = require('inquirer');
var count = 0;

var Player = function (name, position, offense, defense) {
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;
    this.goodGame = function () {
        var flip = Math.floor(Math.random() * 2);
        if (flip !== 0) {
            this.offense++;
            console.log("increased offense");
        } else {
            this.defense++;
            console.log("increased defense");
        }
    };
    this.badGame = function () {
        var flip = Math.floor(Math.random() * 2);
        if (flip !== 0) {
            this.offense--;
            console.log("decreased offense");
        } else {
            this.defense--;
            console.log("decreased defense");
        }
    };
}

Player.prototype.printStats = function () {
    console.log("Name: " + this.name + "\nPosition: " + this.position +
        "\nOffense: " + this.offense + "\nDefense: " + this.defense);
};

var starters = [];
var subs = [];

var askQuestions = function () {
    if (count < 3) {
        inquirer.prompt([
            {
                name: "name",
                message: "What is your name?"
            }, {
                name: "position",
                message: "What is your current position?"
            }, {
                name: "offense",
                message: "set offense",
                validate: function (value) {
                    if (isNaN(value) && parseInt(value) && parseInt(value) <= 10) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            }, {
                name: "defense",
                message: "set defense",
                validate: function (value) {
                    if (isNaN(value) && parseInt(value) && parseInt(value) <= 10) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            }
        ]).then(function (answers) {
            // initializes the variable newPlayer to be a Player object which will take
            // in all of the user's answers to the questions above
            var newPlayer = new Player(answers.name, answers.position, parseInt(answers.offense), parseInt(answers.defense));

            newPlayer.printStats();
        });
        if (starters.length < 2) {
            starters.push(newPlayer);
        } else {
            subs.push(newPlayer);
        }
        count++;
        askQuestions();
    }
};

//need this line to begin the series of prompts 
askQuestions();
