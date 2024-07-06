type Product = {
    name: String;
    price: number;
    category: string;

}

let products: Product[] = [

    { name: 'Labtop', price: 50000, category: 'Electronics' },
    { name: 'Shirt', price: 1200, category: 'Apparek' },
    { name: 'Coffer', price: 2500, category: 'Appliances' },

]
//bulid function
function filterProductByPrice(Products:Product[],minPrice:number){
    return Products.filter(product=>product.price>minPrice);

}
//bulid function discount product 10 %
function discountProduct(Products:Product[]):Product[]{
    return products.map(product=>({...product,price:product.price * 0.9}));
    
}


//call function
let filterProduct = filterProductByPrice(products,2000);
let discountProducts = discountProduct(filterProduct);

//console.log(filterProduct);
console.log(discountProducts)