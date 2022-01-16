const express = require("express");
const morgan = require("morgan"); // For log when has request
const handlebars = require("express-handlebars");
const { engine } = handlebars;
const path = require("path");
const app = express();
const port = 3000;

//Định nghĩa path cho static file như img
app.use(express.static(path.join(__dirname, "public")));

// HTTP logger
app.use(morgan("combined"));

//Template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// middleware
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// Định nghĩa route
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.get("/search", (req, res) => {
  // console.log(req.query.q); // lay queryparams
  res.render("search");
});

app.post("/search", (req, res) => {
  console.log(req.body); // lay formdata
  res.send("");
});

// 127.0.0.1 - localhost

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// Nodemon : Để lắng nghe sự thay đổi trong các file và tự động thay đổi mà ko cần chạy lại
