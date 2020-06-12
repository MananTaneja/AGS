const express = require('express')
const router = express.Router();

router.get('/:table_id', (req, res) => {
    res.send('table number at mcd is: ' + req.params.table_id);
});

module.exports = router;