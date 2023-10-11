const Cliente = require("../models/clientesModels.js");

const CrearCliente = async (req, res, next) => {
  const cliente = new Cliente(req.body);

  try {
    await cliente.save();
    res.json({ msg: "El registro satisfactorio!" });
  } catch (error) {
    console.error(error);
    next();
  }
};

const MostrarClientes = async (req, res, next) => {
  try {
    const clientes = await Cliente.find({});
    res.json(clientes);
  } catch (error) {
    console.error(error);
    next();
  }
};

const BuscarCliente = async (req, res, next) => {
  try {
    const cliente = await Cliente.findById(req.params.id);
    if (!cliente) {
      res.json({ msg: "El cliente no existe!" });
      return next();
    }
    res.json(cliente);
  } catch (error) {
    console.error(error);
    next();
  }
};

const ActualizarCliente = async (req, res, next) => {
  try {
    const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
     
    });
    res.json(cliente);
  } catch (error) {
    console.error(error);
    next();
  }
};

const EliminarCliente = async (req, res, next) => {
  try {
    await Cliente.findByIdAndDelete(req.params.id);
    res.json({ msg: "El cliente fue eliminado!" });
  } catch (error) {
    console.error(error);
    next();
  }
};

module.exports = {
  CrearCliente,
  MostrarClientes,
  BuscarCliente,
  ActualizarCliente,
  EliminarCliente
};

