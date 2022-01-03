const express = require("express");
const app = express();
const appPort = 3000

count = 0 
app.get("/", (req, res) => {    
  res.json({ result: "current counter", count: count++ });
});

app.listen(appPort, () => {
  console.log("Server is running..");
});