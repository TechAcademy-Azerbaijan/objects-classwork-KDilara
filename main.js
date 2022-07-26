//first task
var singleNumber = function(nums) {
    const obj={}
    for(el of nums){
          if(!obj[el] ){
            obj[el]=1;
          }else{
            obj[el]=obj[el]+1
              } 
    }
    for(key in obj){
        if(obj[key]==1){
            return key;
        }
    }
};
let arr= [4,1,2,1,2]
console.log(singleNumber(arr))
 

//second task 

var majorityElement = function(nums) {
    let max=-Infinity;
    let el;
    const obj={}
    for(el of nums){
          if(!obj[el] ){
            obj[el]=1;
          }else{
            obj[el]=obj[el]+1
              } 
    }
    for(key in obj){
        if(obj[key]>max){
           max=obj[key]
           el=key;
        }
    }
     return el;
};
let arr= [2,2,1,1,1,2,2]
console.log(majorityElement(arr))
