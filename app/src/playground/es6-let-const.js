var nameVar = 'Toni';
nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jenny';
nameLet = 'Jo';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetname() {
    const petName = 'Hal';
    return petName;
}

const petName = getPetname();
console.log(petName);

// Block scoping

const fullName = 'Toni Kavelj';
let firstName;

if(fullName) {
    firstName = fullName.split(' ')[0];
    // sa razmakom u zagrada i nulom se izvlači ime
    console.log(firstName);
}

console.log(firstName);