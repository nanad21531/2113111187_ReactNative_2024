var ProductStatus;
(function (ProductStatus) {
    ProductStatus["Available"] = "Available";
    ProductStatus["OutOfStock"] = "Out of Stock";
    ProductStatus["Discontinued"] = "Discontinued";
})(ProductStatus || (ProductStatus = {}));
var Products = [
    { name: "Laptop", status: ProductStatus.Available, price: 1200 },
    { name: "Smartphone", status: ProductStatus.OutOfStock, price: 700 },
    { name: "Tablet", status: ProductStatus.Discontinued, price: 300 },
];
//ฟั่งชันสำหรับเเสดงข้อมูลสิน้า
function displayProductDetails(Products) {
    Products.forEach(function (product) {
        console.log("Product:".concat(product.name, ",ProductStatus,").concat(product.status, " ,price").concat(product.price));
    });
}
displayProductDetails(Products);
