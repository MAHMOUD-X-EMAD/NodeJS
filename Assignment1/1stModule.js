var add = function (a,b){
    if(!isNaN(a) && !isNaN(b)){
        console.log(a + b);
    }
    else{
        console.log("Invalid Input")
    }
}


var sub = function (a,b){
    if(!isNaN(a) && !isNaN(b)){
        console.log(a - b);
    }
    else{
        console.log("Invalid Input")
    }
}



var multi = function (a,b){
    if(!isNaN(a) && !isNaN(b)){
        console.log(a * b);
    }
    else{
        console.log("Invalid Input")
    }
}



module.exports = {
    add : add,
    sub : sub,
    multi : multi
};