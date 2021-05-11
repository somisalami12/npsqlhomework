const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const apiroutes = require("./routes/api");
const htmlroutes = require("./routes/views");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(apiroutes);
app.use(htmlroutes);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });