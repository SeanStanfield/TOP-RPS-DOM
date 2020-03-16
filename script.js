//practice with function declarations vs function expresssions

function Sean(value){
    if (typeof(value) === "string"){
        return ("String")
    }
    else{
        return("not String")
    }
}
//This function uses the function declatation technique that I am used to


let Zoe = function(value){
    typeof(value) === "string" ? statement =  "string" : statement =  "not String" 
    return statement;
}

let sum = (a, b) => a + b;

let ask = (question, yes, no) => confirm(question) ? yes() : no();

// ask(
//     "Do you wish for your data to be sold",
//     function() { alert("mwahahaa");}, 
//     function() { alert("smart boi");}
// )

let capitalize = function(word){
    let Later = word.slice(1, word.length);
    let First = word.slice(0, 1);
    
    First = First.toUpperCase();
    Later = Later.toLowerCase();
    console.log(First + Later);
    return(First + Later);
}

capitalize("zoe");

function lastLetter(word){
    console.log(word[word.length -1]);
    return word[word.length];
}

lastLetter("zoe is cute");

let input;
do (input = prompt("enter a number greater than 100"))
while(input <100)


let n = 10;
for(i=2; i<n; i++){
    for(let j=2; j<i; j++){
        if(i % j == 0 && j!=i){
            alert(j, "is prime")
        }
    }
}