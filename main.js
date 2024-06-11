// Functionize Minecraft Fishing Start Code

// HTML variables
let resultImg = document.getElementById("result-img");
let numCodSpan = document.getElementById("num-cod");
let numSalmonSpan = document.getElementById("num-salmon");
let numTropicalSpan = document.getElementById("num-tropical");
let numPufferSpan = document.getElementById("num-puffer");
let plus5Btn = document.getElementById("plus5");
let until200Btn = document.getElementById("until200");
let randFishNum = document.getElementById("randFish");
let fishInventory = document.getElementById("fishInven");
let sortFish = document.getElementById("sortFishBtn");

// Fish count variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);
plus5Btn.addEventListener("click", plusFive);
until200Btn.addEventListener("click", until200);
randFishNum.addEventListener("change", randomFish);
sortFish.addEventListener("click", sortingFish);

function fishBtnClicked() {
  // Determine selected character
  let character = document.getElementById("character-select").value;

  if (character === "steve") {
    // // Steve Fish simulator
    let randNum = Math.random();

    if (randNum < 0.7) {
      resultImg.src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;

      // add small picture of cod to inventory
      fishInventory.innerHTML += "<img src='img/Raw-Cod.png' width='25px'>";
    } else if (randNum < 0.9) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;

      // small pic of salmon to inventory
      fishInventory.innerHTML += "<img src='img/Raw-Salmon.png' width='25px'>";
    } else if (randNum < 0.95) {
      resultImg.src = "img/Tropical-Fish.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;

      // small pic of trop fish to inventory
      fishInventory.innerHTML +=
        "<img src='img/Tropical-Fish.png' width='25px'>";
    } else {
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;

      // small pic of pufferfish to inventory
      fishInventory.innerHTML += "<img src='img/Pufferfish.png' width='25px'>";
    }
  } else if (character === "alex") {
    // Alex Fish simulator
    let randNum = Math.random();

    if (randNum < 0.1) {
      resultImg.src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;

      // add small picture of cod to inventory
      fishInventory.innerHTML += "<img src='img/Raw-Cod.png' width='25px'>";
    } else if (randNum < 0.2) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;

      // small pic of salmon to inventory
      fishInventory.innerHTML += "<img src='img/Raw-Salmon.png' width='25px'>";
    } else if (randNum < 0.5) {
      resultImg.src = "img/Tropical-Fish.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;

      fishInventory.innerHTML +=
        "<img src='img/Tropical-Fish.png' width='25px'>";
    } else {
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;

      // small pic of pufferfish to inventory
      fishInventory.innerHTML += "<img src='img/Pufferfish.png' width='25px'>";
    }
  } else {
    // Villager fishing simulator
    let randNum = Math.random();

    if (randNum < 0.25) {
      resultImg.src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;

      // add small picture of cod to inventory
      fishInventory.innerHTML += "<img src='img/Raw-Cod.png' width='25px'>";
    } else if (randNum < 0.5) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;

      // small pic of salmon to inventory
      fishInventory.innerHTML += "<img src='img/Raw-Salmon.png' width='25px'>";
    } else if (randNum < 0.75) {
      resultImg.src = "img/Tropical-Fish.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;

      fishInventory.innerHTML +=
        "<img src='img/Tropical-Fish.png' width='25px'>";
    } else {
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
      // small pic of pufferfish to inventory
      fishInventory.innerHTML += "<img src='img/Pufferfish.png' width='25px'>";
    }
  }
}

function plusFive() {
  for (let n = 1; n <= 5; n++) {
    fishBtnClicked();
  }
}

function until200() {
  let codTarget = numCod + 200;
  let count = 0;
  while (numCod < codTarget) {
    fishBtnClicked();
    count++;
  }
}

function randomFish() {
  let fish = randFishNum.value;

  for (let f = 0; f < fish; f++) {
    fishBtnClicked();
  }
}

function sortingFish() {
  fishInventory.innerHTML = "";

}
