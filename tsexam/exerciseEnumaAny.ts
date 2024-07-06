enum ProductStatus{
    Available = "Available",
    OutOfStock = "Out of Stock",
    Discontinued = "Discontinued"
}

let Products: any[] =[
    { name: "Laptop", status: ProductStatus.Available, price: 1200},
    { name : "Smartphone", status: ProductStatus.OutOfStock, price: 700},
    { name : "Tablet", status: ProductStatus.Discontinued, price: 300},
];
//ฟั่งชันสำหรับเเสดงข้อมูลสิน้า
function displayProductDetails(Products:any[]){
    Products.forEach(product =>{
        console.log(`Product:${product.name},ProductStatus,${product.status} ,price${product.price}`)
    }

    );
}
displayProductDetails(Products);