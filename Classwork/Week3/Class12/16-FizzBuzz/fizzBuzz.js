for(var i = 1; i < 101; i++) {
    if (i % 15 === 0) {
        console.log(i + " fizzbuzz");
    }
    else if (i % 5 === 0) {
        console.log(i + " buzz");
    }
    else if (i % 3 === 0) {
        console.log(i + " fizz");
    }
    else {
        console.log(i);
    }
}