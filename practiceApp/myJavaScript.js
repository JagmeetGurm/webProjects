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

//defining and then calling function
//calling first and then defining
hoistingCheck();
function hoistingCheck(){
	var x=5;
	result.innerHTML=x +" " + y; //y will be undefined because it is initialized below after using
	var y=7;
}
//hoistingCheck(); //first defining and then callingy1
//avoid using new() for declaring new object
//instead do this
var y1=""; //new primitive string
var y2=0; //new primitive number
var y3=false; //new primitive boolean
var y4={}; //new  object
var y5=[]; //new array
var y6=/()/; // new regexp object
var y7=function(){}; //new function object


function truck(n, m){
	//var name1, model1;
	this.name1=n;
	this.model1=m;

}
var t1= new truck("jim", 1989);
result.innerHTML=t1.model1; //shd print jim


//== converts data type  but === doesnot 
//so, 1=="1" is true but 1==="1" is false

//different ways fo creating object
//1. using object literal, the easiest way
var laptop={name: "asus", model: "tiachi"};
//only one can be created

//2. using new 
var laptop2=new Object();
laptop2.name4="h";
laptop2.model="t100";

//3. usng object constructor
//object constructor fun tion, very similar to OO c++
function laptop3(n, m){
	this.name4=n;
	this.model=m;

}
var l1=new laptop3("ace", "n series");
var l2=new laptop3("to", "z");
result.innerHTML=l1.name4;

//Javascript objects are mutable: they are addressed by referenced
//not by value 
var z1= {name30: "jim", age: 26};
var z2=z1;
//now z2 also points to the same object as z1
z2.name30="harry"; //name of z1 will also get changed 
result.innerHTML=z1.name30;

//properties can be added to object even after it is declared
z1.phone=3554;
result.innerHTML=z2.phone;

//deleting a property
delete z1.age; //this will delete object age property

//object constructor with function

function myName(f, l) {
	this.first=f;
	this.last=l;
	this.fullName = function (){
		return this.first + " " + this.last;
	};

}

//creating object of myName
var jag= new myName("jim", "gurm");
result.innerHTML=jag.fullName(); //calling function()

//function as an expresssion
var exp=function(a,b) {
	return a * b;
};

//calling function
result.innerHTML=exp(4,5); //shd be 20

var paper = Raphael(10, 50, 320, 200);

// Creates circle at x = 50, y = 40, with radius 10
var circle = paper.circle(50, 40, 10);