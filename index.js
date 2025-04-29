const express =require("express");

const users=require("./MOCK_DATA.json");


const app=express();
const PORT =8004;



app.get("/users",(req,res)=>{
    const html=`
    <ul>
    ${users.map((user)=>`<li>
        ${user.first_name}
        </li>`).join(" ")}
    </ul>
    `;
    res.send(html)
})

//routes  and hybrid router 


//rest api 
app.get("/api/users",(req,res)=>{
    return res.json(users)
})

app.get("/api/users/:id",(req,res)=>{
    const id =Number(req.params.id);
    const user=users.find((user)=>user.id===id)
    return res.json(user)
})












//listen server

app.listen(PORT,()=>{
    console.log("SERVER START AT 8004")
})