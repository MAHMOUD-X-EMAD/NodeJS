var nameWithDate = function (name , date ){

    var current = Date.now()

    var dateDiff = Date.now() - date.getTime();
    var age = new Date(dateDiff); 
  if((age.getUTCFullYear() - 1970) > 0){
      
    console.log("Hello "+name+ " Your age now = "+ (age.getUTCFullYear() - 1970));
  }
  else{
    console.log("Date Isn't Valid")
  }

    
}

module.exports = {
    NWD : nameWithDate
};