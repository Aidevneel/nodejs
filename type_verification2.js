const express = require("express");
const bodyParser = require("body-parser");
let moment= require('moment');
const { json } = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.post("/", (req, res) => { 

    const HHID =  req.body.HHID;
    console.log(typeof(HHID));
    console.log(HHID);    
    const INDIVID =  req.body.INDIVID;
    console.log(typeof(INDIVID));
    console.log(INDIVID);
    const AccessCode =  req.body.AccessCode;
    console.log(typeof(AccessCode));
    console.log(AccessCode);
    const Name =  req.body.Name;
    console.log(typeof(Name));
    console.log(Name);
    const Email =  req.body.Email;     
    console.log(typeof(Email));
    console.log(Email);  
    const Phone =  req.body.Phone;   
    console.log(typeof(Phone));
    console.log(Phone);
    const HouseholdSize =  req.body.HouseholdSize;
    console.log(typeof(HouseholdSize));
    console.log(HouseholdSize);
    const TravelDate =  req.body.TravelDate;
    console.log(typeof(TravelDate));
    console.log(TravelDate);
    const VehicleCount =  req.body.VehicleCount;
    console.log(typeof(VehicleCount));
    console.log(VehicleCount);
    const Gender =  req.body.Gender;
    console.log(typeof(Gender));
    console.log(Gender);
    const Age =  req.body.Age;
    console.log(typeof(Age));
    console.log(Age);
    const Hispanic =  req.body.Hispanic;
    console.log(typeof(Hispanic));
    console.log(Hispanic);
    const TransitUsage =  req.body.TransitUsage;
    console.log(typeof(TransitUsage));
    console.log(TransitUsage);

    function varchar(a){   
        if(((typeof(a) === "string" && a.trim().length > 0 ) || (typeof(a) === "number" && !isNaN(a))) && !null ) {
            return true;
        }else{
            console.log(`data is empty or "${a}" is not varchar`);
            return false;
        }
    }

    function stri(a){
        if((typeof(a) === "string" && a.trim().length > 0 ) && !null ) {
            return true;
        }else{
            console.log(`"${a}" is not string`);
            return false;
        }
    }

    function numb(a){
        if((typeof(a) === "number" && !isNaN(a)) && !null ) {
            return true;
        }else{
            console.log(`"${a}" is not a number`);
        return false;
        }
    }

    function bool(a){
        if(typeof(a) === "boolean" && !null ) {
            return true;
        }else{
            console.log(`"${a}" is not a bollean value`);
            return false;
        }
    }

    function dateFormate(a){
        if((typeof(a) === "string" && a.length > 0 && (moment(a, 'YYYY-MM-DD',true).isValid() === true)) && !null ) {
            return true;
        }else{
            console.log("Please enter valid date : YYYY-MM-DD");
            return false;
        }
    }

    function range(a){
        if ( a == 0 || a == 1 || a == 2){
            return true;
        } else {
            console.log("Out of range");
            return false;
        }
    }

    if( varchar(HHID) && varchar(INDIVID) && varchar(AccessCode) && varchar(Name) && varchar(Email) && varchar(Phone) && 
    numb(HouseholdSize) && dateFormate(TravelDate) && numb(VehicleCount) && numb(Gender)
    && numb(Age) && numb(Hispanic) && range(TransitUsage) === true ){
        res.send("success");
    } else {
        res.send("invalid");
    }

    console.log(typeof(TravelDate));
    let result = moment(TravelDate, 'YYYY-MM-DD',true).isValid();
    console.log(range(TransitUsage));
});
app.get("*", (req, res) => {
    res.status(404).send("Kindly go to http://127.0.0.1:3000/");
});
  
app.listen(port, () => {
    console.log(`Listeninig on port ${port}`);
});