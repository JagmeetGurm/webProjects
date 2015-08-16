//For the whole exercise, w3schools website has been used: http://www.w3schools.com/js

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
// using slice
var extract=stringOne.slice(pos, pos+4);
result.innerHTML=extract;

//using substring method
var extractTwo=stringOne.substring(pos+5, pos+7); //should print is
result.innerHTML=extractTwo;

//substr , two parameters it take, first is start index, 2nd is lenghth

var extractThree=stringOne.substr(pos+5, 2 );
result.innerHTML=extractThree;

//replace a part of string  and then retursn the new complete string
var replaceString=stringOne.replace("gurm", "singh");
result.innerHTML=replaceString;

//extracting CHARACTERS
//using charAt
var extractChar=stringOne.charAt(4); //returns the char at the stringOne
result.innerHTML=extractChar;

//converting string into array
//will use the split method for it
//splitting at ' ', ie space

var splitString=stringOne.split(' ');
result.innerHTML=splitString[1]; //should print gurm

//nubmer mehtod to convert varibal to number
var newVariable="200";
//lets make a nubmer 200
result.innerHTML=Number(newVariable) + 100; //the ans shd be 300

//math mehtods
var highInteger=Math.ceil(4.2);//5
result.innerHTML=highInteger;
  result.innerHTML=Math.floor(4.8); //4

  //array 
  motor=["hero",
  "bajaj",
  "tata",
  34 //different data type 
  ];
  result.innerHTML=motor[1];  //accessing 2nd element from array
  result.innerHTML=motor[3] + 50; //accessing diff data type
//adding elemnts to array
motor.push("yamaha").
//now accessing it
//result.innerHTML=motor[4]; //

//looping through the array and printing elements in bullet

// loop through an array
//not working some modification needed
function myFunction4(){
var i;
var carTwo=["zen", "800", "car1", "acar"]
	var text="<ul>";
for(i=0; i<carTwo.length;i++){
	text=text+"<li>"+carTwo[i]+ "</li>";
	//
}
text+="</ul>";
result.innerHTML=text;
}
but.addEventListener("click", myFunction4);