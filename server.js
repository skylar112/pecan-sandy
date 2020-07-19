const express = require ("express");
const logger = require ("morgan");
const mongoose = require ("mongoose");

const PORT = process.env.PORT || 3500;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(require("./routes/api"));
app.use(require("./routes/html"));

mongoose.connect("mongodb://localhost/workout", {
    useNewURLParser: true,
    useFindAndModify: false
})

app.listen(PORT, function() {
  console.log("App listening on PORT: http://localhost:" + PORT);
});