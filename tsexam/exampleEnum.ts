//กำหนดตัวเเปล Enum 
enum OrderStatus {
    Pending = "Pending",
    Shipped = "Shipped",
    Cancelled = "Cancelled"
}
//สร้างฟั่งชัน
function displayOrderStatus(status: OrderStatus) {
    switch (status) {
        case OrderStatus.Pending:
            console.log("Your order is pending.");
            break;

        case OrderStatus.Shipped:
            console.log("Your order has been shipped.");
            break;

        case OrderStatus.Cancelled:
            console.log("Your order has been Cancelled.");
            break;

        default:
            console.log("Unknown order status.")
    }

}//end of function
//test function 
displayOrderStatus(OrderStatus.Shipped)
displayOrderStatus(OrderStatus.Cancelled)