import { Request, Response } from "express";
import httpStatus from "http-status";
import * as productService from "../services/product-service.js";
import { CreateProduct } from "../services/product-service.js";
import { UpdateProduct } from "../services/product-service.js";

export async function registerProduct(req: Request, res: Response) {
    const productResult = req.body as CreateProduct;
    await productService.registerProduct(productResult);
    res.sendStatus(httpStatus.CREATED);
};

export async function getProducts(req: Request, res: Response) {
    const products = await productService.getProducts();
    res.send(products);
};

export async function getProductId(req: Request, res: Response) {
    const id = Number(req.params.id);

    const product = await productService.getProductId(id);
    res.send(product);
};

export async function updateProduct(req: Request, res: Response) {
    const id = Number(req.params.id);
    const productResult = req.body as UpdateProduct;

    const updateProduct = await productService.updateProduct(id, productResult);
    res.status(httpStatus.OK).send(updateProduct);
};

export async function deleteProduct(req: Request, res: Response) {
    const id = Number(req.params.id);

    await productService.deleteProduct(id);
    res.sendStatus(httpStatus.OK);
};