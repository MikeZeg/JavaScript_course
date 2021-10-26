//chrome://extensions/

// array
let myLeads = [];


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

//Action - Event listener
inputBtn.addEventListener("click", function (){

  myLeads.push(inputEl.value);
  renderLeads();
  inputEl.value = "";

//Save in local Storage
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
});

deletBtn.addEventListener("dblclick", function (){
  localStorage.clear();
  myLeads = [];
  renderLeads();
});


//Function
function renderLeads(){
    let listItem = "";

    for (i=0; i<myLeads.length; i++){
      console.log("Przycisk nr." + [i+1] + ": " + myLeads[i] + " ");

      // listItem +='<li>' + '<a href="https://' + myLeads[i] + '"target="_blank">' + myLeads[i] +'</a>' + '</li>';
      listItem +=`
      <li>
          <a href = "https://${myLeads[i]}" target="_blank">
            ${myLeads[i]}
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
if (leadsFromLocalStorage){
  myLeads = leadsFromLocalStorage;
  renderLeads();
}
