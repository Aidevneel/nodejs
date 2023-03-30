const express = require("express");
const bodyParser = require("body-parser");
let moment = require("moment");
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/", (req, res) => {
  const data = req.body;

  function varchar(a) {
    if (
      ((typeof a === "string" && a.trim().length > 0) || (typeof a === "number" && !isNaN(a))) && !null ) {
      return true;
    } else {
      console.log(`data is empty or "${a}" is not varchar`);
      return false;
    }
  }

  function stri(a) {
    if (typeof a === "string" && a.trim().length > 0 && !null) {
      return true;
    } else {
      console.log(`"${a}" is not string`);
      return false;
    }
  }

  function numb(a) {
    if (typeof a === "number" && !isNaN(a) && !null) {
      return true;
    } else {
      console.log(`"${a}" is not a number`);
      return false;
    }
  }

  function bool(a) {
    if (typeof a === "boolean" && !null) {
      return true;
    } else {
      console.log(`"${a}" is not a bollean value`);
      return false;
    }
  }

  function dateFormate(a) {
    if (
      typeof a === "string" &&
      a.length > 0 &&
      moment(a, "YYYY-MM-DD", true).isValid() === true &&
      !null
    ) {
      return true;
    } else {
      console.log("Please enter valid date : YYYY-MM-DD");
      return false;
    }
  }

  function range(a) {
    if (a == 0 || a == 1 || a == 2) {
      return true;
    } else {
      console.log("Out of range");
      return false;
    }
  }

  if (
    varchar(data.HHID) &&
    varchar(data.INDIVID) &&
    varchar(data.AccessCode) &&
    varchar(data.Name) &&
    varchar(data.Email) &&
    varchar(data.Phone) &&
    numb(data.HouseholdSize) &&
    dateFormate(data.TravelDate) &&
    numb(data.VehicleCount) &&
    numb(data.Gender) &&
    numb(data.Age) &&
    numb(data.Hispanic) &&
    range(data.TransitUsage) === true
  ) {
    res.send("success");
  } else {
    res.send("invalid");
  }

});

app.get("*", (req, res) => {
  res.status(404).send("Kindly go to http://127.0.0.1:3000/");
});

app.listen(port, () => {
  console.log(`Listeninig on port ${port}`);
});
