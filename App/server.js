import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log(req.query.id);
  res.send("got it");
});

app.listen(3001, () => {
  console.log("server is started");
});
