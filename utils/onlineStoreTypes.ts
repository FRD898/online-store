import { makeVar } from "@apollo/client";

export interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
}

export interface ProductsData {
    products: Product[]
}

export interface Cart {
    date: Date;
    productId: number|null;
    numberOfProducts: number;
    productsValue: number;
    shippingCost: number;
    taxes: number;
    total: number;
}

const CartInitialValue: Cart = {
    date: new Date(),
    productId: null,
    numberOfProducts: 0,
    productsValue: 0.0,
    shippingCost: 0.0,
    taxes: 0.0,
    total: 0.0,
}

export const cartVar = makeVar<Cart>(CartInitialValue);