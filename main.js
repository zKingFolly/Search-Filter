const search = document.getElementById("search");
const addbox = document.getElementById("addInput");
const itemBox = document.getElementById("item-box");
let liElements = document.querySelectorAll("li");

let list = ["Bread", "Milk", "Egg", "Oat"];
list.forEach((value) => {
  itemBox.innerHTML += `<li> ${value}</li>`;
});
function add() {
  list.push(addbox.value);
  update();
  addbox.value = "";
}
function update() {
  itemBox.innerHTML = ``;
  list.forEach((value) => {
    itemBox.innerHTML += `<li> ${value}</li>`;
  });
}
search.addEventListener("keyup", (e) => {
  searchContent = e.target.value.toLowerCase();
  itemBox.innerHTML = "";
  list.forEach((value, index) => {
    if (value.toLowerCase().includes(searchContent)) {
      itemBox.innerHTML += `<li> ${value}</li>`;
    }
  });
});
