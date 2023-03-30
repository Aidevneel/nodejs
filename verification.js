const express = require("express");
let moment = require("moment");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const jsonn =
  '{	"HHID": "MMM10",	"INDIVID": "MMM1001",	"AccessCode": "ENTER",	"Name": "Roger",	"Email": "xxx@yyy.com",	"Phone": "+1617222222",	"HouseholdSize": 5,	"TravelDate": "2023-03-27",	"VehicleCount": 2,	"Gender": 1,	"Age": 30,	"Hispanic": 0,	"TransitUsage": 1}';

const data = JSON.parse(jsonn);

function varchar(a) {
  if (
    ((typeof a === "string" && a.trim().length > 0) ||
      (typeof a === "number" && !isNaN(a))) &&
    !null
  ) {
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
  console.log("success");
} else {
  console.log("invalid");
}
