//create array of person obj
var people = [
    { name: "John Lee", age: 30 },
    { name: "Marry Butner", age: 25 },
    { name: "Harry kill", age: 35 }
];
//function to fillter peoplr who are at least 30 years old
function fillterAdults(persons) {
    return persons.filter(function (person) { return person.age >= 30; });
}
//using function
var adults = fillterAdults(people);
console.log(adults);
