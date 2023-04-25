const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

const paths = path.join(__dirname,"/public");
app.set("view engine","hbs");
app.set("views",paths);     //path is changed from view dir to public

const partialPaths = path.join(__dirname,"/partials");      //path of partials folder which contains all partials(modules like header, footer)
hbs.registerPartials(partialPaths);     //

app.get('/',(req,res) => {
    res.render("about");
});

app.listen(4000,() => {
    console.log("Listening on port 4000");
});


// partial : make a file header with code of header and user that on all page
// check partials/header.hbs and public/about.hbs
//  {{>header}} file name of partial folder will goes in html file (this format is only for handlers hbs)