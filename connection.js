
const mysql = require("mysql")
var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "allen",
    password: "password",
    database: "mydatabase",
    multipleStatements: true
});

mysqlConnection.connect((err)=>{
    if(!err){
        console.log("Connected");
    }
    else{
        console.log(err);
    }
})

module.exports = mysqlConnection;