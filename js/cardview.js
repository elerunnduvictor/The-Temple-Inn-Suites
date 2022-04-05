const cardView = document.querySelector("#cardbutton");
const listView = document.querySelector("#listbutton");

cardView.addEventListener("click", () => {
    cards.classList.replace("listview", "cardview")
});
listView.addEventListener("click", () => {
    cards.classList.replace("cardview", "listview")
});