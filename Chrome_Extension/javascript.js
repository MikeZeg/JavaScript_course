//chrome://extensions/

// array
let myLeads = [];
const tab = [
  {url: "https://www.linkedin.com/in/per-harald-borgen/"}
];



//Variables
let text = "";

//Local Storage
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
// console.log(leadsFromLocalStorage);



//Catcher Elements
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById("ul-el");
const inputBtn = document.getElementById("input-btn");
const deletBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

//Action - Event listener
inputBtn.addEventListener("click", function (){

  myLeads.push(inputEl.value);
  render(myLeads);
  inputEl.value = "";

                          //Save in local Storage
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
});

deletBtn.addEventListener("dblclick", function (){
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

tabBtn.addEventListener("click", function(){
  console.log(tab[0].url);
});

//Function

if (leadsFromLocalStorage){
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

function render(leads){
    let listItem = "";

    for (i=0; i< leads.length ; i++){
      console.log("Przycisk nr." + [i+1] + ": " + leads[i] + " ");

      // listItem +='<li>' + '<a href="https://' + leads[i] + '"target="_blank">' + leads[i] +'</a>' + '</li>';
      listItem +=`
      <li>
          <a href = "https://${leads[i]}" target="_blank">
            ${leads[i]}
          </a>
      </li>
      `
      //Other methods to create elements
      // const li = document.createElement("li");
      // li.textContent = myLeads[i];
      // ulEl.append(li);
    }

    ulEl.innerHTML = listItem;
}
