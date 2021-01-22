
var mysql = require("mysql2");

const connection = mysql.createConnection({
    'host': "localhost",
    'user': "root",
    'password': "root",
    'database': 'mydata'

})


const createUser = user => {
    console.log("user", user)
    if (user.username && user.username != "") {

        connection.connect((err, res) => {
            if (err) {
                console(err.message)
            }
            else {
                console.log("from userService connection created success")

            }
        })

        const que = `insert into users  (username,name,lastName,email,mobile_number,password) 
        values("${user.username}","${user.name}","${user.lname}","${user.email}",${user.mobile_number},"${user.password}");`

        console.log("query", que)
        connection.query(que, (err, res) => {
            console.log("from query created")
            if (err) {
                console.log(err)
                // return { err: err.message }
            } else {
                console.log("User inserted")
                return { status: "success" };
            }
        })
    }




}
module.exports = {
    createUser
}
