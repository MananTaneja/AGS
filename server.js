const express = require('express');
const con = require('./config/db');

const app = express();
const path = require('path');
const port = 5000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/home.html'));
})


app.get('/connect', (req,res) => {
    con.query("SELECT id, name FROM merchants", (err, res, fields) => {
        if(err) throw err;
        console.log(fields);
        res.sendFile(path.join(__dirname+'/home.html'));
    });
});

const mcd = require('./merchants/mcdonalds');

app.use('/mcdonalds', mcd);


app.listen(port, () => console.log(`Server started on port ${port}`));
