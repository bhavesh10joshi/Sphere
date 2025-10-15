const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const {z} = require("zod");
const bcrypt = require("bcrypt");
const app = express();
app.use(express.json());
const JWT_SECRET="1bec47b2ae8818abe006b1b189d0d7c3";
app.post("/user/signUp" , function(req,res)
{
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    
});
app.post("/user/LogIn" , function(req , res)
{

});
app.get("/user/profile" , function(req,res)
{

});
app.post("/user/new-post" , function(req,res)
{

});

