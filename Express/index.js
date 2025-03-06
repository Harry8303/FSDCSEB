const express = require("express");
const app = express();
const path=require('path');
const port = 3005;
const user = [
  { id: 101, name: "Harvard" },
  { id: 102, name: "Oxford" },
];

app.get('/',(req,res)=>{
  console.log("data send by user==",req.query.name)
  res.send("welocme,"+req.query.name)
})
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname,"home.html"))
// });

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname,"about.html"))
});
app.get("/contactus", (req, res) => {
    res.sendFile(path.join(__dirname,"cond.html"))
  });

app.listen(port, () => {
  console.log(`app is running at http://localhost:${port}`);
});
