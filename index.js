let myLeads = [];
let inputEl = document.getElementById("input-el");
let inputBtn = document.getElementById("input-btn");
let ulEl = document.getElementById("ul-el")

inputBtn.addEventListener('click', function() {
    myLeads.push(inputEl.value);
    renderLeads()
})

let listItems = "";

function renderLeads() {
for (let i = 0; i < myLeads.length; i++) {
    listItems += "<li>" + myLeads[i] + "</li>";
}
ulEl.innerHTML = listItems;
}