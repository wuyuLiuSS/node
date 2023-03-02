const express = require('express');
const mongoose =require('mongoose')
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json())


app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
mongoose.connect('mongodb://localhost:27017/houtaiss',{useNewUrlParser: true},(err)=>{
    if (err) {
        console.log('数据库链接失败')
        return
    }
    app.listen(3000,()=>{
        console.log('3000端口成功监听')
    })
    console.log('数据库链接成功,监听在3000端口')
})
module.exports = app;
