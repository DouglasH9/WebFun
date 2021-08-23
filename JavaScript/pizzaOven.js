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

var crusts = ['thin',"deep dish", "neopolitan"];
var sauces = ['traditional','pesto','olive oil'];
var cheeses = ['mozzarella', 'gorgonzola','asiago', 'cheddar'];
var toppings = ['sausage','pepperoni','mushrooms','olives'];

function randomPizza(){
    return pizzaOven (
    crusts[Math.floor(Math.random * crusts.length)],
    sauces[Math.floor(Math.random * sauces.length)],
    cheeses[Math.floor(Math.random * cheeses.length)],
    toppings[Math.floor(Math.random * toppings.length)]);
}
console.log(randomPizza());