"use strict";
console.clear();

const contButton = document.getElementById("change");
console.log(contButton);
const changeText = contButton.innerHTML;
console.log(changeText);
const changeImg = document.getElementById("lamp");
console.log(changeImg);
const views = document.getElementById("body");
contButton.addEventListener("click", function () {
    console.log(changeImg.src);
    if (contButton.innerText.includes("Accendi")) {
        contButton.innerText = "Spegni";
        changeImg.src = "./img/yellow_lamp.png";
        changeImg.alt = "lampOn";
        changeImg.className = "rotateY";
        console.log(changeImg);
        views.className = "bg-contrast";
    } else if (contButton.innerText.includes("Spegni")) {
        changeImg.src = "./img/white_lamp.png";
        changeImg.alt = "lampOff";
        contButton.innerText = "Accendi";
        changeImg.classList.remove("rotateY");
        views.classList.remove("bg-contrast");
    }
}
);