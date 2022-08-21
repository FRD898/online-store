import { makeVar } from "@apollo/client";

export interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
}

export const EmptyProduct:Product = {
    id: -1,
    title: "",
    price: 0.0,
    image: ""
}

export interface ProductsData {
    products: Product[]
}

export interface Cart {
    date: Date;
    productId: number|null;
    price:number;
    numberOfProducts: number;
    productsValue: number;
    shippingCost: number;
    taxes: number;
    total: number;
}

const CartInitialValue: Cart = {
    date: new Date(),
    productId: null,
    price:0.0,
    numberOfProducts: 0.0,
    productsValue: 0.0,
    shippingCost: 0.0,
    taxes: 0.0,
    total: 0.0,
}
export const cartVar = makeVar<Cart>(CartInitialValue);


export interface Order{
    lastNumber:number
}

const initialOrder:Order ={
    lastNumber:0
}

export const orderVar = makeVar<Order>(initialOrder);
