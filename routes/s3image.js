const express = require("express");
const router = express.Router();
const AWS = require("aws-sdk");
const keys = require("../config/keys");

router.get("/:imageId", (req, res) => {
  AWS.config.update({
    accessKeyId: keys.accessKeyId,
    secretAccessKey: keys.secretAccessKey,
  });

  const s3 = new AWS.S3();
  async function getImage() {
    const data = s3
      .getObject({
        Bucket: keys.Bucket,
        Key: req.params.imageId,
      })
      .promise();
    return data;
  }
  getImage()
    .then((img) => {
      res.json({ data: encode(img.Body) });
    })
    .catch((e) => {
      res.send(e);
    });

  encode = (data) => {
    const buf = Buffer.from(data);
    const base64 = buf.toString("base64");
    return base64;
  };
});

module.exports = router;
