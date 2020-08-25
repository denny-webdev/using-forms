function loginputs()

var myObj = {name: "Denny", lastname:"Zaravia", email:"denny.saravia@yahoo.com", phone:"801-548-2919", bloodtype:"0-Negative", age: 32};
var myJSON = JSON.stringify(myObj);
var myObj = JSON.parse(myJSON);
console.log(myJSON)
console.log("hello")