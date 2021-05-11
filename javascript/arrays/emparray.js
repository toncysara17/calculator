var employees=[
    [100,"arun",25000,2,"developer"], 
    [101,"varun",26000,3,"developer"],
    [102,"ram",22000,1,"qa"],
    [103,"ravi",28000,2,"qa"]
]

// print employees whose salary>23000


//for(let emp of employees){
//    if(emp[2]>23000){
//        console.log(emp);
//    }
//}

// print developers details only


for(let emp of employees){
    if(emp[4]=="developer"){
        console.log(emp);
   }
}

//check for gender key is present
////console.log((!("gender")));



