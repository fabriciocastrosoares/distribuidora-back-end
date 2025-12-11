import { Router } from "express"; 
import * as productsController from "../controllers/product-controller.js"



const productsRouter = Router(); 

productsRouter.get("/products", productsController.getProducts); 
productsRouter.post("/products", productsController.registerProduct); 

export default productsRouter;
