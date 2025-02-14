// Filtrarea produselor la reducere (folosind filter())
// Creează o funcție care primește un array de produse și returnează doar produsele care au reducere (discount === true).


// Array de produse 
const produse = [
    { name: "Mere", pretRON: 66.3, discount: 10 },
    { name: "Banane", pretRON: 70, discount: 0 },
    { name: "Cirese", pretRON: 100, discount: 0 },
    { name: "Portocale", pretRON: 28.5, discount: 5 }, 
];

// Funcția care filtrează produsele cu reducere
function reducere(array) {
    return array.filter(produs => produs.discount > 0);
}

// Constanta care apelează funcția
const produseReduse = reducere(produse);

// Afișarea produselor cu reducere
console.log("Produse cu reducere:", produseReduse);


