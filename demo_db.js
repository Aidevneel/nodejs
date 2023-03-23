let mysql = require('mysql');

let hhid = "abc";
let individ = "123";
let access_code = "4asad0";
let username  = "neel1234";
let name = "meet";
let email = "meet@yahoo.com";
let phone = "5656565656";
let first_reg = "2023-01-23 12:45:56";
let recent_reg = "2023-01-23 12:45:56";
let is_survey_completed = true;
let created_on = "2023-01-23 12:45:56";
let updated_on = "2023-01-23 12:11:11";

let config = {
    host    : 'localhost',
    user    : 'neel',
    password: 'home1234',
    database: 'home'
  };

let conn = mysql.createConnection(config);

conn.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
    console.log('Inserting Data.');          
    
    conn.query(
        `INSERT INTO household values(?,?,?,?,?,?,?,?,?,?,?,?) ON DUPLICATE KEY UPDATE 
        access_code = "${access_code}", username = "${username}", name = "${name}", email = "${email}", 
        phone = "${phone}", first_app_registration_on = "${first_reg}", recent_app_registration_on = "${recent_reg}", 
        is_pre_survey_completed = ${is_survey_completed}, updated_on = "${updated_on}"`,
        [ hhid, individ, access_code, username, name, email, phone, first_reg, recent_reg, is_survey_completed, created_on, updated_on ],
        function (err, results) {
            if (err) {
                return console.log('error:' + err.message);
              }
              console.log('Insertion successful');
        }
    );

    conn.end(function(err) {
        if (err) {
          return console.log('error:' + err.message);
        }
        console.log('Close the database connection.');
      });
  });
  
