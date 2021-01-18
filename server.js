const express= require('express');
const app = express();
const path=require("path");
const fs=require("fs");
const BodyParser=require("body-parser");

app.use(BodyParser.json());
//----------------------------------MYSQL-----------------------------------------
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "oracle11g",
  database:"mydatabase"
});
con.connect((err)=>{
  if (!err) {
    console.log("databse is connected successfully.");
  }
  else{
    console.log("database is not connected.error:"+err.message);
  }
})




//---------------------END OF MYSQL-------------------------------------------
app.listen(3000,(req,res)=>{
    console.log("port number is 3000");
})
