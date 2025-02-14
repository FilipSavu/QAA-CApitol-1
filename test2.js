// Creare array cu studenți
const studenti = [
    { name: "Andrei", age: 20, nota: 6.3 },
    { name: "Maria", age: 22, nota: 10 },
    { name: "Elena", age: 19, nota: 8.5 },
    { name: "Radu", age: 21, nota: 5.5 }
];

// creare functie care returnează un array cu numele studenților
const extrageNumeStudenti = (studenti) => studenti.map(student => student.name);

// Aplicarea funcției și afișarea rezultatelor
const numeStudenti = extrageNumeStudenti(studenti);

console.log("Array original de studenți:", studenti);
console.log("Array doar cu numele studenților:", numeStudenti);