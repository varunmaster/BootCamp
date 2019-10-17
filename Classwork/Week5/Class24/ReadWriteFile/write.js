var fs = require("fs");

//because there is a callback function ("function (err)"), this means that it's an asynch function. meaning that js will not wait to finish writing to the file
fs.writeFile("movies.txt", "movie1, movie2", function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("no errors, movies.txt updated")
});

// fs.writeFile("movies2.txt", "movie3, movie4", (err) => {
//     if (err) {
//         return console.log("error: ", err);
//     }
//     console.log("no error");
// });
