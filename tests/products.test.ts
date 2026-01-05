import app from "../src/app";
import prisma from "../src/database";
import supertest from "supertest";

const api = supertest(app)

beforeEach(async() => {
    await prisma.product.deleteMany();
});

describe("GET /products", () => {
    it("should return all products", async () => {
        await prisma.product.create({
            data: {
                name: "cerveja",
                description: "super gelada",
                stock: 100,
                available: true
            }
        });
        await prisma.product.create({
            data: {
                name: "vodka",
                description: "Russa",
                stock: 10,
                available: true
            }
        });

        const { body, status } = await api.get("/products");

        expect(status).toBe(200);
        expect(body).toHaveLength(2);
    });

});

// describe("Post /products", () => {
//     it("should return all products", () => {

//     });
// });