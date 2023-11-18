

const nameUses=
{
    firsName:"vingren",
    lastName:"sousa",
    email:"vingren@gmail.com",
    password:"123456"
}
const userJson= JSON.stringify(nameUses)
const apiConect=async()=>{
    const servs = await fetch('http://localhost:8080/users:'+userJson)
    console.log(servs)
}
apiConect()