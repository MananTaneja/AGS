const { google } = require("googleapis");
const MESSAGING_SCOPE = "https://www.googleapis.com/auth/firebase.messaging";
const SCOPES = [MESSAGING_SCOPE];
const express = require("express");
const router = express.Router();

router.post("/send", function (req, res) {
  getAccessToken()
    .then(function (access_token) {
      const title = req.body.title;
      const body = req.body.body;
      const token = req.body.token;

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
    const key = require("./service-account.json");
    const jwtClient = new google.auth.JWT(
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
