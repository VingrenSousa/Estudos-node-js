const mongoose =require("mongoose")

const conect=async()=>{
    await mongoose.connect(
        `mongodb+srv://${process.env.MONGODB_ADM}:${process.env.MONGODB_PASSWORD}@node.0qmxcj7.mongodb.net/asaaa?retryWrites=true&w=majority`).then(()=>console.log('conect'))
    
}
module.exports= conect

// mongodb+srv://vingren46:<password>@node.0qmxcj7.mongodb.net/?retryWrites=true&w=majority