

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
function singleReturn(args) {
	return "You returned info, you clumsy prick. " + args;
// }

// function multiReturn() {
// 	alert("Bloody Clicked!");
// }

// document.getElementById('returnButton').onclick=function(){
// 	singleReturn();
}
alert(singleReturn("You're passing notes in class."));