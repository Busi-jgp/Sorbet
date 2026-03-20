


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("paymentForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Payment successful! Thank you for booking with Sorbet.");
      window.location.href = "index.html";
    });
  }

  const cardInput = document.getElementById("cardNumber");
  if (cardInput) {
    cardInput.addEventListener("input", function () {
      const value = this.value.replace(/\s/g, "");
      const formatted = value.match(/.{1,4}/g);
      if (formatted) this.value = formatted.join(" ");
    });
  }
});

let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  displayCart();
}

function displayCart() {
  let cartDiv = document.getElementById("cart");
  cartDiv.innerHTML = "";

  cart.forEach(item => {
    cartDiv.innerHTML += `<p>${item.name} - R${item.price}</p>`;
  });
}






document.getElementById("whatsappForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let message = document.getElementById("message").value.trim();

  
  let phoneNumber = "27658980344";

  let fullMessage =
    "Sent from Sorbet Website" +
    "Hello, My name is " + name + "\n\n" +
    message + "\n\n" 
     ;

  let encodedMessage = encodeURIComponent(fullMessage);

 
  window.location.href = "https://wa.me/" + phoneNumber + "?text=" + encodedMessage;
});

