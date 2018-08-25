

//switch to an argument
function buttControl(aButt) {
var button = document.getElementById(aButt); 
 button.value = "WTF?";
 //alert(document.value);

}

document.getElementById('leftbutton').onclick=function(){
	buttControl(this.id);
}
document.getElementById('rightbutton').onclick=function(){
	buttControl(this.id);
}

//info return func
// 
function singleReturn(name, place) {
	return "You are " + name + " from " + place;
 }

function multiReturn(name, ice_cream_flavor, place) {
	var fullName = "customer's full name: " + name ;
	var flavor = "\ncustomer's created ice cream flavor: " + ice_cream_flavor ;
	var home = "\nhome town of customer: " + place;
	var customerInfo = [fullName, flavor, home];
	//return name + ", take your " + ice_cream_flavor + " ice cream back to " + place + ", and stay there!";
	return customerInfo;
}

// document.getElementById('returnButton').onclick=function(){
// 	singleReturn();
// }
 alert(singleReturn("Dog Butt", "Cordova, Spain"));

var saraArray =  multiReturn("Sara Smitch", "Poo Pudding Spice", "Lansing, Michigan");

alert(saraArray[1]);
console.log(saraArray);

function ageCheck(age){

	if(age >= 18) {
		alert("Welcome to the club. Strip!");

	} else {
		alert("Go home and watch TV, kid!");
	}
}
 
ageCheck(5);




var global = "This is global, baby!";

function variableScope() {

	var localVary = "This is a local variable, suma!";
	return localVary;
}

alert(variableScope());
//alert(global);