const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());

const categories = require("./data/categories.json");
const data = require("./data/fakeData.json");

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.get("/courses", (req, res) => {
  res.send(data);
});

app.get("/courses/:id", (req, res) => {
  const courses = data.courses;
  const id = req.params.id;
  const selectedCourse = courses.find((course) => id === course.id);
  res.send(selectedCourse);
});

app.get("/category/:id", (req, res) => {
  const courses = data.courses;
  const id = req.params.id;
  const selectedCourses = {};
  const selectedArray = courses.filter((course) => id === course.category_id);
  selectedCourses.courses = selectedArray;
  res.send(selectedCourses);
});

app.listen(port, () => {
  console.log(`Learning platform is app listening on port ${port}`);
});
