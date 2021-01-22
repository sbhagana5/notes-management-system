
const sql=()=>{
    var mysql=require("mysql2");
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
}

module.exports={
    sql    
    }