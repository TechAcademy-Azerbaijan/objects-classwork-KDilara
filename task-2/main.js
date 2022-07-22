let children = [
  {title:'Aytac', weight: 22}, 
  {title:'Aynur', weight: 33}, 
  {title:'Murad', weight: 30}, 
  {title:'Dadaş', weight: 28}, 
  {title:'Seymur', weight: 25}, 
  {title:'Leyla', weight: 42}, 
  {title:'Lalə', weight: 35}, 
  {title:'Samir', weight: 39}, 
]
let maxAge = -Infinity;
for(obj of children){
  if(obj.weight > maxAge){
    maxAge = obj.weight;
  }
}
console.log(maxAge);
