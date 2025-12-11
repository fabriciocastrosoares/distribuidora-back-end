import { Products } from "../protocols/index.js";
import * as productRepository from "../repositories/product-repository.js";

export function registerProduct(product: Products) {
    return productRepository.registerProduct(product);
};

export function getProducts() {
    return productRepository.getProducts();
};