const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'practice',
});

con.connect((err) => {
    if(err) throw err;
    console.log("Connection established");
});


module.exports = con;