const modalPrice = document.querySelector(".open-price");
const modalWindow = document.querySelector(".modal-window");
const buttonClose = document.querySelector(".close");

modalPrice.addEventListener("click", function () {
  modalWindow.classList.add("is-open");
  document.body.style.overflow = "hidden";
});
buttonClose.addEventListener("click", function () {
  modalWindow.classList.remove("is-open");
  document.body.style.overflow = " ";
});
