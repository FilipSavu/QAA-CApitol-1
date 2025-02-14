// Găsirea unei mașini după marcă (folosind find())
// Creează o funcție care primește un array de obiecte cu mașini și un nume de marcă,
// apoi returnează prima mașină găsită cu acea marcă.


// Array de masini
const masini = [
    { name: "Car1",marca:"Opel" },
    { name: "Car2", marca:"Fiat"},
    { name: "Car3", marca:"BMW"},
    { name: "Car4", marca:"Honda"},
    { name: "Car5", marca:"Opel"},
];

//construim functia care cauta masina dupa marca
function tipMasina(array, marcaCautata) {
    return array.find(masina => masina.marca === marcaCautata);
}

// Testăm funcția
const masinaGasita = tipMasina(masini, "Opel");

// Afișăm rezultatul
console.log("Prima mașină găsită:", masinaGasita);