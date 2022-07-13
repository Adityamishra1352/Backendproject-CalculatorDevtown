const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function (req, res) {
  var n1 = Number(req.body.n1);
  var n2 = Number(req.body.n2);
  var ans = n1 + n2;
  res.send("the answer is :" + ans);
});

app.get("/about", function (req, res) {
  res.send("<h1> Hi my name is Aditi Mishra");
  console.log(req.body.n1);
});

app.listen(3000, function () {
  console.log("Server running on port : 3000 ");
});
