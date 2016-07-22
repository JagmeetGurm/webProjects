<!DOCTYPE html>
<head>
<title>Array Data Structure</title>
 <meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" type ="text/css" href="stylesheet/css/main.css">
</head>
<body>

       
      <ul class="horizontal">
         <li id ="d"><a id="data" href="index.php" >Data Structure Tutorial</a></li>
        <li><a href="array.php">Array</a></li>
        <li><a href="vector.php">Vector</a></li>
        <li><a href="linkedList.php">Linked List</a></li>
        <li> <a href="tree.php">Binary Search Tree</a></li>
<li>

</li>
      </ul>
      <div class="leftmenu">
      <ul class="vertical">
  <li id ="quick"><a id="quick" href="#data">Quick Links</a></li>
        <li> <a href="#introduction">Introduction</a></li>
        <li> <a href="#use">Use</a></li>
        <li> <a href="#advantage">Advantage</a></li>
        <li> <a href="#Disadvantage">Disadvantage</a></li>
<li><a href="#timecomplexity">Time Complexity</a></li>
          
      </ul>
      </div>

<br></br>
<br></br>
<div id="rightpane">
<h2 style="color: 	#191970;">Vector</h2>
<br></br>
<h3 id="introduction">Introduction</h3>

<p>Vector is a dynamic array.  It is a collection of items stored in consecutive manner.
This means that we have to do not have to declare the size of this container in advance 
before using them. The declared type of this container, that is the type of data it will
hold. Declaration of type is necessary for the typed languages like C/C++, Java. Though 
for languages like php, javascript, it is not required.

Example: in c++ language,
Vector<int> myArray;
This basically means that we have created a vector of integers in our memory. 
Int is the data type, myArray is the name of the array and it is dynamic in size.
 Can increase in size as required. </p>
<img src="stylesheet/vector.png" alt="vector">
<br></br>
<h3 id="use">Use</h3>
<p>Vector is most useful when the size requirement is not known in advance. 
For example, if we dont know before hand how many integers we have, 
so we can use vector of integers . This will avoid wastage of space if we 
declared more but used less and allow quick search.
</p>
<br></br>

<br></br>
<h3 id="advantage">Advantage </h3> 
<p>Vector is extremely useful for fast search results.
 If the index is known of the value, we can quickly go there. </p>

<br></br>
<h3 id="disadvantage">Disadvantage</h3>
<p>The insert and delete operations are very expensive because we have to 
shift the elements at the location onward where the element is inserted or deleted.

 </p>
<br></br>
<h3 id="timecomplexity">Time Complexity</h3>
<p>The search operation has constant time complexity of O(1). 
The insert, delete operations have O(n), where n is the number of elements in the list. Vectors are much like arrays. Operations on a vector offer the same big O as their counterparts on an array. Like arrays, vector data is allocated in contiguous memory.
</div>
</body>
</html>

