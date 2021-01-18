console.log("form is on")
//elements
$form=document.querySelector("#form1");

//create
const create=()=>{
    $message=$form.querySelector("input")
    res.send($message.value)

}

modules.exports(
    {
       create 
    })

