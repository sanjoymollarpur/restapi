const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/student-api",{
    //useCreateIndex:true,
    useNewUrlParser: true, // <-- no longer necessary
  useUnifiedTopology: true // <-- no longer necessary
}).then(()=>{
    console.log("connect success");
}).catch((e)=>{
console.log(e);
})