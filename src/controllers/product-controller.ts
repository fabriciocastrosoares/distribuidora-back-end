import { Request, Response } from "express";
import httpStatus from "http-status";
import * as productService from "../services/product-service";
import { CreateProduct } from "../services/product-service";
import { UpdateProduct } from "../services/product-service";

export async function registerProduct(req: Request, res: Response) {
    const productResult = req.body as CreateProduct;
    try {
        await productService.registerProduct(productResult);
        res.sendStatus(httpStatus.CREATED);
    } catch (error) {
        console.log(error);
    }

};

export async function getProducts(req: Request, res: Response) {
    try {
        const products = await productService.getProducts();
        res.send(products);
    } catch (error) {
        console.log(error);
    }
};

export async function getProductId(req: Request, res: Response) {
    const id = Number(req.params.id);
    try {
        const product = await productService.getProductId(id);
        res.send(product);
    } catch (error) {
        console.log(error);
    }
};

export async function updateProduct(req: Request, res: Response) {
    const id = Number(req.params.id);
    const productResult = req.body as UpdateProduct;
    try {
        const updateProduct = await productService.updateProduct(id, productResult);
        res.status(httpStatus.OK).send(updateProduct);
    } catch (error) {
        console.log(error);
    }
};

export async function deleteProduct(req: Request, res: Response) {
    const id = Number(req.params.id);
    try {
        await productService.deleteProduct(id);
        res.sendStatus(httpStatus.OK);
    } catch (error) {
        console.log(error);
    }

};