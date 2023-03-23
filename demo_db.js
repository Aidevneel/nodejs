let mysql = require('mysql');

let config = {
    host    : 'localhost',
    user    : 'neel',
    password: 'home1234',
    database: 'school'
  };

let conn = mysql.createConnection(config);

conn.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
    console.log('Inserting Data.');
    let sql = `INSERT INTO student(SName,Fav_book,BloodGroup) VALUES("Nodeuser","kaaaaak","js")`;
    conn.query(sql);

    conn.end(function(err) {
        if (err) {
          return console.log('error:' + err.message);
        }
        console.log('Close the database connection.');
      });
  });


  
