// "use strict"

// console.log("Hello JavaScript!");

// var message = "Hello World";
// confirm = "Shuiab Khan"
// console.log(window);

// var a =  "abc";

// function myFunc () {
// console.log(a);
// // var a = "def";
// }
// myFunc()

// let name = 'Shuaib Khan';
// console.log(name);

// Challenge 1: We want to log out the name "Reed", but it doesn't work. Can you fix it?
// const name;
// name = "Reed";
// console.log(name);

// ANS IS

// const name = "Reed";
// console.log(name);

// Challenge 2: We want 102 to be logged out. But we're getting an error instead. Try to fix it!
// const count = 100;
// count = 101;
// count = 102;
// console.log(count);

// ANS IS
// let count = 100;
// count = 101;
// count = 102;
// console.log(count);

//  Challenge 3: We want to log out the price (50), but it doesn't work. Can you fix it?
// let price;
// console.log(price);
// price = 50;

// ANS IS
// let price;
// price = 50;
// console.log(price);

// var price = 20;
// var isSale = true;

// if(isSale){
//     var price = 20 - 2;
//     console.log("sale price is ", price);
// }

// function salePrice(){
//     var price = 20 - 2;
//     console.log("sale price is ", price);
// }
// salePrice()

// console.log('normal price is ', price);

// Challenge: Help Darth Vader express himself to his son!
// const mySon = "Luke";
// const parentalStatus = "father";
// const message = `${mySon}, I am your ${parentalStatus}`;
// console.log(message);

// const username = "shuaib";

// const captalize = (name) => `${name.charAt(0).toUpperCase().slice()}${name.slice(1)}`;

// const greetUser = (name, callback) => callback(captalize(name));

// const result = greetUser(username, name=> `Hi ${name}`)

// console.log(result);

// const map = new Map([
//     [1,"Shuaib"],
//     [1, 'asif']
// ])

// // map.set(1, "Khan")
// console.log(map);

// const user1 = { name: "john" }
// const user2 = { name: "mary" }

// const secretKey1 = "asldjfalskdjf";
// const secretKey2 = "alksdjfakjsdf";

// const map = new WeakMap([
//     [user1, secretKey1],
//     [user2, secretKey2]
// ])
// console.log(map.get(user1));

// const userData = {
//     username : "Shuaib KHan",
//     title : "Web Engineer",
//     getBio(){
//         console.log(this.username);
//     },
//     askToFriend(){
//         setTimeout(function(){
//             console.log(this.title);
//         },0)

//     }
// }

// userData.askToFriend();

// const restaurants = [
//     { name: 'Cap City Diner', milesAway: 2.2 },
//     { name: 'Chop Shop', milesAway: 4.1 },
//     { name: 'Northstar Cafe', milesAway: 0.9 },
//     { name: 'City Tavern', milesAway: 0.5 },
//     { name: 'Shake Shack', milesAway: 5.3 }
//   ]

//   const specificResturents = restaurants.find((resturent)=> {
//     return resturent.name.startsWith("C") && resturent.milesAway < 3;

//   })

//   console.log(specificResturents);

// const menuItems = [
//     { item: "Blue Cheese Salad", price: 8 },
//     { item: "Spicy Chicken Rigatoni", price: 18 },
//     { item: "Ponzu Glazed Salmon", price: 23 },
//     { item: "Philly Cheese Steak", price: 13 },
//     { item: "Baked Italian Chicken Sub", price: 12 },
//     { item: "Pan Seared Ribeye", price: 31 }
//   ];

//   const itemsPrice = menuItems.reduce((accumulator, menuItem) => {
//     console.log(
//         `Accumulator ${accumulator}`,
//         `Menu Item ${menuItem.price}`
//     );

//     return accumulator + menuItem.price;
//   }, 0);

//   console.log(itemsPrice);

// const cars = [
//     { name: "Toyota", isElectric: false, weight: 1320 },
//     { name: "Ford", isElectric: false, weight: 1400 },
//     { name: "Volkswagen", isElectric: false, weight: 1370 },
//     { name: "Honda", isElectric: false, weight: 1375 },
//     { name: "Tesla", isElectric: true, weight: 1750 },
//     { name: "BMW", isElectric: true, weight: 1350 },
//   ];

//   const totalWeights = cars.reduce((acc, car) => car.isElectric && acc + car.weight, 0);
//   console.log(totalWeights);

// const numbers = [1, 2, 3, 4, 5, 6];

// const greatherThanThree = numbers.reduce((acc, num)=> {

//    if(num>3){
//     acc.push(num);
//    }
//    return acc

// }, []);
// console.log(greatherThanThree);

const breakfastMenuIdeas = ["Buckwheat Pancakes"];
const dinnerMenuIdeas = ["Glazed Salmon", "Meatloaf", "American Cheeseburger"];

const allMenuIdeas = [
  ...breakfastMenuIdeas,
  "Harvest Salad",
  "Southern Fried Chicken",
  ...dinnerMenuIdeas,
];

const saladIndex = allMenuIdeas.findIndex((idea) => {
  return idea === "Harvest Salad";
});

// for upadate salad index
// const finalAllMenuIdeas = [...allMenuIdeas.slice(0, saladIndex), "Garden Salad", ...allMenuIdeas.slice(saladIndex+1)];

// for delet salad Index
const finalAllMenuIdeas = [
  ...allMenuIdeas.slice(0, saladIndex),
  ...allMenuIdeas.slice(saladIndex + 1),
];

// console.log(allMenuIdeas);
// console.log(finalAllMenuIdeas);

// Challenge:
// In our restaurant, the chef has some favourite dishes in two different categories.
// The chef loves all dishes that start with "S", while the rest are regular dishes
// Use array destructoring to create arrays of the chefs favourite dishes of meat and
// fish, and to create arrays of the regular meat and fish dishes

// const fishDishes = [
//   "Salmon Rillettes",
//   "Grilled Tuna Provencal",
//   "Fish and Chips",
// ];
// const meatDishes = ["Lasagna", "Spaghetti", "Satay Chicken Skewers"];

// // Modify these four variables first
// let chefsFishDishes = fishDishes.filter((dishes) => dishes.toLowerCase().charAt(0) === "s");

// let regularFishDishes = fishDishes.filter((dishe) => dishe.toLowerCase().charAt(0) !== "s"
// );

// let chefsMeatDishes = meatDishes.filter((dishe) => dishe.toLowerCase().charAt(0) === "s"
// );
// let regularMeatDishes = meatDishes.filter((dishes) => dishes.toLowerCase().charAt(0) !== "s"
// );

// // Finally, use the spread operator to create these two arrays as well
// let chefsDishes = [...chefsFishDishes, ...chefsMeatDishes];
// let regularDishes = [...regularFishDishes, ...regularMeatDishes];
// console.log(regularDishes, chefsDishes);


// const obj = {
//     fullName : "Shuaib Khan",
//     age : 23,
//     gender : "Male",
//     designation : "Web Developer"
// }

// Object.keys(obj).map((objKey)=>{
//     console.log(obj[objKey]);
    
// })


// const monthlyExpenses = {
//     food: 400,
//     rent: 1700,
//     insurance: 550,
//     internet: 49,
//     phone: 95  
//   };

//   const monthlyExpensesValues = Object.values(monthlyExpenses);
//   const total = monthlyExpensesValues.reduce((acc, value)=>{
// return acc + value;

//   },0)
  
//   console.log(total);
  


// const user = {
//   name: 'John',
//   age: 29  
// };

// const userKeys = Object.keys(user);
// const uservalues = Object.values(user);



// const users = {
//     '2345234': {
//       name: "John",
//       age: 29
//     },
//     '8798129': {
//       name: "Jane",
//       age: 42
//     },
//     '1092384': {
//       name: "Fred",
//       age: 17 
//     }
//   };

// const userKeyVal = Object.entries(users);

// const userOver20 = userKeyVal.reduce((acc, [id, user])=>{
//     acc.push({user, id});
//     return acc;
// },[])

// console.log(userOver20);



// const customerDishes = [
//     "Chicken Wings",
//     "Fish Sandwich",
//     "Beef Stroganoff",
//     "Grilled Cheese",
//     "Blue Cheese Salad",
//     "Chicken Wings",
//     "Reuben Sandwich",
//     "Grilled Cheese",
//     "Fish Sandwich",
//     "Chicken Pot Pie",
//     "Fish Sandwich",
//     "Beef Stroganoff"
//   ];

  
//   console.log(customerDishes.length);

//   const uniquesDishes = [...new Set(customerDishes)];
//   console.log(uniquesDishes.length)
  


// function about (){
//     console.log("I am about func.", this.name);
    
// }


// const obj1 = {
//     name : "Shuaib Khan",
//     age : 23
// }

// about.call(obj1)

// const bind = about.bind(obj1);
// bind();

// const obj2 = Object.create(obj1);
// console.log(obj2.__proto__);





// function User(){
//     const user = Object.create(User.prototype);
//     user.name = "Shuaib";
//     return user;
// }

// User.prototype.about = function(){
//     return `${this.name}`
    
// }
// console.log(User().about());



// const arr = [];
// console.log();


class Animal{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

   eat(){
    return `${this.name} eat grass`;
    
   }
}

const animal_1 = new Animal("Hourse", 4);
console.log(animal_1.eat());

