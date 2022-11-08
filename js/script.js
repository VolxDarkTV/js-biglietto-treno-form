// Button
const sendButton = document.getElementById("send");
// PrintZone
const printName = document.getElementById("print-name");
// Ask Km
let howLong = document.getElementById("km");

// User INPUT
// Add name & surname
const nameSurnameInput = document.getElementById("name-surname");

sendButton.addEventListener("click",
    function(){
        const nome = nameSurnameInput.value;
        printName.innerHTML = nome;
        nameSurnameInput.value = null;

        
    }
)
// Add km

// Age



    
// DEBUG
console.log(howLong, howOldAreYou, priceForKm, moltiplication);
// arrotondare per 2 DECIMALI
// var rounded = Math.round((moltiplication + Number.EPSILON) * 100) / 100;
// console.log(rounded);





// DEBUG
// document.querySelector('#name-surname').addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
//         const nome = nameSurnameInput.value;
//         printName.innerHTML = nome;
//         nameSurnameInput.value = null;
//     }
// });

