if (process.argv[2] === process.argv[3] && typeof(process.argv[2]) === typeof(process.argv[3])) {
    console.log(typeof(process.argv[2]));
    console.log(typeof(process.argv[3]));
    console.log("this is same");
} else {
    console.log(typeof(process.argv[2]));
    console.log(typeof(process.argv[3]));
    console.log("this is not the same");
}
