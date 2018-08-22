

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