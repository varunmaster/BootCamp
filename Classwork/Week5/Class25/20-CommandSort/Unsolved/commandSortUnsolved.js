// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================
var output = [];
for (var i = 2; i < process.argv.length; i++) {
    for (var j = 0; j < process.argv.length - 1; j++)
    if (parseFloat(process.argv[i]) > parseFloat(process.argv[i+1])) {
        temp = parseFloat(process.argv[i]);
        parseFloat(process.argv[i]) = parseFloat(process.argv[i+1]);
        parseFloat(process.argv[i+1]) = temp;
        output.push(parseFloat(process.argv[i]));
        output.push(parseFloat(process.argv[i+1]));
    }
}

console.log(output);
