const express = require('express');

const app = express();

const port = 5000;

app.get('/try', (req, res) => {
    res.json("Hi!");
})

app.listen(port, () => console.log(`Server started on port ${port}`));
