let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
let inputEl = document.getElementById("input-el");
let inputBtn = document.getElementById("input-btn");
let ulEl = document.getElementById("ul-el")

inputBtn.addEventListener('click', function() {
    myLeads.push(inputEl.value);
    console.log(myLeads);
})

let listItems = "";

for (let i = 0; i < myLeads.length; i++) {
    listItems += "<li>" + myLeads[i] + "</li>";
    console.log(listItems)
}

// render listItems using ulEl.innerHTML
ulEl.innerHTML = listItems;