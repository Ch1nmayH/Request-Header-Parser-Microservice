const express = require("express");
const app = express();

app.set("trust proxy", true);

app.get("/api/whoami", (req, res) => {
  let ipaddress = req.ip;
  let language = req.headers["accept-language"];
  let software = req.headers["user-agent"];
  res.json({ ipaddress, language, software });
});

app.listen(8000);
