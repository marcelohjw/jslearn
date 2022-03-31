const person = {
    name: 'Marcelo',
    age: 25,
    greet: function() {
        console.log("Oi, eu sou " + this.name);
    }
};

person.greet();