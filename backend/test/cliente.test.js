const request = require("supertest");
const app = require("../index");
const Cliente = require("../models/clientesModels.js");

describe("Esta es la prueba de post /clientes", () => {
  let server;

  beforeAll((done) => {
    // Utiliza un puerto diferente si el 4000 está en uso
    server = app.listen(4001, () => {
      console.log('Servidor iniciado en el puerto 4001 para pruebas');
      done();
    });
  });

  afterAll((done) => {
    server.close(done);
  });

  test("Debería crear un nuevo cliente con éxito", async () => {
    const nuevoCliente = {
      nombre: "Nuevo",
      apellido: "Usuario",
      edad: 30,
      email: "nuevo@usuario.com",
      empresa: "Empresa",
      password: "contraseña",
      telefono: "123456789",
    };

    const response = await request(server)
      .post("/clientes")
      .send(nuevoCliente);

    expect(response.statusCode).toEqual(200);
    expect(response.body.msg).toBe("El registro satisfactorio!");
  });

  describe("Cuando se intenta crear un cliente existente", () => {
    beforeAll(async () => {
      // Elimina cualquier cliente existente con el mismo correo antes de crear uno nuevo
      await Cliente.deleteMany({ email: "clienteexistente@correo.com" });

      // Crea un cliente existente para simular la duplicación
      const clienteExistente = {
        nombre: "Cliente",
        apellido: "Existente",
        edad: 25,
        email: "clienteexistente@correo.com",
        empresa: "Empresa Existente",
        password: "contraseña123",
        telefono: "987654321",
      };
      await Cliente.create(clienteExistente);
    });

    test("Debería retornar un error al intentar crear un cliente existente", async () => {
      const clienteExistente = {
        nombre: "Cliente",
        apellido: "Existente",
        edad: 25,
        email: "clienteexistente@correo.com",
        empresa: "Empresa Existente",
        password: "contraseña123",
        telefono: "987654321",
      };

      const response = await request(server)
        .post("/clientes")
        .send(clienteExistente);

      expect(response.statusCode).toEqual(400);
      expect(response.body.msg).toBe("El cliente ya existe!");
    });
  });

  describe("Validación de campos al crear un cliente", () => {
    test("Debería retornar un error si los campos son vacíos o nulos al crear un cliente", async () => {
      const clienteInvalido = {
        nombre: "",
        apellido: null,
        edad: 30,
        email: "nuevo@usuario.com",
        empresa: "Empresa",
        password: "contraseña",
        telefono: "",
      };

      const response = await request(server)
        .post("/clientes")
        .send(clienteInvalido);

      expect(response.statusCode).toEqual(400);
      expect(response.body.msg).toBe("Los campos no pueden estar vacíos o nulos");
    });
  });
});
