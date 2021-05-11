function dis(num){
    inpt.value+=num;

}
function evaluateExpression(){
    let val=inpt.value
    let result=eval(val)
    inpt.value=result
}

function cleared(){
    inpt.value='';
    
}
