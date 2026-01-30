// const jwt = require("jsonwebtoken");

// module.exports = (req, res) => {
//   try {
//     const CLIENT_ID = process.env.CLIENT_ID;
//     const CLIENT_SECRET = process.env.CLIENT_SECRET;
//     const BOT_ID = process.env.BOT_ID;

//     if (!CLIENT_ID || !CLIENT_SECRET || !BOT_ID) {
//       return res.status(500).json({ error: "Missing env variables" });
//     }

//     const payload = {
//       sub: "user@example.com",
//       iss: CLIENT_ID,
//       aud: "https://idproxy.kore.ai/authorize",
//       exp: Math.floor(Date.now() / 1000) + 60 * 60,
//       bot_id: BOT_ID,
//     };

//     const token = jwt.sign(payload, CLIENT_SECRET, {
//       algorithm: "HS256",
//     });
//     console.log(token)

//     res.status(200).json({ jwt: token });
//   } catch (err) {
//     res.status(500).json({ error: "JWT generation failed" });
//   }
// };

const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
CLIENT_ID="cs-715658d0-a92e-5e9c-8ac6-8cb926a34742"
CLIENT_SECRET="CmV5PINJjMpNbMAlWwCQ7vkZw+rNTgsAZtgW+D7MXiY="
BOT_ID="st-6279fb06-4b17-5e1e-a810-8fc35f6ba7f3"
app.get("/jwt", (req, res) => {
  const payload = {
    sub: "user@example.com",
    iss: CLIENT_ID,
    aud: "https://idproxy.kore.ai/authorize",
    exp: Math.floor(Date.now() / 1000) + 60 * 60,
    bot_id: BOT_ID,
  };
  const token = jwt.sign(payload, CLIENT_SECRET, { algorithm: "HS256" });
  res.json({ jwt: token });
});
app.listen(3000, () => console.log("JWT server running on port 3000"));
