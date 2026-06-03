const search = document.getElementById("search");
const addbox = document.getElementById("addInput");
const itemBox = document.getElementById("item-box");
let liElements = document.querySelectorAll("li");
let list = ["Bread", "Milk", "Egg", "Oat"];

function update() {
  itemBox.innerHTML = ``;
  list.forEach((value, index) => {
    itemBox.innerHTML += `<li> ${value} <button i="${index}">DELETE</button></li>`;
  });
}
update();

function add() {
  if (addbox.value.trim() !== "") {
    list.push(addbox.value);
    update();
    addbox.value = "";
  }
}

search.addEventListener("keyup", (e) => {
  let isfound = false;
  searchContent = e.target.value.toLowerCase();
  itemBox.innerHTML = "";
  list.forEach((value, index) => {
    if (value.toLowerCase().includes(searchContent)) {
      itemBox.innerHTML += `<li> ${value} <button i="${index}">DELETE</button></li>`;
      isfound = true;
    }
  });
  if (!isfound) {
    itemBox.textContent = `No such item`;
  }
});

itemBox.addEventListener("click", (e) => {
  if (e.target.tagName == "BUTTON") {
    let elibtn = e.target.getAttribute("i");
    if (elibtn !== null) {
      list.splice(elibtn, 1);
      update();
    }
  }
});
