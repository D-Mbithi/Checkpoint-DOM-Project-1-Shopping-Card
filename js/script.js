document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".fa-heart");
  const carts = document.querySelectorAll(".product");
  const deleteButtons = document.querySelectorAll(".fa-trash-alt");
  let total = parseInt(
    document.querySelector(".total").textContent.replace(" $", "")
  );

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Change background of the clicked button
      button.classList.toggle("like-color");
    });
  });

  carts.forEach((card) => {
    const price = parseInt(card.querySelector(".unit-price").textContent);
    const decrease = card.querySelector(".fa-minus-circle");
    const increase = card.querySelector(".fa-plus-circle");
    console.log(total);
    let quantity = parseInt(card.querySelector(".quantity").textContent);

    increase.addEventListener("click", () => {
      quantity++;
      total += price;
      card.querySelector(".quantity").textContent = quantity;
      document.querySelector(".total").textContent = `${total} $`;
    });

    decrease.addEventListener("click", () => {
      if (quantity > 0) {
        quantity--;
        total -= price;
        card.querySelector(".quantity").textContent = quantity;
        document.querySelector(".total").textContent = `${total} $`;
      }
    });
  });

  deleteButtons.forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", () => {
      const item = deleteBtn.closest(".product");
      const price = parseInt(
        item.querySelector(".unit-price").textContent.replace(" $", "")
      );
      const quantity = parseInt(item.querySelector(".quantity").textContent);

      let amount = price * quantity;
      if (item) {
        total -= amount;
        document.querySelector(".total").textContent = `${total} $`;
        item.remove();
      }
    });
  });
});
