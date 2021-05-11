var data="hai hello hai hello hai hello"
var dict={}
var words=data.split(" ")
for(let word of words){
    if(word in dict){
        dict[words]+=1;
    }
    else{
        dict[word]+=1;
    }
}
console.log(dict);
