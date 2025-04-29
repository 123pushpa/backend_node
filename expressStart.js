const express=require("express");

const app=express();

app.get("/",(req,res)=>{
    return res.send("HELLO HOME PAGE")
})

//http://localhost:8002/about?name=pushpa&age=55
app.get("/about",(req,res)=>{
    return res.send(`HELOO ${req.query.name}`)
});

app.listen(8002,()=>{
    console.log("SERVER START ")
})