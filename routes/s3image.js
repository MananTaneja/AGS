const express = require("express");
const router = express.Router();
const AWS = require('aws-sdk');

router.get("/:data", (req, res) => {

    AWS.config.update({
        accessKeyId: "AKIAIWDHAE7JYKGBGVHQ",
        secretAccessKey: "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"
      });

      //console.log("this is "+req.params.data);

    let s3 = new AWS.S3();

    // var params = { Bucket: "agsrestaurant", Key: req.params.data };
    // s3.getObject(params, function (err, data) {
    //     if (err) {
    //         return res.send({ "error": err });
    //     }
    //     //const ret=encode(data.Body);
    //     console.log("data:image/jpeg;base64,"+data);
    //     res.send({ data});
    //     //res.send({data});
    //   })


    async function getImage(){
      const data =  s3.getObject(
        {
            Bucket: 'agsrestaurant',
            Key: req.params.data
            //Key: '8_Paneer pizza'
          }
        
      ).promise();
      return data;
    }
getImage()
    .then((img)=>{
      // let image="<img src='data:image/jpeg;base64," + encode(img.Body) + "'" + "/>";
      // let startHTML="<html><body></body>";
      // let endHTML="</body></html>";
      // let html=startHTML + image + endHTML;
      //console.log(html)
    res.json({data:encode(img.Body)})
    }).catch((e)=>{
      res.send(e)
    })

      encode = (data) =>{
        //console.log("encode called");
        let buf = Buffer.from(data);
        let base64 = buf.toString('base64');
        return base64;
    }



});

module.exports = router;
