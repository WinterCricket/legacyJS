
function buttControl() {
var rightButton = document.getElementById('rightbutton'); 
 rightButton.value = "WTF?";
 //alert(document.value);

}

document.getElementById('leftbutton').onclick=function(){
	buttControl();
}
document.getElementById('rightbutton').onclick=function(){
	buttControl();
}