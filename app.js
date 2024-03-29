const express = require('express');
const path = require('path');

const app = express();

app.use('/static', express.static(__dirname+'/src/public'));


app.listen(3080, () => console.log("servidor 3080 funcionando"));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "/src/views/home.html")
)});

app.get("/register",(req,res)=>{
    res.sendFile(path.join(__dirname, "/src/views/register.html")
)});

app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname, "/src/views/login.html")
)});

app.get("/shop",(req,res)=>{
    res.sendFile(path.join(__dirname, "/src/views/shop.html")
)});

app.get("/bag-shop",(req,res)=>{
    res.sendFile(path.join(__dirname, "/src/views/productCart.html")
)});

app.get("/product-detail",(req,res)=>{
    res.sendFile(path.join(__dirname, "/src/views/productDetail.html")
)});