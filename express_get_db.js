const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
let mysql = require('mysql');

let config = {
    host    : 'localhost',
    user    : 'neel',
    password: 'home1234',
    database: 'school'
  };
let conn = mysql.createConnection(config); 

app.get('/',(req,res) => {
    res.write("<h1>Neel</h1>");
    res.write('hello from neel');
    res.send();
});

app.get('/contact/:customerid',(req,res) => {
    const id = req.params.customerid;  

    conn.connect(function(err) {
        if (err) {
          return console.error('error: ' + err.message);
        }
      
        console.log('Connected to the MySQL server.');
        console.log('Finding records...');       
        const sql = `select * from student where Enroll = ${id}`;
        conn.query(sql, function (err, results) {
                if (err) {
                    res.send('no record found:');
                  }
                //   console.log('record found');
                  res.send(results);
            }
        );
    
        conn.end(function(err) {
            if (err) {
              return console.log('error:' + err.message);
            }
            console.log('Close the database connection.');
          });
      });    
});

app.get('*',(req,res) => {
    res.status(404).send('Kindly go to http://127.0.0.1:8000/contact/id');
});


app.listen(port, () => {
    console.log(`Listeninig on port ${port}`);
});