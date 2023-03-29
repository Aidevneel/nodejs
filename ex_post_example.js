const express = require('express');
 
const app = express();
 
app.use(express.json());       
app.use(express.urlencoded({extended: true})); 
 
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
 
app.post("/", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  res.send("Username: " + username);
  res.send("Password: " + password);
  res.send("Data received");
});
 
app.listen(3000);