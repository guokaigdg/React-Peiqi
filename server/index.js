import express from 'express';
let app = express();
app.get('/',(req,res) => {  //路由
    res.send("hello Word");
})
app.listen(6060, ()=>console.log('Running on localhost: 6060'));  //接入端口