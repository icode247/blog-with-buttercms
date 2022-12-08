const express = require("express");
const ejs = require("ejs");
require('dotenv').config()
const router = require('./routes');

const app = express();
app.set("view engine", "ejs");
app.use(express.json());
app.use('/static', express.static('public'));


app.get('blog', ())


const PORT = 4002;
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
