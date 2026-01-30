const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const cors = require("cors");

CLIENT_ID="cs-81a5650b-7d12-5f7c-a89f-0ac9b3cb8a7a"
CLIENT_SECRET="MBaw9tErsucR8xZw3uc/Jp3ITJhXncS9xDNKtkzdJdk="
BOT_ID="st-7ff44e13-62c3-57dc-a184-0fd8e4ff185b"

app.use(
  cors({
    origin: "http://localhost:9000",
    methods: ["POST", "OPTIONS"],
    // allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.post("/jwt", (req, res) => {
  const payload={
 "aud": "https://idproxy.kore.com/authorize",
 "iss": CLIENT_ID,
 "sub": "",
 "isAnonymous": false,
}
  const token = jwt.sign(payload, CLIENT_SECRET, { algorithm: "HS256" });
  res.json({jwt:token});
});
app.listen(3000, () => console.log("JWT server running on port 3000"));
