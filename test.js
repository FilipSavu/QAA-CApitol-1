//cream o variabila care are un array de numere
const numere = [2, 4, 6, 8, 10];


//facem o functie care sa foloseasca map si arrow function pentru a dubla fiecare numar inmultindu-l cu 2
function dubleazaNumerele(numerele_date) {    
    const numerele_din_array_dublate = numerele_date.map(fiecare_numar => fiecare_numar * 2);        
    return numerele_din_array_dublate;
}
//cream o noua variabila care cheama functia creata mai sus (care dubleaza numerele)
const numereDublate = dubleazaNumerele(numere);


//log in consola la original si dublat (cu comentariu pentru claritate la fiecare ce este)
console.log("Numere originale:", numere); 
console.log("Numere dublate:", numereDublate);
