import { Router } from "express";
import productsRouter from "./product-routes";
import usersRouter from "./user-routes";

const router = Router();

router.use(usersRouter);
router.use(productsRouter);

export default router;