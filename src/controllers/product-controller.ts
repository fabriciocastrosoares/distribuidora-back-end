import { Request, Response } from "express";
import  httpStatus from "http-status";
import * as productService from "../services/product-service.js";
import { Products } from "../protocols/index.js";

export function registerProduct(req: Request, res: Response) {
    const productResult = req.body as Products;
    productService.registerProduct(productResult);
    res.sendStatus(httpStatus.CREATED);
};

export function getProducts(req: Request, res: Response) {
    const products = productService.getProducts();
    res.send(products);
};