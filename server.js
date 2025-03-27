const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());

// app.get("/",function(req,res){
//     res.sendFile(__dirname+"/index.html")})
app.use(cors())

app.post("/sum",function(req,res){
    let a = parseInt(req.body.a);
    let b =  parseInt(req.body.b);
    res.json({sum:a+b})
    console.log()
})



app.listen(3000);