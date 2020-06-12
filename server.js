const express = require('express');

const app = express();

const port = 5000;

app.get('/generate/mcdonalds', (req, res) => {
    res.redirect('http://localhost:3000/');
})

app.listen(port, () => console.log(`Server started on port ${port}`));
