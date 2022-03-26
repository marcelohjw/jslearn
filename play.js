var name = 'Mjj';
var age = 25;
var hasHobbies = true;

function sumerizeUser(userName, userAge, userHasHobbies) {
    return (
        'O nome é ' + userName
    + ', a idade é ' + userAge
    + ' e ' + userName + ' gosta de alguma atividade? ' + userHasHobbies);
}

console.log(sumerizeUser(name, age, hasHobbies));