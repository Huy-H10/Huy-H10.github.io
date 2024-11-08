let cart = {};

function addToCart(productId) {
    if (cart[productId]) {
        cart[productId]++;
    } else {
        cart[productId] = 1;
    }
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = '';
    let total = 0;
    for (let id in cart) {
        const quantity = cart[id];
        const productElement = document.querySelector(`.product[data-id="${id}"]`);
        const productName = productElement.querySelector("h3").textContent;
        const productPrice = parseInt(productElement.querySelector("p").textContent.replace(/[^0-9]/g, ''));
        
        total += productPrice * quantity;
        
        const item = document.createElement("div");
        item.textContent = `${productName} x ${quantity} - ${productPrice * quantity}₫`;
        cartItems.appendChild(item);
    }
    document.getElementById("total").textContent = `Tổng: ${total}₫`;
}

function checkout() {
    if (Object.keys(cart).length === 0) {
        alert("Giỏ hàng của bạn đang trống!");
    } else {
        alert("Cảm ơn bạn đã mua hàng!");
        cart = {};
        updateCart();
    }
}
