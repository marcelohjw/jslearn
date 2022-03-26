var name = 'Mjj';
var age = 25;
var hasHobbies = true;
let exc = '!'

const sumerizeUser = (userName, userAge, userHasHobbies) => {
    if (userHasHobbies == true) {
        userHasHobbies = 'Sim!';
    };

    return (
        'O nome é ' + userName
    + ', a idade é ' + userAge
    + ' e ' + userName + ' gosta de alguma atividade? ' + userHasHobbies);
};

console.log(sumerizeUser(name, age, hasHobbies));