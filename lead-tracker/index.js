// chrome://extensions/

let myLeads = loadListFromLocalStorage();


const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const saveTabBtn = document.getElementById("save-tab-btn");
const deleteBtn = document.getElementById("delete-btn");
const listEl = document.getElementById("ul-el");
renderList();

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    saveListToLocalStorage(myLeads)
    inputEl.value = "";
    renderList();
});

saveTabBtn.addEventListener("click", function() {
    console.log("save btn tapped");
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        console.log(tabs);
        myLeads.push(tabs[0].url);
        saveListToLocalStorage(myLeads);
        renderList();
    });
});

deleteBtn.addEventListener("click", function() {
    clearLocalStorage();
    renderList();
});


function saveListToLocalStorage(list) {
    const json = JSON.stringify(list)
    localStorage.setItem("leads", json);
}

function loadListFromLocalStorage() {
    let list = JSON.parse(localStorage.getItem("leads"));
    return list;
}

function clearLocalStorage() {
    localStorage.clear("leads");
}

function renderList() {
    listEl.innerHTML = getList();
}

function getList() {
    myLeads = (loadListFromLocalStorage() === null) ? [] : loadListFromLocalStorage();
    return myLeads.map((lead) => {
        return `
            <li>
                <a href="${lead}" target="_blank">
                    ${lead}
                </a>
            </li>
        `
    }).join("");
}