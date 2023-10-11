const Pedido = require("../models/pedidosModels.js");

const CrearPedido = async (req, res, next) => {
  const pedido = new Pedido(req.body);
  try {
    await pedido.save();
    res.json({ msg: "Se agregó un pedido" });
  } catch (error) {
    console.log(error);
    next();
  }
};

const MostrarPedidos = async (req, res, next) => {
  try {
    const pedido = await Pedido.find({}).populate("cliente").populate({
      path: "pedido.producto",
      model: "Productos",
    });
    res.json({ pedido });
  } catch (error) {
    console.error(error);
    next();
  }
};

const BuscarPedido = async (req, res, next) => {
  try {
    const { id } = req.params;
    const pedido = await Pedido.findById(id).populate("cliente").populate({
      path: "pedido.producto",
      model: "Productos",
    });

    if (!pedido) {
      res.json({ msg: "Pedido no encontrado!" });
      return next();
    }
    res.json({ pedido });
  } catch (error) {
    console.error(error);
    next();
  }
};

const ActualizarPedido = async (req, res, next) => {
  try {
    const { id } = req.params;
    const pedido = await Pedido.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    })
      .populate("cliente")
      .populate({
        path: "pedido.producto",
        model: "Productos",
      });

    res.json(pedido);
  } catch (error) {
    console.log(error);
    next();
  }
};

const EliminarPedido = async (req, res, next) => {
  const { id } = req.params;
  const pedido = await Pedido.findById(id);

  if (!pedido) {
    const error = new Error("Pedido no encontrado");
    return res.status(404).json({ msg: error.message });
  }

  try {
    await pedido.deleteOne();
    res.json({ msg: "Pedido eliminado correctamente" });
  } catch (error) {
    console.log(error);
    next();

  }
};

module.exports = {
  CrearPedido,
  MostrarPedidos,
  BuscarPedido,
  ActualizarPedido,
  EliminarPedido,
};
