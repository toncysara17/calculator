//Array.........it is a collection same or different types of objects
///different data types can be stored..............[1000,'ajay',true]

//for i of 


var expense=[10000,20000,50000,3000]


//add 5000 in jan 
expense[0]=expense[0]+5000
console.log(expense);


//above 20000 salary
// using loop

for(i=0;i<expense.length;i++){
    if(i>20000){
        console.log(expense[i]);
    }
}

//highest salary
// using sort
expense.sort((num1,num2)=>(num1-num2) ) //-1 means ascending order to descending order   +1 means desc to asc
console.log(expense);



//add salary may



expense[push]=5000
console.log(expense);

//remove salary in last position
expense[pop]=5000
console.log(expense);



