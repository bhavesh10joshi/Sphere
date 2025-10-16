const express = require("express");
const mongoose = require("mongoose");
const app = express();
const {StudentRouter} = require("./UserRouter/index");
app.use(express.json());
const cors = require("cors");
app.use(cors());
main();
async function main()
{
    try{
        await mongoose.connect("");
        console.log("Connected");
        app.listen(3000);
    }
    catch(e)
    {
        console.log("Error while Connection : " + e);
    }
}
app.use("/User" , StudentRouter);
