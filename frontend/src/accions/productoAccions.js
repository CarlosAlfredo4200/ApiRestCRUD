import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
  
  } from '../types';
  
  
  
  ///Crear nuevos productos
  export function crearNuevoProductoActions(producto) {
    return (dispatch) => {
      dispatch(agregarProdutos());
  
      try {
        dispatch(agregarProdutoExitoso(producto));
      } catch (error) {
        dispatch(agregarProdutoError(true));
  
      }
    }
  }
  
  const agregarProdutos = () => ({
    type: AGREGAR_PRODUCTO
  })
  const agregarProdutoExitoso = (producto) => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
  })
  const agregarProdutoError = (estado) => ({
    type: AGREGAR_PRODUCTO_ERROR
  })