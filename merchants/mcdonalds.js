const express = require('express')
const router = express.Router();

router.get('/:table_id', (req, res) => {
    console.log('table number at mcd is: ' + req.params.table_id);
    res.redirect("http://localhost:3000");
});

module.exports = router;