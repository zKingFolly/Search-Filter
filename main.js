const search = document.getElementById("search");
const addbox = document.getElementById("addInput");
const itemBox = document.getElementById("item-box");
let list = ["Bread", "milk", "Hypo"];
function add() {
  list.push(addbox.value);
  update();
  addbox.value = "";
}
list.forEach((value) => {
  itemBox.innerHTML += `<li> ${value}</li>`;
});
function update() {
  itemBox.innerHTML = ``;
  list.forEach((value) => {
    itemBox.innerHTML += `<li> ${value}</li>`;
  });
}
