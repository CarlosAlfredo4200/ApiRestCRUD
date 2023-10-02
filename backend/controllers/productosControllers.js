import Productos from "../models/productosModels.js";

const PUBLI_URL = process.env.PUBLI_URL;

// Agrega nuevos productos
const CrearProducto = async (req, res) => {
  try {
    const { body, file } = req;
    const fileData = {
      nombre: body.nombre,
      precio: body.precio,
      filename: file.filename,
      descripcion: body.descripcion,
      url: `${PUBLI_URL}/${file.filename}`,
    };
    const data = await Productos.create(fileData);
    res.send({ msg: "Se agrego correctamente el producto" });
  } catch (error) {
    console.error(error);
  }
};

const MostrarProductos = async (req, res) => {
  try {
    const producto = await Productos.find({});
    res.send({ producto });
     
  } catch (error) {
    console.error(error);
  }
};

const BuscarProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Productos.findById(id);

    if (!data) {
      res.json({ msg: "Ese producto no existe" });
    }
    res.send({ data });
  } catch (error) {
    console.error(error);
  }
};

const ActualizarProducto = async (req, res, next) => {
  const { id } = req.params;

  const producto = await Productos.findById(id);

  if (!producto) {
    const error = new Error("Producto No Encontrado!");
    return res.status(404).json({ msg: error.message });
  }

   
  producto.nombre = req.body.nombre || producto.nombre;
  producto.precio = req.body.precio || producto.precio;
  producto.filename = req.body.filename || producto.filename;
  producto.url = req.body.url || producto.url;
  producto.descripcion = req.body.descripcion || producto.descripcion;

  try {
    const productoAlmacenado = await producto.save();
    res.json(productoAlmacenado);
    res.send({ msg: "Se actualizo correctamente el producto" });
  } catch (error) {
    console.log(error);
  }
};

const EliminarProducto = async (req, res) => {
  const { id } = req.params;

  const producto = await Productos.findById(id);

  if (!producto) {
    const error = new Error("No Encontrado");
    return res.status(404).json({ msg: error.message });
  }

  try {
    await producto.deleteOne();
    res.json({ msg: "producto Eliminado correctamente" });
  } catch (error) {}
  console.log(error);
};

export {
  CrearProducto,
  MostrarProductos,
  BuscarProducto,
  ActualizarProducto,
  EliminarProducto,
};
