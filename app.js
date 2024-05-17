const express = require("express");
const app = express();
const path = require("path"); 
const port = 8080;

//middlwares
app.set("view engine", "ejs"); // for ejs
app.use(express.static(path.join(__dirname, "/public"))); 
app.set("views", path.join(__dirname, "/views")); 



app.get("/home/home", (req,res) => {
    res.render("home.ejs");
});



app.get("/Home", (req,res) => {
    res.render("home.ejs");
});






// page not found 404
app.get("*", (req,res) => {
    res.status(404).send("Page not Found 404");
});

app.listen(port, () => {
   console.log(`app is listening on port ${port}`)
});
