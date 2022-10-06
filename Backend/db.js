const mongoose =require("mongoose");
const mongoURL="mongodb://localhost:27017/inotebook";

const connectMongos=()=>{

    mongoose.connect(mongoURL,()=>{
        console.log("connected to mongo");
    }).catch((err)=>{
        console.log(err);
    })

    //if you want to use async await
    // await mongosse.connect(mongoURL,{useNewUrlParser:true,useUnifiedTopology:true});
    // console.log("MongoDB connected");
}

module.exports=connectMongos;