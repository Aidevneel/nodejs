const express = require("express");
const app = express();
const path = require("path");

// showing static webpage
const paths = path.join(__dirname,"/public");

app.use(express.static(paths));

app.get('/',(req,res) => {
    res.render('index.html')
});

app.listen(4000,() => {
    console.log("Listening on port 4000");
});