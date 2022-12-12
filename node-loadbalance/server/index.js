const express = require("express");
const os = require("os");

const app = express();
const hostname = os.hostname();

app.get("/", (req, res) => res.send(`Hello from hostname: ${hostname}`));

app.listen(8080, () => console.log(`Listening on port: 8080 on host: ${hostname}`));