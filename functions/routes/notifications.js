var { google } = require("googleapis");
var MESSAGING_SCOPE = "https://www.googleapis.com/auth/firebase.messaging";
var SCOPES = [MESSAGING_SCOPE];
const express = require("express");
const router = express.Router();

router.post("/send", function (req, res) {
  getAccessToken()
    .then(function (access_token) {
      var title = req.body.title;
      var body = req.body.body;
      var token = req.body.token;

      request.post(
        {
          headers: {
            Authorization: "Bearer " + access_token,
          },
          url:
            "https://fcm.googleapis.com/v1/projects/ags-restaurant/messages:send",
          body: JSON.stringify({
            message: {
              token: token,
              notification: {
                body: body,
                title: title,
              },
            },
          }),
        },
        function (error, response, body) {
          res.end(body);
          console.log(body);
        }
      );
      return null;
    })
    .catch((err) => {
      console.log(err);
    });
});

function getAccessToken() {
  return new Promise(function (resolve, reject) {
    var key = require("./service-account.json");
    var jwtClient = new google.auth.JWT(
      key.client_email,
      null,
      key.private_key,
      SCOPES,
      null
    );
    jwtClient.authorize(function (err, tokens) {
      if (err) {
        reject(err);
        return;
      }
      resolve(tokens.access_token);
    });
  });
}

module.exports = router;
