import Pedido from "../models/pedidosModels.js";

 
 
const CrearPedido = async (req, res) => {
    const pedido = new Pedido(req.body);
    try {
        await pedido.save();
        res.json({msg: 'Se agregó un pedido'});
      } catch (error) {
        console.log(error);
      }
};

const MostrarPedido = async (req, res) => {
  try {
    const producto = await Pedido.find({});
    res.send({ producto });
     
  } catch (error) {
    console.error(error);
  }
};

const BuscarPedido = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await pedido.findById(id);

    if (!data) {
      res.json({ msg: "Ese pedido no existe" });
    }
    res.send({ data });
  } catch (error) {
    console.error(error);
  }
};

const ActualizarPedido = async (req, res, next) => {
  const { id } = req.params;

  const pedido = await pedido.findById(id);

  if (!pedido) {
    const error = new Error("pedido No Encontrado!");
    return res.status(404).json({ msg: error.message });
  }

   
  pedido.nombre = req.body.nombre || pedido.nombre;
  pedido.precio = req.body.precio || pedido.precio;
  pedido.filename = req.body.filename || pedido.filename;
  pedido.url = req.body.url || pedido.url;
  pedido.descripcion = req.body.descripcion || pedido.descripcion;

  try {
    const pedidoAlmacenado = await pedido.save();
    res.json(pedidoAlmacenado);
    res.send({ msg: "Se actualizo correctamente el pedido" });
  } catch (error) {
    console.log(error);
  }
};

const EliminarPedido = async (req, res) => {
  const { id } = req.params;

  const pedido = await pedido.findById(id);

  if (!pedido) {
    const error = new Error("No Encontrado");
    return res.status(404).json({ msg: error.message });
  }

  try {
    await pedido.deleteOne();
    res.json({ msg: "pedido Eliminado correctamente" });
  } catch (error) {}
  console.log(error);
};

export {
  CrearPedido,
  MostrarPedido,
  BuscarPedido,
  ActualizarPedido,
  EliminarPedido,
};
