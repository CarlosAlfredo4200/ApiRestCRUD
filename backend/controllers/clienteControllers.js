const Cliente = require("../models/clientesModels.js");
const GeneradorId = require("../helpers/generarId.js");

const CrearCliente = async (req, res) => {

  // evitar registros duplicados

  const { email } = req.body;
  const clienteExistente = await Cliente.findOne({email}); //email:email

  if (clienteExistente) {
    const error = new Error("El cliente ya existe!")
    return res.status(400).json({ msg: error.message });
    
  }
  
  try {
    const cliente = new Cliente(req.body);
    cliente.token = GeneradorId();
    const clienteAlmacenado = await cliente.save();
    res.json({ msg: "El registro satisfactorio!" });
  } catch (error) {
    console.error(error);
     
  }
};


const AutenticarCliente = async (req, res) => {
  const { email, password } = req.body;

  // Comprobar si el usuario existe
  const cliente = await Cliente.findOne({ email });
  if (!cliente) {
    const error = new Error("El cliente no existe");
    return res.status(404).json({ msg: error.message });
  }

  // Comprobar si el cliente esta confirmado
  if (!cliente.confirmado) {
    const error = new Error("Tu Cuenta no ha sido confirmada");
    return res.status(403).json({ msg: error.message });
  }

  // Comprobar su password
  if (await cliente.comprobarPassword(password)) {
    res.json({
      _id: cliente._id,
      nombre: cliente.nombre,
      email: cliente.email,
      token: generarJWT(cliente._id),
    });
  } else {
    const error = new Error("El Password es Incorrecto");
    return res.status(403).json({ msg: error.message });
  }
};

const MostrarClientes = async (req, res, next) => {
  try {
    const clientes = await Cliente.find({});
    res.json(clientes);
  } catch (error) {
    console.error(error);
     
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
  AutenticarCliente,
  MostrarClientes,
  BuscarCliente,
  ActualizarCliente,
  EliminarCliente
};

