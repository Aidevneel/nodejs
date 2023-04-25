const express = require("express");
const app = express();
const path = require("path");

// showing dynamic data through view engine hbs from different path

app.set("view engine","hbs");

const paths = path.join(__dirname,"/public");
app.set("views",paths);     //path is changed from view dir to public

app.get("/",(req,res) => {     
    res.render("zz",{       // file named zz will open but from public dir not from view dir
        name: "Neel"        
    });
});

app.listen(4000,() => {
    console.log("Listening on port 4000");
});