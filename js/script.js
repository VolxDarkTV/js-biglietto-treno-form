// Calcolo Prezzo Biglietti Treno

// ask Km
let howLong = parseInt(prompt("Mi dica quanti Km desidera percorrere: "));
// ask Age
let howOldAreYou = parseInt(prompt("Adesso, Gentilmente mi dica anche la sua eta:"));

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


// Final Price
// document.getElementById("title").innerHTML = `Grazie infinite per aver scelto la nostra compagnia! Lei ha ${howOldAreYou} anni, e vuole percorrere ${howLong}km, il prezzo da noi accuratamente valutato per lei e: ${moltiplication}€`

    
// DEBUG
console.log(howLong, howOldAreYou, priceForKm, moltiplication)
// arrotondare per 2 DECIMALI
// var rounded = Math.round((moltiplication + Number.EPSILON) * 100) / 100;
// console.log(rounded);