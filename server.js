const express= require('express');
const app = express();
const hbs=require('hbs')
const path=require('path')
const BodyParser=require("body-parser");

var mysql=require("mysql2");

app.use(BodyParser.urlencoded(
  { extended: true }))
  app.use(BodyParser.json());
  
  
  
  const connection=mysql.createConnection({

      'host':"localhost",
      'user':"root",
      'password':"root",
      'database':'mydata'

  })
  connection.connect((err,res)=>{
      if (err) {
          console(err.message)
      }
      else{
          console.log("database is connected");
      }
  })


  const viewsPath=(path.join(__dirname,'/views'))
  app.set('view engine','hbs')
  app.set('views',viewsPath)
  app.use(express.static(__dirname + '/public'));

  require('./app/routes.js')(app,connection);



app.listen(3000,(req,res)=>{
    console.log("port number is 3000");
})
