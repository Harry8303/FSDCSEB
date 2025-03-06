const fs = require("fs");

function writeData() {
  try {
    fs.writeFileSync("data.txt", "Welcome to node js fs module");
    console.log("Data is written successfully");
  } catch (err) {
    console.log("Error during writing in file:" + err);
  }
}
function readData() {
  try {
    const frd = fs.readFileSync("data.txt", { encoding: "utf-8" });
    return frd;
    // console.log(frd);
  } catch (err) {
    console.log("Error during reading from file:" + err);
  }
}


function appendData() {
  try {
    fs.appendFileSync("data.txt", "Hi,Data is appended using fs module");
    console.log("Data is appended successfully");
  } catch (err) {
    console.log("Error during appending in file:" + err);
  }
}
function unLink() {
  try {
    fs.unLinkSync("data.txt");
    console.log("File is deleted successfully");
  } catch (err){
    console.log("Error during deleting file:" + err);
  }
}


const obj = { writeData, readData,appendData, unLink };
module.exports = obj;