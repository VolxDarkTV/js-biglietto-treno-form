// Button
const sendButton = document.getElementById("send");
const deleteButton = document.getElementById("delete");
// PrintZone
const printName = document.getElementById("print-name");
const printCost = document.getElementById("print-cost");
// Ask Km
let howLong = document.getElementById("km");
// Ask Age
let howOldAreYou = document.getElementById("age")
// Carrozza
let carrozzaNumber = document.getElementById("print-carrozza");
// CP
let cpNumber = document.getElementById("print-cp");
// User INPUT
// Add name & surname
const nameSurnameInput = document.getElementById("name-surname");

// GENERATION Button
sendButton.addEventListener("click",
    function(){
        // tickets appair
        let trainTicket = document.getElementById("train-ticket");
        trainTicket.style.display = "flex";
        // Name 
        const nome = nameSurnameInput.value;
        printName.innerHTML = nome;
        nameSurnameInput.value = null;
        // Km
        const kmSource = howLong.value;
        
        // Age
        const ageSource = howOldAreYou.value;

        
        
        // calc total price
        // price for Km = 0.21€
        const priceForKm = 0.21;
        let moltiplication = howLong.value * priceForKm;
        // IF minorenni => -20%
        if(howOldAreYou.value < 18){
            
            moltiplication = (howLong.value * priceForKm)*0.80;
            // arrotondare per 2 DECIMALI
            moltiplication = moltiplication.toFixed(2);
            // Offert
            document.getElementById("print-offert").innerHTML = `Sconto Minori`
            

        }else if(howOldAreYou.value > 65){ // ELSE IF over 65 => -40%

            moltiplication = (howLong.value * priceForKm)*0.60;
            moltiplication = moltiplication.toFixed(2);
            // Offert
            document.getElementById("print-offert").innerHTML = `Tariffa Agevolata`

        }else{ // ELSE full price

            howLong.value * priceForKm;
            // Offert
            document.getElementById("print-offert").innerHTML = `Tariffa base`
        } 
        // Carrozza random number generator
        carrozzaNumber.innerHTML = Math.floor(Math.random() * 10) + 1;
        // CP random number generator
        cpNumber.innerHTML = Math.floor(Math.random() * 100000) + 1;
        // Price OUTPUT
        printCost.innerHTML = moltiplication;

        // Km Reset
        howLong.value = null
        // Age Reset
        howOldAreYou.value = null
    }
)

// DELETE Button
deleteButton.addEventListener("click", 
    function(){
        howLong.value = null
        howOldAreYou.value = null
        nameSurnameInput.value = null;
        // tickets disappair
        let trainTicket = document.getElementById("train-ticket");
        trainTicket.style.display = "none";
    }
)


    

    
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

