var mysql = require("mysql")
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'burgers_db'
})
connection.connect(function(err){
    console.log("connected")
})
module.exports = connection