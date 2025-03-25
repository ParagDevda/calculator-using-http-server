const express = require("express");
const app = express();

app.get("/sum/:a/:b",function(req,res){
    let a = parseInt(req.params.a);
    let b =  parseInt(req.params.b);
    res.json({sum:a+b})
})


app.listen(3000);

async function fetching(){ 
    let inputA = document.getElementById("a")
    let a = inputA.value ;
    let inputB = document.getElementById("a")
    let b = inputB.value ;
    let path = "localhost:3000/sum/"+a+"/"+b ;

    let result = await fetch(path)
}