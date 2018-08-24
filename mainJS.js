

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
	return name + ", take your " + ice_cream_flavor + " ice cream back to " + place + ", and stay there!";
}

// document.getElementById('returnButton').onclick=function(){
// 	singleReturn();
// }
 alert(singleReturn("Dog Butt", "Cordova, Spain"));

alert(multiReturn("Sara Smitch", "Poo Pudding Spice", "Lansing, Michigan"));


var global = "This is global, baby!";

function variableScope() {

	var localVary = "This is a local variable, suma!";
	return localVary;
}

alert(variableScope());
//alert(global);