function PizzaOven(crustType,sauceType,cheeses,toppings){//Information for the pizza.
    var Pizza={};
    Pizza.crustType=crustType;
    Pizza.sauceType=sauceType;
    Pizza.cheeses=cheeses;
    Pizza.toppings=toppings;
    return Pizza;
}

var P1 = PizzaOven("deep dish","traditional","[mozzarella]",["pepperoni,sausage"]);
console.log(P1);
var P2 = PizzaOven("hand tossed","marinara",["mozzarella","feta"],["mushrooms","olives","onions"]);
console.log(P2);
var P3 = PizzaOven("Chicago-Style","tomato-sauce",["Parmesan","Cheddar"],["Extra Cheese,Peppers"]);
console.log(P3);
var P4 =PizzaOven("New-York-Style","Marinara",["Gouda","Parmigiano"],["mushrooms","Onions","Pepperoni"]);