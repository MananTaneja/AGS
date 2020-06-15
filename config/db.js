const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'database-2.cgqf9yydttci.us-east-2.rds.amazonaws.com',
    user: 'admin',
    password: 'password',
    database: 'agsdb',
});

con.connect((err) => {
    if(err) throw err;
    console.log("Connection established");
});


module.exports = con;