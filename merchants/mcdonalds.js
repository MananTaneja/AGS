const express = require('express')
const router = express.Router();

router.get('/table/:table_id', (req, res) => {
    console.log('table number at mcd is: ' + req.params.table_id);
    res.redirect("http://localhost:3000/");
});


router.get('/menudetails', (req,res) => {
    console.log("the client side is requesting for menu details");

    const menuData = [
        {
            "id": 1,
            "name": "Burger",
            "price": 200
        },
    
        {
            "id": 2,
            "name": "Pizza",
            "price": 300
        },
    
        {
            "id": 3,
            "name": "Chicken Wings",
            "price": 800
        },
    
        {
            "id": 4,
            "name": "Chocolate Milkshake",
            "price": 200
        }
    ];

    res.json(menuData);
});

module.exports = router;