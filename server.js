const express = require("express")
const mysqlConnection = require("./connection")
const bodyparser = require("body-parser")

const PeopleRoutes = require("./routes/students");
var app = express();
app.use(bodyparser.json())

app.use("/students", PeopleRoutes)


app.listen(3000)