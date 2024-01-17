import mongoose, { mongo } from "mongoose";

const productSchema=mongoose.Schema({
    id:{
        type:String,
        required:[true,"Please add the product id"],
    },
    name:{
        type:String,
        required:[true,"Please add the product name"],
    },
    description:{
        type:String,
        required:[true,"Please add the correct description"],
    },
    price:{
        type:String,
        required:[true,"Please enter the price"],
    }
},
{
    timestamps:true,
}
);
export default mongoose.model("Product", productSchema);