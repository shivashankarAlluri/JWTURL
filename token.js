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
CLIENT_ID="cs-8382e2d8-23af-560c-b576-08cc20c52cb8"
CLIENT_SECRET="LonqHE7zddsy01RkrCN0+o+bNqVQ51Vh2FdcJrRrlQU="
BOT_ID="st-7ff44e13-62c3-57dc-a184-0fd8e4ff185b"
app.get("/jwt", (req, res) => {
  const payload = {
    sub: "user@example.com",
    iss: CLIENT_ID,
    aud: "https://idproxy.kore.ai/authorize",
    exp: Math.floor(Date.now() / 1000) + 60 * 60,
    bot_id: BOT_ID,
  };
  const token = jwt.sign(payload, CLIENT_SECRET, { algorithm: "HS256" });
  res.json(token);
});
app.listen(3000, () => console.log("JWT server running on port 3000"));
