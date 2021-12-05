const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(logger("dev"));
const db = require("./models/workoutModel");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true
});

// require route
app.use(require("./routes/apiRoute"));
app.use(require("./routes/htmlRoute"));

app.listen(PORT, () => {
  console.log(`your app is running on http://localhost:${PORT}`);
});
