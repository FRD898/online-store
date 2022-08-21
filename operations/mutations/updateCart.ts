import { cartVar } from "../../utils/onlineStoreTypes";

export const Update_Cart= (productId:number|null, productPrice:number, amount:number)=>{
    console.log("llega",productId, productPrice, amount);
    
    //Rule 1 - Delivery Date
    let deliveryDate:Date= new Date();
    deliveryDate.getDay()>=4?
    deliveryDate.setDate(deliveryDate.getDate() + 7 - deliveryDate.getDay()):
    deliveryDate.setDate(deliveryDate.getDate() + 1);

    //Rule 2 - Pricing
    let products = productPrice*amount;
    let shippingCost = 0.1*products;
    let taxes = 0.18*products;
    let total = products + shippingCost + taxes;

    console.log("sale",deliveryDate,productId, productPrice, amount, products,shippingCost,taxes,total);
    

    cartVar({
        date: deliveryDate,
        productId: productId,
        price:productPrice,
        numberOfProducts: amount,
        productsValue: products,
        shippingCost: shippingCost,
        taxes: taxes,
        total: total,
    })
}

