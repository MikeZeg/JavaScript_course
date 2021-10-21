let myLeads = [];
const inputEl = document.getElementById('input-el');


// document.getElementById("input-btn").addEventListener("click", ()=>{
//   console.log("Press");
//
//   const newText = document.getElementById("input-el").value;
//   myLeads += [myLeads.push(newText)];
//
//   console.log(newText);
//   console.log(myLeads);
// });

document.getElementById("input-btn").addEventListener("click", function (txt){

  let newText = document.getElementById("input-el");//Catch a value and change to string and trim space
  let newTextString = newText.value.toString();
  newTextString = newTextString.trim();

  myLeads.push(newTextString);//add txt to array

  //check the array
  // for (i=0; i<myLeads.length; i++){
  //   console.log("Przycisk nr." + [i+1] + ": " + myLeads[i] + " ");
  // }

});

//task
// document.getElementById('box-opend').addEventListener("click", () => {
//   console.log('I want open the box')});
