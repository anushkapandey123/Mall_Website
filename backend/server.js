const express = require('express')
// //create express instance
// const app = express();
var cors = require('cors')
// app.use(express.json())
const app = express()
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
