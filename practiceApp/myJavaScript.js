/*using getElementId first 

document.getElementById("demo").innerHTML="Hi into JavaScript! "*/

/* using query selector */
document.querySelector("#demo").innerHTML="Hi again!"
var but=document.getElementById("buttonOne");
var number=document.querySelector("#num");
but.addEventListener('click', myFunction);
function myFunction(){
	var text;
	if(0<=number.value && number.value <=10){
text="entered value ok!";

	}
	else {
		text="wrong value entered. Please try again!" ;
	}//number added to a string gets treated as a string
	document.querySelector("#demo").innerHTML=text+23;
}