//fetch dati utente quando si clicca il bottone calcola prezzo
function getUserData() {
    let kmUser = parseInt(document.getElementById("km").value);
    let ageUser = parseInt(document.getElementById("age").value);

    //passo i dati alla funzione che calcola il prezzo
    calculateFinalPrice(kmUser, ageUser);
}

function calculateFinalPrice(kilometers, age) {
    //calcolo prezzo con tariffa di base
    let price = kilometers * 0.21;

    //determino se l'utente ha diritto o meno ad un discount
    if (age < 18) {
        price -= (price / 100) * 20;
    } else if (age >= 65) {
        price -= (price / 100) * 40;
    }

    //restituisco il prezzo del biglietto
    document.getElementById("ticketPrice").innerHTML = price.toFixed(2) + "€";
}