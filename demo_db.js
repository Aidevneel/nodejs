let mysql = require('mysql');

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
    let sql = `INSERT INTO household(hhid, individ, access_code, username, name, email, phone, first_app_registration_on, recent_app_registration_on, is_pre_survey_completed, created_on, updated_on) VALUES ("test","ab123","xyz23","neel1234","neel","neel@gmail.com","5986598659","2023-01-23 12:45:56","2023-01-23 12:45:56",true,"2023-01-23 12:45:56","2023-01-23 12:45:56");`;
    conn.query(sql);
    

    conn.end(function(err) {
        if (err) {
          return console.log('error:' + err.message);
        }
        console.log('Close the database connection.');
      });
  });


  
