export interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
}

export interface Cart {
    date: Date;
    productsValue: number;
    shippingCost: number;
    taxes: number;
    total: number;
}