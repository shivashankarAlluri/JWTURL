const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const cors = require("cors");

CLIENT_ID="cs-8382e2d8-23af-560c-b576-08cc20c52cb8"
CLIENT_SECRET="LonqHE7zddsy01RkrCN0+o+bNqVQ51Vh2FdcJrRrlQU="
BOT_ID="st-7ff44e13-62c3-57dc-a184-0fd8e4ff185b"

app.use(
  cors({
    origin: "http://localhost:9000",
    methods: ["POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.post("/jwt", (req, res) => {
  const payload={
 "aud": "https://idproxy.kore.com/authorize",
 "iss": CLIENT_ID,
 "sub": "shiva@gmail.com",
 "isAnonymous": false,
}
  const token = jwt.sign(payload, CLIENT_SECRET, { algorithm: "HS256" });
  res.json({jwt:token});
});
app.listen(3000, () => console.log("JWT server running on port 3000"));
