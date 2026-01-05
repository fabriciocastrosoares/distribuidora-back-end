import { Product } from "../generated/prisma/client";
import * as productRepository from "../repositories/product-repository";

export type CreateProduct = Omit<Product, "id">;
export type UpdateProduct = CreateProduct;

export function registerProduct(product: CreateProduct) {
    return productRepository.registerProduct(product);
};

export async function getProducts() {
    return await productRepository.getProducts();
};

export async function getProductId(id: number) {
    return await productRepository.getProductId(id);
};

export async function updateProduct(id: number, product: UpdateProduct) {
    return await productRepository.updateProduct(id, product);
};

export async function deleteProduct(id: number) {
    return await productRepository.deleteProduct(id);
};
