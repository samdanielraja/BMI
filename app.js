var express = require("express");
var bodyParser = require("body-parser");
const app= express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  var weight= parseFloat(req.body.wght);
  var height= parseFloat(req.body.hght);
  var bmi= weight/ Math.pow(height, 2);
  res.render("result", {bmi: "bmi"});
});




app.listen(3000, function(req,res){
  console.log("The port get started at port 3000");
});
