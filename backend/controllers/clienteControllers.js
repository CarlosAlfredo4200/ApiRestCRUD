const Cliente = require("../models/clientesModels.js");
const GeneradorId = require("../helpers/generarId.js");

const CrearCliente = async (req, res) => {
  // Evitar registros duplicados
  const { email, nombre, apellido, empresa, password, telefono } = req.body;

  // Verificar si algún campo requerido está vacío o nulo
  if (!nombre || !apellido || !email || !empresa || !password || !telefono) {
    return res.status(400).json({ msg: "Los campos no pueden estar vacíos o nulos" });
  }

  try {
    const clienteExistente = await Cliente.findOne({ email });

    if (clienteExistente) {
      return res.status(400).json({ msg: "El cliente ya existe!" });
    }

    const cliente = new Cliente(req.body);
    cliente.token = GeneradorId();
    const clienteAlmacenado = await cliente.save();
    return res.json({ msg: "El registro satisfactorio!" });
  } catch (error) {
    console.error(error);
    // Manejar el error si ocurre durante el proceso de creación del cliente
    return res.status(500).json({ msg: "Hubo un error al procesar la solicitud" });
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


const MostrarClientesMayoresEdad = async (req, res, next) => {
  try {
    // Filtrar los clientes con edad mayor a 18
    const clientesMayores = await Cliente.find({ edad: { $gt: 18 } }); // $gt (greater than) para encontrar edades mayores a 18
    res.json(clientesMayores);
  } catch (error) {
    console.error(error);
    next();
  }
};

const MostrarClientesEdadesYApellido = async (req, res, next) => {
  try {
    const { edadMinima, edadMaxima, apellido } = req.params; // Obtener las edades mínima, máxima y apellido de los parámetros

    // Verificar si las edades mínima y máxima son números
    if (isNaN(edadMinima) || isNaN(edadMaxima)) {
      return res.status(400).json({ message: 'Las edades deben ser números válidos.' });
    }

    // Convertir las edades a números enteros
    const edadMin = parseInt(edadMinima);
    const edadMax = parseInt(edadMaxima);

    let query = { edad: { $gte: edadMin, $lte: edadMax } }; // Inicializar la consulta con el rango de edades

    // Verificar si se proporcionó el parámetro de apellido
    if (apellido && apellido.toLowerCase() === 'dias') {
      query.apellido = 'Dias'; // Agregar condición para el apellido "Dias"
    }

    // Filtrar los clientes según las condiciones proporcionadas
    const clientesEnRango = await Cliente.find(query);
    res.json(clientesEnRango);
  } catch (error) {
    console.error(error);
    next(error);
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
  MostrarClientesMayoresEdad,
  MostrarClientesEdadesYApellido,
  BuscarCliente,
  ActualizarCliente,
  EliminarCliente
};

