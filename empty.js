  if( varchar(HHID) && varchar(INDIVID) && varchar(AccessCode) && varchar(Name) && varchar(Email) && varchar(Phone) && 
  numb(HouseholdSize) && dateFormate(TravelDate) && numb(VehicaleCount) && numb(Gender)
  && numb(Age) && numb(Hispanic) && numb(TransitUsage) === true ){
        res.send("success");
    } else {
        res.send("invalid");
    }

    "HHID": "MMM10",
	"INDIVID": "MMM1001",
	"AccessCode": "ENTER",
	"Name": "Roger",
	"Email": "xxx@yyy.com",
	"Phone": "+1617222222",
	"HouseholdSize": 5,
	"TravelDate": "2023-03-27",
	"VehicleCount": 2,
	"Gender": 1,
	"Age": 30,
	"Hispanic": 0,
	"TransitUsage": 1