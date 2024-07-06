var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var products = [
    { name: 'Labtop', price: 50000, category: 'Electronics' },
    { name: 'Shirt', price: 1200, category: 'Apparek' },
    { name: 'Coffer', price: 2500, category: 'Appliances' },
];
//bulid function
function filterProductByPrice(Products, minPrice) {
    return Products.filter(function (product) { return product.price > minPrice; });
}
//bulid function discount product 10 %
function discountProduct(Products) {
    return products.map(function (product) { return (__assign(__assign({}, product), { price: product.price * 0.9 })); });
}
//call function
var filterProduct = filterProductByPrice(products, 2000);
var discountProducts = discountProduct(filterProduct);
//console.log(filterProduct);
console.log(discountProducts);
