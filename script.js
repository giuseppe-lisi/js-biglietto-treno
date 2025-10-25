// Richiesta dati utente
const kmUser = parseInt(prompt("Quanti Km dovrai percorrere?"));
const ageUser = parseInt(prompt("Quanti anni hai?"));

// Calcolo costo biglietto
let ticketPrice = kmUser * 0.21;
let discountPrice;

if (ageUser < 18) {
    discountPrice = ticketPrice - ((ticketPrice / 100) * 20)
    alert(`Il costo del biglietto è ${discountPrice.toFixed(2)}`)
} else if (ageUser >= 65) {
    discountPrice = ticketPrice - ((ticketPrice / 100) * 40)
    alert(`Il costo del biglietto è ${discountPrice.toFixed(2)}`)
} else {
    alert(`Il costo del biglietto è ${ticketPrice}`)
}

// Restituire risultato