// Obiect care reprezinta o persoana
const matei = {
    username: "Matei", // Numele utilizatorului
    
    // Metoda care afiseaza numele utilizatorului
    showName: function() {
        console.log(this.username); // 'this' se refera la obiectul 'matei'
    }
};

// Testam metoda
matei.showName(); // Afiseaza "Matei"
