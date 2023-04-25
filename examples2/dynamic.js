const express = require("express");
const app = express();

// showing dynamic data through view engine hbs
app.set("view engine","hbs");
app.get("/:yourname",(req,res) => {
    const realname = req.params.yourname;
    res.render("index",{       // file name goes here which you have to run
        name: realname        //sending this data to html page, key name should be {{name}} in html page
    });
});

app.get('/',(req,res) => {
    console.log("A new request received at " + Date.now());
    res.send("It works top down approach");
});

app.listen(4000,() => {
    console.log("Listening on port 4000");
});

// view folder is compulsary when using view engine, you can change default view folder.