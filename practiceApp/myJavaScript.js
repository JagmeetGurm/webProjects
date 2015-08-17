//For the whole exercise, w3schools website has been used: http://www.w3schools.com/js

/*using getElementId first 

document.getElementById("demo").innerHTML="Hi into JavaScript! "*/

/* using query selector */
var result=document.querySelector("#demo");//.innerHTML="Hi again!"
var but=document.getElementById("buttonOne");
var number=document.querySelector("#num");
//but.addEventListener('click', myFunction);
/*function myFunction(){
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
  result.innerHTML=Math.floor(8.8); //4
//result.innerHTML="hi";
//result.innerHTML="here";
  //array 
  motor=["hero",
  "bajaj",
  "tata",
  34 //different data type 
  ];
 // result.innerHTML="here";
//  result.innerHTML=motor[1];  //accessing 2nd element from array
 // result.innerHTML=motor[3] + 50; //accessing diff data type
//adding elemnts to array
motor.push("yamaha").
//now accessing it
//result.innerHTML=motor[4]; //
result.innerHTML="here";
//looping through the array and printing elements in bullet

// loop through an array
//not working some modification needed
//new array inserted inside function
//result.innerHTML="hi";

//but.addEventListener("click", myFunction4); */
myFunction4();
function myFunction4(){
	result.innerHTML="here";
var i;
var carTwo=["zen", "800", "car1", "acar"]
	var text2="<ul>";
for(i=0; i<carTwo.length;i++){
	text2=text2+"<li>"+carTwo[i]+ "</li>";
	//
}
text2+="</ul>";
result.innerHTML=text2;
}
//another way of declaring array
var middleName=[];
middleName[0]="singh";
middleName[1]="jsg";
middleName[2]="kumar";
middleName.push("king");
result.innerHTML=middleName[3];

//array to string conversion
result.innerHTML=middleName.valueOf();
//another way of converting array to string
result.innerHTML=middleName.toString();
//pushing and popping
//pushing=adding element at eend
middleName.push("yo");
result.innerHTML=middleName[middleName.length-1];
//popping=removing last element out of array
middleName.pop();
result.innerHTML=middleName[middleName.length-1];

//numerical sort
var nums=[3,6,2,1,9];
//lets sort the numbers
nums.sort(function(a, b){return (a-b);});
result.innerHTML=nums;

//if else statement

//greeeting function
var time=12;
greeting();
function greeting(){
if(time<10){
	greet="good morning";
}
else if(time<18){
	greet="good afternoon";
}
	else 
		greet="good evening";

result.innerHTML=greet;
}
//looping through object properties
var txt=" ";
var x2;
var names={first: "jagmeet", last: "gurm", middle: "singh", aka: "jsg"};
for(x2 in names){
	txt+=names[x2]+ " ";
}
result.innerHTML=txt;
var scooter=["bajaj", "vespa", "onda"];
//code block
var txt3=" ";
list:{
	
	txt3+=scooter[0]+ "<br>";
	txt3+=scooter[1]+ "<br>";
	break list;
	txt3+=scooter[2] + "<br>";


}
//txt3="</br>";
result.innerHTML=txt3;