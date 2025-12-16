import prisma from "../database/index.js";
import { CreateProduct } from "../services/product-service.js";
import { UpdateProduct } from "../services/product-service.js";


export async function registerProduct(product: CreateProduct) {
  const newProduct = await prisma.product.create({
    data: product
  });
  return newProduct;
};

export async function getProducts() {
  const products = await prisma.product.findMany();
  return products;
};

export async function getProductId(id: number) {
  const product = await prisma.product.findUnique({
    where: { id }
  });
  return product;
};

export async function updateProduct(id: number, product: UpdateProduct) {
  const productUpdate = await prisma.product.update({
    where: { id },
    data: product
  });
  return productUpdate;
};

export async function deleteProduct(id: number) {
  const productResult = await prisma.product.delete({
    where: { id }
  });
  return productResult;
};