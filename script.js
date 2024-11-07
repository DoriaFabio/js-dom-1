"use strict";
console.clear();

const contButton = document.getElementById("change");
console.log(contButton);
const changeText = contButton.innerHTML;
console.log(changeText);
const changeImg = document.getElementById("lamp");
console.log(changeImg);

contButton.addEventListener("click", function () {
    console.log(changeImg.src);
    if (contButton.innerText.includes("Accendi")) {
        contButton.innerText = "Spegni";
        changeImg.src = "./img/yellow_lamp.png";
        changeImg.alt = "lampOn";
    //    changeImg.src = 
    } else if (contButton.innerText.includes("Spegni")) {
        changeImg.src = "./img/white_lamp.png";
        changeImg.alt = "lampOff";
        contButton.innerText = "Accendi";
    }
}
);