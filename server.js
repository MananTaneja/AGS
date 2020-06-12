const express = require('express');

const app = express();
const path = require('path');
const port = 5000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/home.html'));
})


const mcd = require('./merchants/mcdonalds');

app.use('/mcdonalds', mcd);


app.listen(port, () => console.log(`Server started on port ${port}`));
