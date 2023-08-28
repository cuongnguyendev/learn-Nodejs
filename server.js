const express=require('express')
const app=express()



//routes

app.get('/',(req,res)=>{
    res.send('hello NODE')
})

app.listen(3000,()=>{
    console.log('Node API app is reunning pon port 3000')
})
