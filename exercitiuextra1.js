// Conversia prețurilor în altă monedă (folosind map())
// Creează o funcție care primește un array de produse cu prețuri în EUR și returnează un nou array cu prețurile convertite în RON (1 EUR = 5 RON).
// Fiecare produs trebuie să aibă o nouă proprietate pretRON.


// Array de produse cu prețuri în RON
const produseRON = [
    { name: "Mere", pretRON: 66.3 },
    { name: "Banane", pretRON: 70},
    { name: "Portocale", pretRON: 28.5}, 
];

// Functia care converteste preturile în EUR
function pretEURO(array) {
    return array.map(produs => ({
    name: produs.name,
    pretEURO: (produs.pretRON / 5).toFixed(3) // Conversie în EUR și rotunjire la 2 zecimale
    }));
}

//constanta care apeleaza functia creata mai sus
const produseEURO = pretEURO(produseRON);

// Afisarea rezultatelor
console.log("Prețuri în RON:", produseRON);
console.log("Prețuri în EURO:", produseEURO);
