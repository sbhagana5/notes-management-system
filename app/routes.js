
const {createUser} = require("./../src/services/usersService")

module.exports=function(app,connection){

//-----------------FOR SIGN UP PAGE-------------------//   
app.get('/signup',(req,res)=>{
    res.render('index.hbs');
})
 
app.post('/signup',(req,res)=>{
        const body= req.body;
        // console.log("from signup post");
        
        const userStatus =  users.createUser(req.body);
            
        res.send("success")

        // res.render("login.hbs").send(userStatus);
    })
    


//--------------------for signin page-----------------//


app.get("/",(req,res)=>{
    res.render("login.hbs");
})
app.get("/login",(req,res)=>{
    res.render("login.hbs");
});

app.post("/login",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;


    // connection.query(`select * from ${username}`,(err,result)=>{
    //     if (err) {
    //         res.render('404.hbs');
    //     } else if(password==result[0].password)  {
    //         console.log("1.chal ra hai.")
    //         res.render("notes.hbs")
    //         app.get("/notes",(request,response)=>{
    //            response.render("notes.hbs");
    //         })
    //         app.post("/notes",(requ,resp)=>{
    //             var create_notes=`create table notes_${req.body.username} (
    //                 userid int  REFERENCES  ${req.body.username}(id),
    //                 notesid int not null auto_increment primary key,
    //                 notes_desc varchar(50) 
    //             );`
                
    //             connection.query(create_notes,(err,result)=>{
    //                 if (err) {
    //                     console.log(err.message);
    //                 } else {
    //                     console.log("table created ")
    //                 }
    //             });
    //             var notes_desc=`insert into notes_${req.body.username}(notes_desc) values ("${requ.body.notes}")`
    //             connection.query(notes_desc,(err,res)=>{
    //                 if (err) {
    //                     console.log(err.message)
    //                 } else {
    //                     console.log("value inserted in notes.")
    //                 // res.render("notes.hbs");
    //                 res.rediect("/notes.html");
    //                 }

    //             })
    //         })  
    //     }
    //     else{
    //         res.render("404.hbs");
    //     }
    // })
})



// ----------------- Notes -----------------------------//

app.get("/notes.html", (req,res) => {
    res.render("notes.hbs");
})


app.get("/get_notes", (req,res) => {
    



    res.send([
        {
            note: 'note 1',
            desc: "This is note 1"
        },
        {
            note: 'note 2',
            desc: "This is note 2"
        },
        {
            note: 'note 3',
            desc: "This is note 3"
        },
        {
            note: 'note 4',
            desc: "This is note 4"
        },
        {
            note: 'note 5',
            desc: "This is note 5"
        }
    ]);
})
}

// create table user(
//     userId int AUTO_INCREMENT primary key,
//     name varchar(20),
//     lastName varchar(20),
//     email varchar(20),
//     mobile_number int(10),
//     password varchar(20)
//     );