
/*
function add(x,y){
    if(typeof x !=="number" || typeof y !=="number"){
        return "Thik thak number dau"
    }
    return x+y;
}

console.log(add(7,"5"))
*/

function details(info){

    if(typeof info !== "object"){
        return "Thik Thak object dau"
    }else if( !info.name || !info.age){
        return "object must contain name and age property"
    }else if(typeof info.name !== "string" || typeof info.age !=="number"){
        return "name should be string , age should be number"
    }else if(info.age <=0){
        return "invalid"
    }
    return `My name is ${info.name} . My age is ${info.age}`
}

//console.log(details({name:"Subahan", age:21}))
console.log(details({name:"subahan", age:21}))
