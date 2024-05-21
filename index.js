const express= require("express");
const cors= require("cors");


const app = express();
app.use(express.json());
app.use(cors());
const port =8000;

app.post("/post",(req,res)=>{
    // console.log("working");
    // console.log(req.params);
//     console.log(req.params);
    // console.log(req);
console.log(req.query.Qntrl);
//   console.log("line 14");
  console.log(req.body);
//   res.json({message:"request received from postman"});
// res.json({message:'post working'})
res.json({"message" : `the paramaeter from post is ${req.query.Qntrl}`});
})
app.post("/post1",(req,res)=>{
    // console.log("working");
    // console.log(req.params);
//     console.log(req.params);
    // console.log(req);
console.log(req.query.Qntrl);
//   console.log("line 14");
  console.log(req.body);
//   res.json({message:"request received from postman"});
// res.json({message:'post working'})
res.json({"message" : `the paramaeter from post1 is ${req.query.Qntrl}`});
})
app.get("/",(req,res)=>{
    res.json({message:'hello world'})
})
app.listen(port,()=>{
    console.log(`running on port ${port}`);
})
