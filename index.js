// mongodb+srv://test:<password>@cluster0.ndncvf6.mongodb.net/?retryWrites=true&w=majority
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Data = require('./model/dataSchema.js')
const User = require("./model/userSchema.js")
mongoose.connect('mongodb+srv://test:junaiyet@cluster0.lgmbujv.mongodb.net/orebyy?retryWrites=true&w=majority',()=>{
    console.log("Mongodb Connect")
});
//  let dataa = [
//     { "item": "journal", "qty": 25, "size": { "h": 14, "w": 21, "uom": "cm" }, "status": "A" },
//  ] 

app.use(express.json())
app.post('/registation', async function (req, res) {
  let{
    firstname,
     lastname,
     email,
     telephone,
     address1,
     address2,
     city,
     postcode,
     country,
     state,
     password,
    emailvarification,
    terms,
    newslatter
  } = req.body
  let user = new User({
    firstname,
    lastname,
    email,
    telephone,
    address1,
    address2,
    city,
    postcode,
    country,
    state,
    password,
   emailvarification,
   terms,
   newslatter
  });
  user.save();
  res.send("Registation Succesfull")
})

// let data = await Data({
//     "item":"olar",
//     "qty":5,
//     "size":{"h":14,"w":21,"uom":"cm"},
//     "status":"b"
    
// })
// data.save();
// res.send('success')
  // app.get("/data", async (req,res)=>{
  //   // let data = await Data.find({"status":"A"}).select("-item");
  //   let data = await Data.find({"qty": { $lt:22 }});
  //   res.send(data)
  // })

app.listen(5000,()=>{
    console.log('Runing port 5000')
})