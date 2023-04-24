const express = require("express");
const app = express();

app.get('/',(req,res) => {
    console.log("A new request received at " + Date.now());
    res.send("Neel");
});

app.listen(4000,() => {
    console.log("Listening on port 4000");
});