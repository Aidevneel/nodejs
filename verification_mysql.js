const express = require("express");
const bodyParser = require("body-parser");
let moment = require("moment");
let mysql = require("mysql");
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let config = {
  host: "localhost",
  user: "neel",
  password: "home1234",
  database: "home",
};

let conn = mysql.createConnection(config);

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

app.post("/", (req, res) => {
  const data = req.body; 

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
    conn.connect(function (err) {
      if (err) {
        return console.error("error: " + err.message);
      }

      console.log("Connected to the MySQL server.");

      conn.query(
        `INSERT INTO household2 values(?,?,?,?,?,?,?,?,?,?,?,?,?)`,
        [
          data.HHID,
          data.INDIVID,
          data.AccessCode,
          data.Name,
          data.Email,
          data.Phone,
          data.HouseholdSize,
          data.TravelDate,
          data.VehicleCount,
          data.Gender,
          data.Age,
          data.Hispanic,
          data.TransitUsage,
        ],
        function (err, results) {
          if (err) {
            res.send("my error : " + err);
          } else {
            console.log("data inserted successfully!");
            res.send("insertion completed");
          }
        });

      conn.end(function (err) {
        if (err) {
          return console.log("error:" + err.message);
        }
        console.log("Close the database connection.");
      });

    });    

  }  else  {
    res.send("invalid");
  }

});

app.get("*", (req, res) => {
  res.status(404).send("Kindly go to http://127.0.0.1:3000/");
});

app.listen(port, () => {
  console.log(`Listeninig on port ${port}`);
});
