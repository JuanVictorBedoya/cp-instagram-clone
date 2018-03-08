import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username:{
        type: String,
        unique: true,
        required:[true, "El campo es requerido"]
    },
    password: String,
    desc: String,
    bio: String,
    email: String,
    thumbnail: "String",
    posts:{
        type: [],
        dafault: []
    },
    following:{
        type: [],
        dafault: []
    },
    followers:{
        type: [],
        dafault: []
    }
})

const userModel = mongoose.model('User',userSchema) //como se llama , y de donde obtiene el modelo
export default userModel;