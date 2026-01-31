const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();


const CLIENT_ID = "cs-8382e2d8-23af-560c-b576-08cc20c52cb8";
const CLIENT_SECRET = "LonqHE7zddsy01RkrCN0+o+bNqVQ51Vh2FdcJrRrlQU=";


app.use(cors({
  origin: "http://localhost:9000",
  methods: ["POST"],
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/jwt", (req, res) => {
  try {
    const { identity, isAnonymous } = req.body;

    if (!identity) {
      return res.status(400).json({ error: "identity is required" });
    }

    const payload = {
      aud: "https://idproxy.kore.ai/authorize",
      iss: CLIENT_ID,
      sub: identity,
      isAnonymous: isAnonymous === true || isAnonymous === "true",
    };

    const token = jwt.sign(payload, CLIENT_SECRET, {
      algorithm: "HS256",
      expiresIn: "1d",
    });

    res.json({ jwt: token });

  } catch (err) {
    console.error("JWT error:", err);
    res.status(500).json({ error: "JWT generation failed" });
  }
});

app.listen(3000, () => {
  console.log("✅ JWT backend running at http://localhost:3000");
});
