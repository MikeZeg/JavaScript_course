//chrome://extensions/

// array
let myLeads = [];

//Variables

let text = "";



//Catcher Elements
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById("ul-el");


document.getElementById("input-btn").addEventListener("click", function (){

  myLeads.push(inputEl.value);
  renderLeads();
  inputEl.value = "";
});

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


//Task

const recipient = "James";
const sender = "Michal";

const email =  `
  Hey ${recipient}!
  How its going?
  Cheers ${sender}.
`
console.log(email);
