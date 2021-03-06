import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
by:{
    type: {},
    required: true
},
desc: String,
photo: String,
likeBy:{
     type:[],
     default:[]
 },
 comments: {
    type:[],
    default:[]    
 },  
 createdAt: {
     type: String,
     default: new Date
 }
})

const postModel = mongoose.model('Post',postSchema) //como se llama , y de donde obtiene el modelo
export default postModel;