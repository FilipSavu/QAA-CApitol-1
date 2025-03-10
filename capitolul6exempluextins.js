// Obiect care reprezinta un raft de carti
const raftcarti = {
    authors: [], // Lista autorilor de pe raft
    
    // Metoda care returneaza lista de autori
    getAuthors: function() {
        return this.authors; // 'this' se refera la obiectul 'raftcarti'
    },
    
    // Metoda care adauga un autor in lista
    addAuthor: function(authorName) {
        this.authors.push(authorName); // 'this' se refera la obiectul 'raftcarti'
    }
};

// Adaugam autori
raftcarti.addAuthor("scriitor1");
raftcarti.addAuthor("scriitor2");

// Afisam lista de autori
console.log(raftcarti.getAuthors()); // Afiseaza ["scriitor1", "scriitor2"]
