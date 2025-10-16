const express = require("express");
const { Router } = require("express");
const mongoose = require("mongoose");
const StudentRouter = Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { z } = require("zod");
const {UserModel , PostsModel , CommentsModel , LikesModel , FollowersModel , FollowingModel} = require("../mongodb");
const USER_JWT_SECRET="1bec47b2ae8818abe006b1b189d0d7c3";
StudentRouter.use(express.json());

StudentRouter.post("/SignUp" , async function(req,res)
{
    const ZodObject = z.object({
        Username : z.string() , 
        Password : z.string().max(5)
    });
    const zsafeparse = ZodObject.safeParse(req.body);
    if(zsafeparse)
    {
        const Username = req.body.Username;
        const Password = req.body.Password;
        const hashedpassword = await bcrypt.hash(Password , 5);
        if(hashedpassword)
        {
            try{

            }
            catch(e)
            {
                
            }
        }
        else
        {

        }
    }
    else
    {

    }
});

StudentRouter.post("/SignIn" , function(req,res)
{

});

module.exports = {
    StudentRouter : StudentRouter
};

