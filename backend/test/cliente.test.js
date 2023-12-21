const request = require("supertest");
const app = require("../index");

const testCrearUsuario = {
  nombre: "Felipe",
  apellido: "Guzman",
  edad: 10,
  email: "felipe@correo.com",
  empresa: "Casa",
  password: "123456",
  telefono: "123456789",
};

describe("Esta es la prueba de post /clientes", () => {
  let server;

  beforeAll(() => {
    server = app.listen(); // Levantar el servidor antes de las pruebas
  });

  afterAll((done) => {
    server.close(done); // Cerrar el servidor después de todas las pruebas
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
  
    expect(response.statusCode).toBe(200);
    expect(response.body.msg).toBe("El registro satisfactorio!");
  
  

    
  });
});
