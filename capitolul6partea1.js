// construm un obect care reprezinta o masina
const car = {
    brand: "Toyota", //marca masinii
    
    //scriem metoda care afiseaza marca masinii
    showBrand: function() {
        console.log(this.brand); // 'this' se refera la obiectul mai sus definit : 'car'
    }
};

//rulam  metoda
car.showBrand(); // Afiseaza "Toyota"


