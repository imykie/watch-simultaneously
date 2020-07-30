const request = require("supertest");
const app = require("../app");

describe("Get Home Endpoint", () => {
  it("should get home endpoint", async () => {
    const res = await request(app).get("/");
    // .send({
    //   userId: 1,
    //   title: "test is cool"
    // });
    expect(res.statusCode).toEqual(200);
    // expect(res.body).toHaveProperty("post");
  });
});
