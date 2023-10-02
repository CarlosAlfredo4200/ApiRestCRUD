import mongoose from "mongoose";
import bcrypt from "bcrypt";

const ProductSchema = mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
            trim: true,
        },
        precio: {
            type: Number,
            required: true,
            trim: true,
        },
        filename: {
            type: String,
            // required: true,
             
        },
        descripcion: {
            type: String,
            // required: true,
             
        },
        url: {
            type: String,
            // required: true,
             
        },
        
    },

    {
        timestamps: true,
    }
);



const Producto = mongoose.model("Productos", ProductSchema);
export default Producto;