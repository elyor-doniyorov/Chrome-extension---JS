let myLeads = [];
let inputEl = document.getElementById("input-el");
let inputBtn = document.getElementById("input-btn");
let ulEl = document.getElementById("ul-el")

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage);

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    renderLeads();
}

inputBtn.addEventListener('click', function() {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
});

function renderLeads() {
let listItems = ""
for (let i = 0; i < myLeads.length; i++) {
    listItems += `
    <li>
        <a target='_blank' href="${myLeads[i]}">
            ${myLeads[i]}
        </a>
    </li>
`
};
  ulEl.innerHTML = listItems;
};