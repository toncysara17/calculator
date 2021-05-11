//python dictionary-------------------data are stored in the form of key value pairs

//object------------------------------data are stored in the form of key value pairs




var employee={eid:1001,name:"varun",salary:10000,exp:2}

//how to print employee name

console.log(employee["name"]);

//update salary ==>30000

employee["salary"]=30000
console.log(employee);


employee["exp"]+=1
console.log(employee);

//check for gender key is present
console.log((!"gender" in employee));