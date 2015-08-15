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
var x=secondFunction(3,4.3);
function secondFunction(a, b){
	return a+b;//returning the addition of two values passed
}
var result=document.querySelector("#demo");
result.innerHTML=x;
//object car
var car={name: "vne", //object properties
 series:"100", 
 model: 1999};
//accessing boject properties
result.innerHTML=car.series;
//another way of accessing object properties
result.innerHTML=car["model"];

//

//now lets make it global
thirdFunction();
function thirdFunction(){
	var resName="zne"; //local variable 
	resLastName="gurm";
	//document.querySelector("#demo").innerHTML=typeof resLastName; //local access
}
//outside accessing local variable, not accessible 
//global becomes  without use of keyword var
result.innerHTML=typeof resLastName;
//string as a string , as a object
var myCar="ven"; //typeof myCar is string
var mySecondCar=new String("vento");  // typeof is object
//== checks equal value
//===checks equal value and equal type as well

var stringOne="jagmeet gurm is the name of jagmeet";
var pos=stringOne.indexOf("gurm"); //will return the index where gurm is found the first time.
result.innerHTML=pos;
var posTwo=stringOne.lastIndexOf("jagmeet");//will return the last occurence of string jagmeet
result.innerHTML=posTwo;

var posThree=stringOne.search("gurm"); //same as indexOf

//string extraction
//will extract the word gurm as its first index position and upto position is passed
var extract=stringOne.slice(pos, pos+4);
result.innerHTML=extract;
