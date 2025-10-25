function finalPrice(kilometers, age) {
    //calcolo prezzo con tariffa di base
    let price = kilometers * 0.21;

    //determino se l'utente ha diritto o meno ad un discount
    if (age < 18) {
        price -= (price / 100) * 20;
    } else if (age >= 65) {
        price -= (price / 100) * 40;
    }
    return price.toFixed(2); 
}

//richiesta dati utente
const kmUser = parseInt(prompt("Quanti Km dovrai percorrere?"));
const ageUser = parseInt(prompt("Quanti anni hai?"));

//fornisco il prezzo finale all'utente
document.getElementById("prezzo").innerHTML = finalPrice(kmUser, ageUser) + "€";
