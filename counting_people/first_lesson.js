/*Subway passenger counter app.
  The application counts passengers boarding the vehicle or building.

1.0 Variables

2.0 FUNCTION
  2.1 incrementPeople - When user pressing the button will be increasing the value and displayed on the screen.
  2.2 clearF - after pressing the button the result is displayed (using Save function) and will be clear counting element.
  2.3 Save - using to display result on screen
*/

//1.0 Variables

let count = 0;
let number = 0;


//2.0 Functions

function incrementPeople(){
  count += 1;
  document.getElementById('count-el').innerText = count;
  console.log("Po kliknieciu, wynik: " + count);
}

function clearF(){
    save(count);
    count = 0;
    document.getElementById('count-el').innerText = count;
  }

function save(number){
  let changeTheElement = document.getElementById('save-el');
  changeTheElement.innerHTML += count + " - ";
}
