const {writeAsync,readAsync} = require("./Fileoper")
console.log(writeAsync());
const result=readAsync();
console.log(result);