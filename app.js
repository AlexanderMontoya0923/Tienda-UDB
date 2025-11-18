const cartItemsList = document.getElementById("cartItems");
const cartTotalSpan = document.getElementById("cartTotal");
const clearCartBtn = document.getElementById("clearCart");

// Buscar todos los botones de "Agregar al carrito"
const addButtons = document.querySelectorAll(".add-to-cart");

let cart = []; // Aquí guardamos los productos del carrito

function renderCart() {
    // Limpiar la lista
    cartItemsList.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement("li");

        const nameSpan = document.createElement("span");
        nameSpan.textContent = item.name;

        const priceSpan = document.createElement("span");
        priceSpan.textContent = "$" + item.price.toFixed(2);

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Quitar";
        removeBtn.style.background = "#dc3545";
        removeBtn.style.fontSize = "12px";
        removeBtn.style.padding = "4px 8px";

        removeBtn.addEventListener("click", () => {
            // Eliminar ese producto del carrito
            cart.splice(index, 1);
            renderCart();
        });

        li.appendChild(nameSpan);
        li.appendChild(priceSpan);
        li.appendChild(removeBtn);

        cartItemsList.appendChild(li);

        total += item.price;
    });

    cartTotalSpan.textContent = "$" + total.toFixed(2);
}

// Agregar evento a cada botón
addButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const name = btn.getAttribute("data-name");
        const price = parseFloat(btn.getAttribute("data-price"));

        // Agregar al carrito
        cart.push({ name, price });

        // Volver a dibujar el carrito
        renderCart();
    });
});

// Botón para vaciar el carrito
clearCartBtn.addEventListener("click", () => {
    cart = [];
    renderCart();
});
