const app = require('../app');
const request = require('supertest');

describe("[APP] probando test", () => {
  test("Esto deberia de retornar un status 200 OK", async () => {
    const response = await request(app).post("/clientes").send({
      nombre: "Felipea",
      apellido: "Montoyaa",
      empresa: "escuela",
      email: "felipe2a@correo.com",
      telefono: "4421063",
    });

    expect(response.statusCode).toEqual(200);
  });
});
