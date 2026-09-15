// List of orders
let orders = [
    {
        customer: "Ali",
        product: "Laptop",
        quantity: 2,
        price: 60000,
        status: "Pending"
    },
    {
        customer: "Ahmed",
        product: "Mouse",
        quantity: 5,
        price: 1500,
        status: "Shipped"
    },
    {
        customer: "Ali",
        product: "Keyboard",
        quantity: 3,
        price: 3000,
        status: "Delivered"
    },
    {
        customer: "Sara",
        product: "Laptop",
        quantity: 1,
        price: 60000,
        status: "Delivered"
    },
    {
        customer: "Ahmed",
        product: "Keyboard",
        quantity: 2,
        price: 3000,
        status: "Pending"
    }
];


// 1. Calculate Order Total
function orderTotal(order) {
    let total = order.quantity * order.price;
    return total;
}


// 2. Find Customer Spending
function customerSpending(name) {
    let total = 0;

    for (let i = 0; i < orders.length; i++) {
        if (orders[i].customer == name) {
            total = total + orderTotal(orders[i]);
        }
    }

    return total;
}


// 3. Filter Orders
function filterOrders(status) {
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].status == status) {
            console.log(orders[i]);
        }
    }
}


// 4. Find Best-Selling Product
function bestSellingProduct() {
    let productNames = [];
    let productQuantities = [];

    for (let i = 0; i < orders.length; i++) {
        let product = orders[i].product;
        let found = false;

        for (let j = 0; j < productNames.length; j++) {
            if (productNames[j] == product) {
                productQuantities[j] =
                    productQuantities[j] + orders[i].quantity;
                found = true;
            }
        }

        if (found == false) {
            productNames.push(product);
            productQuantities.push(orders[i].quantity);
        }
    }

    let highest = productQuantities[0];
    let bestProduct = productNames[0];

    for (let i = 1; i < productQuantities.length; i++) {
        if (productQuantities[i] > highest) {
            highest = productQuantities[i];
            bestProduct = productNames[i];
        }
    }

    return bestProduct;
}


// 5. Apply Discount
function applyDiscount(order) {
    let total = orderTotal(order);
    let finalAmount = total;

    if (total > 10000) {
        finalAmount = total - (total * 0.10);
    }

    return finalAmount;
}


// 6. Find Highest Order
function highestOrder() {
    let highestAmount = 0;
    let customerName = "";

    for (let i = 0; i < orders.length; i++) {
        let finalAmount = applyDiscount(orders[i]);

        if (finalAmount > highestAmount) {
            highestAmount = finalAmount;
            customerName = orders[i].customer;
        }
    }

    return customerName;
}


// 7. Display Summary
function displaySummary() {
    for (let i = 0; i < orders.length; i++) {

        let originalTotal = orderTotal(orders[i]);
        let finalAmount = applyDiscount(orders[i]);
        let discount = originalTotal - finalAmount;

        console.log("Customer: " + orders[i].customer);
        console.log("Product: " + orders[i].product);
        console.log("Original Total: Rs. " + originalTotal);
        console.log("Discount: Rs. " + discount);
        console.log("Final Amount: Rs. " + finalAmount);
        console.log("-------------------------");
    }
}


// Function calls

console.log("Order Total:");
console.log(orderTotal(orders[0]));

console.log("Ali's Total Spending:");
console.log(customerSpending("Ali"));

console.log("Pending Orders:");
filterOrders("Pending");

console.log("Best Selling Product:");
console.log(bestSellingProduct());

console.log("Final Amount of First Order:");
console.log(applyDiscount(orders[0]));

console.log("Customer with Highest Order:");
console.log(highestOrder());

console.log("Complete Order Summary:");
displaySummary();