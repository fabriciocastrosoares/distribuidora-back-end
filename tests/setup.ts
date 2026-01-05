import prisma from "../src/database/index";
import { pool } from "../src/database/index";

afterAll(async () => {
  await prisma.$disconnect();
  await pool.end();
});
