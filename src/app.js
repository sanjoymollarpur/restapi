const express = require("express");
const app = express();
require("./db/conn")
const Student = require("./moduls/student");
//const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
//app.use(bodyParser.json());
app.use(express.json());
// app.get("/",(req,res)=>{
//     res.send("Hello i lov")
// })

// app.post("/students",(req,res)=>{
//     const user = new  Student(req.body);
   
//     user.save().then(()=>{
//         //res.status(201);
//         console.log(req.body);
//         res.status(201);
//         res.send(user);
//         return;
//     }).catch((e)=>{
//         res.status(400);
//        res.send(e);
//        return;
//     })
    
//     // res.send(req.body);
   
//    return;
// })
app.post("/students", async(req,res)=>{
    const user = new Student(req.body);
    try{
        const createUser = await user.save();
        console.log(req.body);
        res.status(201);
        res.send(createUser);
    }
    catch(e){
        res.status(400);
        res.send(e);
    }
     
})
app.listen(port, ()=>{
    console.log("connection completed");
})