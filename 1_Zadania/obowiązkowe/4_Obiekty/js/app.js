// 0a
const city = {
    capital:'Cracow',
    population:1300000,
    president:'Jacek Majchrowski',
    primeMinisters:['Mateusz Morawiecki','Donald Tusk']
}

console.log(city.capital,city.population,city.president,city.primeMinisters);

//0b
const timeMachine = {
    shape:'kwadrat',
    model:'model',
    run: function(date,place) {
        console.log(`Przenosimy się do ${date} w ${place}`);
    }
}

console.log(timeMachine.shape,timeMachine.model);
timeMachine.run('27.02.2020','Phuket Island');

//1
const book = {
    title:"Kasacja",
    author:"Remigiusz Mróz",
    numberOfPages:494
}

console.log(book.title,book.author,book.numberOfPages);

//2
const person = {
    name:'Natalia',
    age:23,
    sayHello: () => console.log('hello')
}

console.log(person.name,person.age);
person.sayHello();

//3
const recipe = {
    title:"Naleśniki",
    servings:1
}
recipe.ingredients = ['jajka','mleko','woda','sól','mąka'];

console.log(recipe.title,recipe.servings,recipe.ingredients);

//6
var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;

console.log(spoon.isExist);
//nie istnieje, poniewaz operujemy cały czas na tym samym obiekcie.