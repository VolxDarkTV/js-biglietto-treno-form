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

// calc total price
    // price for Km = 0.21€
    const priceForKm = 0.21
    let moltiplication = howLong * priceForKm;
    // IF minorenni => -20%
    if(howOldAreYou < 18){

        moltiplication = (howLong * priceForKm)*0.80;
        // arrotondare per 2 DECIMALI
        moltiplication = moltiplication.toFixed(2);
        // OUTPUT
        document.getElementById("title").innerHTML = `Grazie infinite per aver scelto la nostra compagnia! Lei ha ${howOldAreYou} anni, e vuole percorrere ${howLong}km, il prezzo da noi accuratamente valutato, e scontato del 20%, per lei e: ${moltiplication}€`

    }else if(howOldAreYou > 65){ // ELSE IF over 65 => -40%

        moltiplication = (howLong * priceForKm)*0.60;
        moltiplication = moltiplication.toFixed(2);
        // OPUTPUT
        document.getElementById("title").innerHTML = `Grazie infinite per aver scelto la nostra compagnia! Lei ha ${howOldAreYou} anni, e vuole percorrere ${howLong}km, il prezzo da noi accuratamente valutato, e scontato del 40%, per lei e: ${moltiplication}€`
    }else{ // ELSE full price

        howLong * priceForKm;
        document.getElementById("title").innerHTML = `Grazie infinite per aver scelto la nostra compagnia! Lei ha ${howOldAreYou} anni, e vuole percorrere ${howLong}km, il prezzo da noi accuratamente valutato per lei e: ${moltiplication}€`

    } 
    
// DEBUG
console.log(howLong, howOldAreYou, priceForKm, moltiplication)
// arrotondare per 2 DECIMALI
// var rounded = Math.round((moltiplication + Number.EPSILON) * 100) / 100;
// console.log(rounded);

    
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

