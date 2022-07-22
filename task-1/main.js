let products = [
  { title: "Apple", weight: 12 },
  { title: "Chocolate", weight: 43 },
  { title: "Avocado", weight: 33 },
  { title: "Milk", weight: 32 },
  { title: "Bread", weight: 18 },
  { title: "Cherry", weight: 65 },
  { title: "Rice", weight: 76 },
  { title: "Orange", weight: 22 },
  { title: "Kiwi", weight: 7 },
];
let sum = 0;

let foods = ["Apple", "Avocado", "Cherry", "Orange", "Kiwi"];

for (obj of products) {
   if(foods.includes(obj.title)){
    sum=obj.weight+sum
   }

}
console.log(sum);
