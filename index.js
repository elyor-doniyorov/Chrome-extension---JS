let myLeads = [];
let inputEl = document.getElementById("input-el");
let inputBtn = document.getElementById("input-btn");
let ulEl = document.getElementById("ul-el")

inputBtn.addEventListener('click', function() {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    renderLeads()
})

let listItems = "";

function renderLeads() {
for (let i = 0; i < myLeads.length; i++) {
    listItems = `
    <li>
        <a target='_blank' href="${myLeads[i]}">
        ${myLeads[i]}
        </a>
    </li>
`

}
ulEl.innerHTML += listItems;
console.log(listItems)
}