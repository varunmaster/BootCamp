switch ((process.argv[2]).toLower()) {
    case "add":
        console.log(parseFloat(process.argv[3]) + parseFloat(process.argv[4]));
        break;
    case "subtract":
        console.log(parseFloat(process.argv[3]) - parseFloat(process.argv[4]));
        break;
    case "multiply":
        console.log(parseFloat(process.argv[3]) * parseFloat(process.argv[4]));
        break;
    case "divide":
        console.log(parseFloat(process.argv[3]) / parseFloat(process.argv[4]));
        break;
    case "remainder":
        console.log(parseFloat(process.argv[3]) % parseFloat(process.argv[4]));
        break;
    default:
        console.log("you did not put an arithmatic function, stop breaking my code");
}
