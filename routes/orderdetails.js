const express = require("express");
const router = express.Router();
const mcdorderdetails = require("../models/mcdorderdetails");

router.post("/", (req, res) => {
//   console.log("hello");
    mcdorderdetails.create({
        phoneNumber:req.body.phoneNumber,
        orderID:req.body.orderid,
        token:req.body.token,
        menuID:req.body.menuid,
        customerName:req.body.name,
        itemName: req.body.menuName, 
        quantity:req.body.quantity, 
        itemPrice:req.body.price, 
        status:"pending", 
        
         specialRequest:"Empty"
    }).then(function(data) {
        res.status(200);
       
    }).catch(function(error) {
        res.status(500);
    });
  
});

router.get("/id", (req, res) => {
    // mcdorderdetails
    mcdorderdetails.findOne({
        limit:1,
        // where: {
        //     key: key,
        // },
        order: [ [ 'orderID', 'DESC' ]],
    }).then(function(data) {
        res.send(data);
       
    }).catch(function(error) {
        res.status(500);
    });
   
  });
module.exports = router;
