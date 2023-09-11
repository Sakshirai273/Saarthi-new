const express=require('express');
const app =express();
const port=5050;
const fs=require('fs');
app.get('/api',(req,res)=>{
    const data = fs.readFileSync(`${__dirname}/userApi/userApi.json`, "utf-8");
    const orgdata = JSON.parse(data);
    res.send(orgdata);
});
app.listen(port,()=>{
    console.log("server is connected on port 5050");
});