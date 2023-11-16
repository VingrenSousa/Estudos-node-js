const Express = require("express")
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

App.get("/",(req:any,res:any)=>{
    res.contentType("application/html")
    res.status(200).send("<h1>ola bem vindo</h1>")
  
});

App.get("/users",(req:any,res:any)=>{
    res.status(200)
    res.json(usuarios)
});
const porta= 8080
App.listen(porta,()=>console.log('rodando com express na porta '+porta));