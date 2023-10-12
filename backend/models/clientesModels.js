const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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
            lowercase: true
        },
        telefono: {
            type: String,
            required: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            trim: true
        },
        token: {
            type: String,
        },
        confirmado: {
            type: Boolean,
            default: false,
          },

    },

    {
        timestamps: true,
    }
);

UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.comprobarPassword = async function (passwordFormulario) {
    return await bcrypt.compare(passwordFormulario, this.password);
};




const Cliente = mongoose.model("Clientes", UserSchema);
module.exports = Cliente;