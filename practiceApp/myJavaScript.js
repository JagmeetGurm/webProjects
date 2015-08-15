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
	document.querySelector("#demo").innerHTML=text;
}
//different data types
var a=12; //integers
var b="jim"; //string
var c=[1,2,"hi, there"]; //array (can be )
var d={firstName: "jagmeet", lastName: "Gurm"}; //object
document.querySelector("#demo").innerHTML=c[2]; //shuld print string
document.querySelector("#demo").innerHTML=d.firstName; //shld print jagmeet

