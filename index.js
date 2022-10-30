const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("simple node server running");
});

app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: "sabana", email: "sabanababy@gmail.com" },
  { id: 2, name: "sabnur", email: "sabnoorbaby@gmail.com" },
  { id: 3, name: "sabila", email: "sabilababy@gmail.com" },
];

app.get("/users", (req, res) => {
  res.send(users);
});
app.post("/users", (req, res) => {
  console.log("post api calling");
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);

  console.log(req.body);
});

app.listen(port, () => {
  console.log("simple node server running on port");
});
