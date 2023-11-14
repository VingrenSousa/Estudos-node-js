const http= require("http")

const Porta=8080
interface propsUser{
    name:string,
    idade:number
}
const Serve=http.createServer((req:any,res:any)=>{
    if(req.url=="/home"){
        res.writeHead(200,{"Content-Type":"text/html"})

        res.end('<h1>home</h1>')
    }
    if(req.url=="/user"){
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
        res.writeHead(200,{"Content-Type":"application/json"});
        res.end(JSON.stringify(usuarios));

    }

})
Serve.listen(Porta);