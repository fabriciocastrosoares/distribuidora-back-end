import { Router } from "express"; 
import * as productsController from "../controllers/product-controller"

const productsRouter = Router(); 

productsRouter.get("/products", productsController.getProducts);
productsRouter.get("/products/:id", productsController.getProductId)
productsRouter.post("/products", productsController.registerProduct);
productsRouter.put("/products/:id", productsController.updateProduct)
productsRouter.delete("/products/:id", productsController.deleteProduct)

export default productsRouter;
