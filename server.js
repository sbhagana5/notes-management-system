const express= require('express');
const app = express();
const path=require("path");
const fs=require("fs");
const BodyParser=require("body-parser");
// const {create}=require("./static/crud")
app.use(BodyParser.urlencoded({ extended: true }))
app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/static/index.html");
})
let name="";
let number="";


//----------------------------------MYSQL-----------------------------------------
var mysql = require('mysql2');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database:"test"
});

con.connect( (err) =>{
  if (!err) {
    console.log("databse is connected successfully.");
  }

  
})

//---------------------END OF MYSQL-------------------------------------------
app.post('/', async(req, res) => {
  console.log("helloo")
  console.log(req.body)
   name= await req.body.name;
   number=await req.body.quote;
   console.log(name);
   console.log(typeof(number));
   
    var sql=`INSERT INTO username(name) VALUES ("${name}");`

   await con.query(sql,(err,res)=>{
     if (err) {
       console.log(err.message)
     }
     console.log("value inserted");
   })
      
     
})
app.listen(3000,(req,res)=>{
    console.log("port number is 3000");
})
