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
<!-- Google custom search box Start -by BloggerSentral.com -->
<div class='cse' style='color:#000000;float:right; margin: 15px 0 5px 300px ;'>
<form action='http://www.google.com/cse' id='cse-search-box'>
<input name='cx' type='hidden' value='partner-pub-4409159435154980:sle4z0smh1f'/>
<input type='text' name='q' size='35' />
<input name='ie' type='hidden' value='ISO-8859-1'/>
<input type="submit" name="sa" value="Search" />
</form>
<script type="text/javascript" src="http://www.google.com/cse/brand?form=cse-search-box&amp;lang=en"></script>
</div>
<!-- Google custom search box End -->
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
<p>The elements of a vector are stored contiguously. Like all dynamic array implementations, vectors have low memory usage and good locality of reference and data cache utilization. Unlike other STL containers, such as deques and lists, vectors allow the user to denote an initial capacity for the container.
Vectors allow random access; that is, an element of a vector may be referenced in the same manner as elements of arrays (by array indices). Linked-lists and sets, on the other hand, do not support random access or pointer arithmetic.
The vector data structure is able to quickly and easily allocate the necessary memory needed for specific data storage, and it is able to do so in amortized constant time. This is particularly useful for storing data in lists whose length may not be known prior to setting up the list but where removal (other than, perhaps, at the end) is rare. Erasing elements from a vector or even clearing the vector entirely does not necessarily free any of the memory associated with that element.
<p>Array is most useful when the size requirement is known in advance. For example,
 if we know before hand that we have 50 integers, so we can declare an array 
of 50 integers. This will avoid wastage of space and allow quick search.</p>
<br></br>
<h3 id="advantage">Advantage </h3> 
<p>Vector is extremely useful for fast search results.
 If the index is known of the value, we can quickly go there. </p>
<p>A typical vector implementation consists, internally, of a pointer to a dynamically allocated array, and possibly data members holding the capacity and size of the vector. The size of the vector refers to the actual number of elements, while the capacity refers to the size of the internal array.
When new elements are inserted, if the new size of the vector becomes larger than its capacity, reallocation occurs. This typically causes the vector to allocate a new region of storage, move the previously held elements to the new region of storage, and free the old region.<p>
<p>Array is extremely useful for fast search results.
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
Unlike arrays, which are always of a fixed size, vectors can be grown. This can be done either explicitly or by adding more data. In order to do this efficiently, the typical vector implementation grows by doubling its allocated space (rather than incrementing it) and often has more space allocated to it at any one time than it needs. This is because reallocating memory can sometimes be an expensive operation.</p>
</div>
</body>
</html>

