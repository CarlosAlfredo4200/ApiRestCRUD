const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
 
const Schema = mongoose.Schema;

const PedidosSchema = mongoose.Schema(
    {
        cliente: {
            type: Schema.ObjectId,
            ref: 'Clientes'      
        },
        pedido:[{
            producto: {
                type: Schema.ObjectId,
                ref:'Productos'
            },
            cantidad: Number
        }],
        
         total: {
            type: Number
         }
        
    },

    {
        timestamps: true,
    }
);



const Pedido = mongoose.model("Pedidos", PedidosSchema);
module.exports =  Pedido;