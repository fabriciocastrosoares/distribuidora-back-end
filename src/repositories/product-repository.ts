
import { Products } from "../protocols/index.js";

const results: Products[] = [
  { name: "Cerveja Amstel", description: "super gelada", stock: 120, available: true },
  { name: "Cerveja Heineken", description: "super gelada", stock: 100, available: true },
  { name: "Cerveja Eisenban", description: "super gelada", stock: 140, available: true },
  { name: "Cerveja Korona", description: "super gelada", stock: 80, available: true }
];

export function registerProduct(product: Products) {
  results.push(product);
  return product;
}

export function getProducts() {
  return results;
}
