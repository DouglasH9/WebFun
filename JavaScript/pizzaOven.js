function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
var deepDish = pizzaOven("deepdish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
console.log(deepDish);
var handTossed = pizzaOven("handtossed", "marinara", ['mozzarella', 'feta'], ['mushrooms', 'olives', 'onions']);
console.log(handTossed)
var kMcAllister = pizzaOven('thin', 'traditional', 'mozzarella', 'none');
var jimmyPesto = pizzaOven('neopolitan','pesto', ['mozzarella','asiago'], ['arugala,', 'basil', 'cherry tomatoes']);

var crustType = ['thin',"deep dish", "neopolitan"];
var sauceType = ['traditional','pesto','olive oil'];
var cheeses = ['mozzarella', 'gorgonzola','asiago', 'cheddar'];
var toppings = ['sausage','pepperoni','mushrooms','olives'];

function randomPizza(){
    return pizzaOven (
    crustType[Math.floor(Math.random() * crustType.length)],
    sauceType[Math.floor(Math.random() * sauceType.length)],
    cheeses[Math.floor(Math.random() * cheeses.length)],
    toppings[Math.floor(Math.random() * toppings.length)]
    );
}
console.log(randomPizza());