const express=require("express");
const app=express();
app.get("/",function(req,res)
{
    res.send("Hello World");
});
app.get("/contact",function(req,res)
{
    res.send("Contact Me On My G-mail shaiksohailhu7n@gmail.com");
});
app.get("/about",function(req,res)
{
    res.send("Iam Shaik Sohail Hussain Owner Of This Website And Server.");
});
app.listen(3000,function()
{
    console.log("server started on port 3000");
});