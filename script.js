function finalPrice(kilometers, age) {
    //calcolo prezzo con tariffa di base
    let price = kilometers * 0.21;

    //determino se l'utente ha diritto o meno ad un discount
    if (age < 18) {
        price = price - ((price / 100) * 20);
        alert(`Il costo del biglietto è ${price.toFixed(2)}`);
    } else if (age >= 65) {
        price = price - ((price / 100) * 40);
        alert(`Il costo del biglietto è ${price.toFixed(2)}`);
    } else {
        alert(`Il costo del biglietto è ${price}`);
    }
}

//richiesta dati utente
const kmUser = parseInt(prompt("Quanti Km dovrai percorrere?"));
const ageUser = parseInt(prompt("Quanti anni hai?"));


//se possibile applico discount, poi restituisco 
//il prezzo all'utente
finalPrice(kmUser, ageUser);
