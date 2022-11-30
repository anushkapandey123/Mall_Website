const express = require('express')
var cors = require('cors')
const app = express()

const mongoose = require("mongoose")
const port = 8080;

const conn_str = "mongodb+srv://mall_user:user%40123@cluster0.fd7nc0w.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(
    conn_str,
    { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
    },(err) => {
    if (err) {
    console.log("error in connection"+err);
    } else {
    console.log("mongodb is connected");
    }}
);

app.listen(port, () => {
    console.log("starting the server");
    }); 

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
app.post('/form',(req,res)=>{
    console.log(req.body.form.date)
    // x = req.form.date
    // console.log(x)
    // console.log(req)
    // res.send(x)
    res.send("working")
})
app.listen(9000,()=>{
    console.log("server is running")
})
