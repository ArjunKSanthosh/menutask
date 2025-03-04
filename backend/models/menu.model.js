import mongoose from "mongoose";
const menuSchema=new mongoose.Schema({
    menu:{type:String},
    itemName:{type:String},
    description:{type:String},
    price:{type:Number},
})