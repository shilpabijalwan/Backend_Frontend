import express from "express";
const app = express();
import "dotenv/config.js";

const port = process.env.PORT ||3000;
const jokes = [
  {
    id: 1,
    title: "joke1",
    content: "joke one",
  },
  {
    id: 2,
    title: "joke 2",
    content: "joke two",
  },
  {
    id: 3,
    title: "joke 3",
    content: "joke three",
  },
  {
    id: 4,
    title: "joke 4",
    content: "joke four",
  },
];
app.get("/", (req, res) => {
  console.log("Home");
});

app.get("/api/jokes", (req, res) => {
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`servr at ${port}`);
});
