// Button
const sendButton = document.getElementById("send");
// PrintZone
const printName = document.getElementById("print-name");
const printCost = document.getElementById("print-cost");
// Ask Km
let howLong = document.getElementById("km");
// Ask Age
let howOldAreYou = document.getElementById("age")

// User INPUT
// Add name & surname
const nameSurnameInput = document.getElementById("name-surname");

sendButton.addEventListener("click",
    function(){
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
            // OUTPUT
            // document.getElementById("title").innerHTML = `Grazie infinite per aver scelto la nostra compagnia! Lei ha ${howOldAreYou.value} anni, e vuole percorrere ${howLong.value}km, il prezzo da noi accuratamente valutato, e scontato del 20%, per lei e: €`

        }else if(howOldAreYou.value > 65){ // ELSE IF over 65 => -40%

            moltiplication = (howLong.value * priceForKm)*0.60;
            moltiplication = moltiplication.toFixed(2);
            // OPUTPUT
            // document.getElementById("title").innerHTML = `Grazie infinite per aver scelto la nostra compagnia! Lei ha ${howOldAreYou.value} anni, e vuole percorrere ${howLong.value}km, il prezzo da noi accuratamente valutato, e scontato del 40%, per lei e: €`
        }else{ // ELSE full price

            howLong.value * priceForKm;
            // document.getElementById("title").innerHTML = `Grazie infinite per aver scelto la nostra compagnia! Lei ha ${howOldAreYou.value} anni, e vuole percorrere ${howLong.value}km, il prezzo da noi accuratamente valutato per lei e: €`

        } 
        // Price
        printCost.innerHTML = moltiplication;
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

