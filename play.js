const person = {
    name: 'Marcelo',
    age: 25,
    greet: function() {
        console.log("Oi, eu sou " + this.name);
    }
};


person.greet();

const hobbies = ['Esportes', 'Cozinhar'];
console.log('Meus hobbbys: ');
for (let hobby of hobbies) {
    console.log(hobby);
}
hobbies.push('Treinar');
console.log(hobbies);