//#### LAB 6 - DOM MANIPULATION ####
//PART 2: MYSTERY BOX
// alert("test");//COMMENT OUT AS SOON AS YOU KNOW YOU ARE CONNECTED!!!!

//LISTEN FOR load EVENT
window.onload = pageReady;

//'WRAPPER' FUNCTION FOR DOM LOGIC
function pageReady() {
  //GET DOM ELEMENTS WE'LL NEED
  let theBox = document.getElementById("mysteryBox");
  let theNewBox = document.getElementById("buttonBox");

  //====CREATE THE FUNCTIONS WE'LL NEED====
  //FUNCTION TO ASK USER
  function potentialSurprise() {
    let surprise = confirm("Do you want to see something?");
    if (surprise === true) {
      mysteryBox.style.display = "none";
      buttonBox.style.display = "block";
    }
  }
  //FUNCTION TO CHANGE buttonBox
  function transform() {
    theNewBox.style.width = "600px";
    theNewBox.innerHTML = "<h2>SURPRISE!!</h2>";
    theNewBox.style.backgroundColor = "orange";
  }
  //SETUP LISTENERS
  theBox.onmouseover = potentialSurprise;
  theNewBox.onclick = transform;
} //END onload FUNCTION
