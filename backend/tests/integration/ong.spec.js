const request = require("supertest");
const app = require("../../src/app");

describe("ONG", () => {
  it("should be able to create a new ONG", async () => {
    const response = await request(app).post("/ongs").send({
      name: "AniMarco 2",
      email: "animarco@aeio.com",
      whatsapp: "912345678",
      city: "Marco de Canaveses",
      uf: "PT",
    });

    console.log(response.body);
  });
});
