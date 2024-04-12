const path = require("path");
const cors = require("cors"); // 해당 라이브러리 가져와서 쓴다는 의미
const express = require("express");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./form.html"));
});
app.post("/submit", (req, res) => {
  console.log(req.body);
  const { name, password } = req.body;
  return res.send(`Form submitted ${name}, ${password}`);
});

app.listen(3000, () => console.log("Server running on port 3000"));
