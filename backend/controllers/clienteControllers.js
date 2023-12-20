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
  MostrarClientes,
  MostrarClientesMayoresEdad,
  MostrarClientesEdadesYApellido,
  BuscarCliente,
  ActualizarCliente,
  EliminarCliente
};

