const link = document.querySelector(".more-info");
const popup = document.querySelector(".popup-container");
const close = document.querySelector(".exit-btn")

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("hidden");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("hidden");
});