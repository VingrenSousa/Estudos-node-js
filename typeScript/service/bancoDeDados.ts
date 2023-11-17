const mongoose =require("mongoose")

const conect=async()=>{
    await mongoose.connect(
        `mongodb+srv://vingren46:vivi1010@node.0qmxcj7.mongodb.net/?retryWrites=true&w=majority`,
        (error:any)=>{
            if(error){
                return console.log("ouve um erro: "+ error)
            }
        
        return console.log("conexão bem sucedida")
    })
    
}
module.exports= conect

// mongodb+srv://vingren46:<password>@node.0qmxcj7.mongodb.net/?retryWrites=true&w=majority