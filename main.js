import express from "express";
import dbConnect from  "./connect.js"
import dotenv from "dotenv";
import router from "./routes/routes.js";
dotenv.config();  

const app = express()
const port = process.env.PORT
app.use(express.json())

app.use(router)
dbConnect()



app.listen(port ,()=>{
    console.log(`this server is running ${port}`);
})






// import mongoose from "mongoose";
// import data from "./model/userSchema.js";



// app.post("/post" , async(req,res)=>{
//     const user = new data(req.body)
//     await user.save()
//     return res.send("data added")

// })




//  app.get("/get" , async(req, res )=>{
//     const persons = await data.find();
//     res.send({persons})
//  })

//  app.get("/user/:id", async(req, res)=>{
//     try{const userId = req.params.id
//         const person = await data.findById(userId)
//         // res.json({user:person})
//         res.send(person)
//      }catch(err){
//         // res.json({message:"user does not exist"})
//         res.send("user does not exist")
//      }
//     }
//   )

//   app.get("/find/:roll", async(req, res)=>{
//     try{const rollno= req.params.roll
//         const person = await data.find({roll:rollno})
//         res.send(person)
//      }catch(err){
//         res.send("user does not exist")
//      }
//     }
//   )


// app.put("/edit/:id" , async(req, res)=>{
//     try{
//         const userId = req.params.id
//         const updatedPerson = await data.findByIdAndUpdate(userId , req.body, {new:true})
//         res.send(updatedPerson)
//     } catch(error){
//        res.send('id does not exist');
//     }
       
// })

// app.delete("/delete/:id" , async(req, res)=>{
//     try{
//     const userId = req.params.id
//     const updatedPerson = await data.findByIdAndDelete(userId )
//     res.send("person deleted successfully")}
//     catch(error){
//         res.send('id does not exist');
//     }
// })

// app.get("/firstThree", async(req, res)=>{
//     const person = await data.find().limit(3);
//     res.send(person)
    
// })


// app.get("/lastThree", async(req, res)=>{
//     const person = await data.find().sort({updatedAt:-1}).limit(3);
//     res.send(person)
    
// })




// const dbConnect = async()=>{
//     await mongoose.connect("mongodb://localhost:27017/details")
//     console.log("connect with database");
// }
