
var employee=[
    {eid:1000,name:"varun",desig:"developer",salary:25000,join:1975,resign:1980},
    {eid:1001,name:"arun",desig:"developer",salary:26000,join:1975,resign:1981},
    {eid:1002,name:"ram",desig:"mrkt",salary:27000,join:1980,resign:1992},
    {eid:1003,name:"ravi",desig:"mrkt",salary:22000,join:1990,resign:1992},
    {eid:1004,name:"nikil",desig:"sales",salary:28000,join:1982,resign:1990},
    {eid:1005,name:"nivi",desig:"sales",salary:26000,join:1980,resign:1990}

]
//employee names only
//employee.map(emp=>emp.name).forEach(name=>console.log(name));

//print developers only
//employee.filter(emp=>emp.desig=="developer").forEach(emp=>console.log(emp));


//highest salary employee
//var emp=employee.reduce((emp1,emp2)=>emp1.salary>emp2.salary?emp1:emp2)
//console.log(emp);

//sort employee according with their salary

//employee.sort((emp1,emp2)=>emp1.salary>emp2.salary?-1:1).forEach(emp=>console.log(emp));

//another method

//employee.sort((emp1,emp2)=>emp1.salary-emp2.salary).forEach(emp=>console.log(emp));

//print employee details exp > 6 years

employee.filter(emp=>(emp.resign-emp.join)>6).forEach(emp=>console.log(emp));
    
