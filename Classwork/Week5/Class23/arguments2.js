//this will take arguments and add them. by default 
//argv[0] is the location of where node is installed
//arg[1] is where the current file is located at
//all arguments after [1] are input params for your js file
console.log(process.argv);
console.log(parseFloat(process.argv[2]) + parseFloat(process.argv[3]));
