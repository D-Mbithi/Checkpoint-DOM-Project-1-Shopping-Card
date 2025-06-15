document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".fa-heart");
  const carts = document.querySelectorAll(".card-body");
  const deleteButtons = document.querySelectorAll(".fa-trash-alt");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Change background of the clicked button
      button.style.color = "steelblue";
    });
  });

  let total = document.querySelector(".total");
  let total_price = parseInt(total.textContent);

  carts.forEach((card) => {
    const increase = card.querySelector(".fa-plus-circle");
    const decrease = card.querySelector(".fa-minus-circle");
    let quantity = parseInt(card.querySelector(".quantity").textContent);
    const price = parseInt(card.querySelector(".unit-price").textContent);
    let amount = 0;

    increase.addEventListener("click", () => {
      quantity++;
      card.querySelector(".quantity").textContent = quantity;
      amount = quantity * price;
    });

    decrease.addEventListener("click", () => {
      if (quantity > 0) {
        quantity--;
        card.querySelector(".quantity").textContent = quantity;
      }
      amount = quantity * price;
    });

    console.log(amount);
  });

  deleteButtons.forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", () => {
      const item = deleteBtn.closest(".product");
      console.log(item);
      if (item) {
        item.remove();
      }
    });
  });
});
