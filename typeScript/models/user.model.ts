const Mongoose =require("mongoose")

const userSchema= new Mongoose.Schema({
    firsName:{
        type: String,
        required:true
    },
    lastName:{
        type: String,
        required:true

    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true,
        minlength:7
    }
})
const UserModal = Mongoose.model('User',userSchema)
module.exports=UserModal