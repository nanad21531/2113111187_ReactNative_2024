interface Person{
    name: string;
    age: number;
}
//create array of person obj
const people: Person[]=[
    {name:"John Lee",age : 30},
    {name : "Marry Butner",age : 25},
    {name:"Harry kill",age : 35}
]
//function to fillter peoplr who are at least 30 years old
function fillterAdults(persons:Person[]):Person[]{
    return persons.filter(person=>person.age>=30);
}
//using function
const adults = fillterAdults(people);
console.log(adults);