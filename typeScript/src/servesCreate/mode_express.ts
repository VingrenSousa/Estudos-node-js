const Express = require("express")

const userModel =require("../../models/user.model")
import { propsUser } from "./http";
const usuarios:propsUser[]=[
    {
        name:"joao",
        idade:40
    },
    {
        name:"fabio",
        idade:20
    },
    {
        name:"Vingren",
        idade:21
    }
]

const App = Express()
App.use(Express.json())

App.get("/",(req:any,res:any)=>{
    res.contentType("application/html")
    res.status(200).send("<h1>ola bem vindo</h1>")
  
});

App.get("/users",(req:any,res:any)=>{
    res.status(200)
    res.json(usuarios)
});
App.post('/users',async(req:any,response:any)=>{
    try {
        const user =await userModel.create(req.body)
        response.status(201).json(user)
    } catch (error) {
        response.status(500)
        
    }
    
})
const porta= 8080
App.listen(porta,()=>console.log('rodando com express na porta '+porta));