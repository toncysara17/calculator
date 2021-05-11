var arr=[10,11,21,22,23,24]
//total

var total=arr.reduce((no1,no2)=>no1+no2)
console.log(total);

//max

var high=arr.reduce((no1,no2)=>no1>no2?no1:no2)
console.log(high);

//min

var low=arr.reduce((no1,no2)=>no1<no2?no1:no2)
console.log(low);

//sort
arr.sort((no1,no2)=>(no1-no2))
console.log(arr);