import mongoose from  "mongoose";
import bcrypt from  "bcrypt";

const UserSchema = mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
            trim: true,
        },
        apellido: {
            type: String,
            required: true,
            trim: true,
        },
        empresa: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase:true
        },
        telefono: {
            type: String,
            required: true,
            trim: true,
        },

    },

    {
        timestamps: true,
    }
);


 
  


const Cliente = mongoose.model("Clientes", UserSchema);
export default  Cliente;