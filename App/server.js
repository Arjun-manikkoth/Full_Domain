const express = require("express");
const app = express();
app.listen(8085);

app.get("/:num1/:num2", (req, res) => {
  const { num1, num2 } = req.params;
  const result = Number(num1) / Number(num2);
  res.send();
});
