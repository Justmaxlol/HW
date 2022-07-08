function handleCard() {
  var cardDiv = document.getElementById("addCardHere");
  cardDiv.innerHTML = `<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title" id="cardTitle">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;
  var cardTitle = document.getElementById("cardTitle");
  var userInput = document.getElementById("userInput");
  cardTitle.innerText = userInput.value;
}

function handleAnimalTitle() {
  var animalSelect = document.getElementById("animalSelect").value;
  var animalTitle = document.getElementById("animalTitle");
  if (animalSelect == "Choose an Animal for the title:") {
    animalTitle.innerText = "Dog";
  } else {
    animalTitle.innerText = animalSelect;
  }
}

function handleAgeAlert() {
  var userAge = document.getElementById("ageInput").value;
  var alertDiv = document.getElementById("alertDiv");
  if (userAge >= 0 && userAge <= 3) {
    alertDiv.innerHTML = `
  <div class="alert alert-danger" role="alert">
    You Baby !
  </div>`;
  } else if (userAge >= 4 && userAge <= 9) {
    alertDiv.innerHTML = `
  <div class="alert alert-danger" role="alert">
    You Kiddo !
  </div>`;
  } else if (userAge >= 10 && userAge <= 17) {
    alertDiv.innerHTML = `
  <div class="alert alert-danger" role="alert">
    You teen !
  </div>`;
  } else if (userAge >= 18 && userAge <= 70) {
    alertDiv.innerHTML = `
  <div class="alert alert-danger" role="alert">
    You Adult !
  </div>`;
  } else {
    alertDiv.innerHTML = `
  <div class="alert alert-danger" role="alert">
    You pensyia !
  </div>`;
  }
}

// calculator code

var firstNum = document.getElementById("firstNum");
var secondNum = document.getElementById("secondNum");

function add() {
  alert(+firstNum.value + +secondNum.value);
}

function subtract() {
  alert(firstNum.value - secondNum.value);
}

function divide() {
  alert(firstNum.value / secondNum.value);
}

function multiply() {
  alert(firstNum.value * secondNum.value);
}
