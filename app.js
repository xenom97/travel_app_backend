require("dotenv").config();
const express = require("express");
const router = require("./router");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server running on http://localhost:${PORT}`);
});
