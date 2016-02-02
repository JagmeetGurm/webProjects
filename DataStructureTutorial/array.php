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
        <li> <a href="#disadvantage">Disadvantage</a></li>
<li><a href="#timecomplexity">Time Complexity</a></li>
          
      </ul>
      </div>

<br></br>
<br></br>
<div id="rightpane">
<h2 style="color: 	#191970;">Array</h2>
<br></br>
<h3 id="introduction">Introduction</h3>

<p>Array is a static sequence of memory location.  It is a collection of
items stored in consecutive manner. This means that we have to declare the 
size of this container in advance before using them and also the type of this container,
that is the type of data it will hold. Declaration of type is necessary for the 
typed languages like C/C++, Java. Though for languages like php, javascript, 
it is not required.</p>
<img src="stylesheet/array.png" alt="array">
<p>Example: in c++ language,<br></br>
int myArray[50];</p>
<br></br>
<p>This basically means that we have reserved space of 50 integers in our memory. 
Int is the data type, myArray is the name of the array and 50 in square brackets tells 
us the no of memory locations we have to save.</p>

<br></br>
<p>Vector is most useful when the size requirement is not known in advance. 
For example, if we dont know before hand how many integers we have, 
so we can use vector of integers . This will avoid wastage of space if we 
declared more but used less and allow quick search.
</p>
<br></br>
<h3 id="use">USE</h3>
<p>Array is most useful when the size requirement is known in advance. For example,
 if we know before hand that we have 50 integers, so we can declare an array 
of 50 integers. This will avoid wastage of space and allow quick search.</p>

<br></br>
<p>Arrays are used to implement mathematical vectors and matrices, as well as other kinds of rectangular tables. Many databases, small and large, consist of (or include) one-dimensional arrays whose elements are records.
Arrays are used to implement other data structures, such as heaps, hash tables, deques, queues, stacks, strings, and VLists.
One or more large arrays are sometimes used to emulate in-program dynamic memory allocation, particularly memory pool allocation. Historically, this has sometimes been the only way to allocate "dynamic memory" portably.
Arrays can be used to determine partial or complete control flow in programs, as a compact alternative to (otherwise repetitive) multiple IF statements. They are known in this context as control tables and are used in conjunction with a purpose built interpreter whose control flow is altered according to values contained in the array. The array may contain subroutine pointers (or relative subroutine numbers that can be acted upon by SWITCH statements) that direct the path of the execution.</p>
<h3 id="advantage">ADVANTAGE </h3> 
<p>Array is extremely useful for fast search results.
 If the index is known of the value, we can quickly go there. </p>
<p>Static arrays have a size that is fixed when they are created and consequently do not allow elements to be inserted or removed. However, by allocating a new array and copying the contents of the old array to it, it is possible to effectively implement a dynamic version of an array; see dynamic array. If this operation is done infrequently, insertions at the end of the array require only amortized constant time.</p>
<br></br>
<h3 id="disadvantage">DISADVANTAGE</h3>
<p>The insert and delete operations are very expensive because we have to
 shift the elements at the location onward where the element is inserted or deleted.</p>
<p>Static arrays have a size that is fixed when they are created and consequently do not allow elements to be inserted or removed. However, by allocating a new array and copying the contents of the old array to it, it is possible to effectively implement a dynamic version of an array; see dynamic array. If this operation is done infrequently, insertions at the end of the array require only amortized constant time.
Some array data structures do not reallocate storage, but do store a count of the number of elements of the array in use, called the count or size. This effectively makes the array a dynamic array with a fixed maximum size or capacity; Pascal strings are examples of this.</p><br></br>
<h3 id="timecomplexity">TIME COMPLEXITY</h3>
<p>The search operation has constant time complexity of O(1). 
The insert, delete operations have O(n), where n is the number of elements in the list. </p>

<p>Both store and select take (deterministic worst case) constant time. Arrays take linear (O(n)) space in the number of elements n that they hold.
In an array with element size k and on a machine with a cache line size of B bytes, iterating through an array of n elements requires the minimum of ceiling(nk/B) cache misses, because its elements occupy contiguous memory locations. This is roughly a factor of B/k better than the number of cache misses needed to access n elements at random memory locations. As a consequence, sequential iteration over an array is noticeably faster in practice than iteration over many other data structures, a property called locality of reference (this does not mean however, that using a perfect hash or trivial hash within the same (local) array, will not be even faster - and achievable in constant time). Libraries provide low-level optimized facilities for copying ranges of memory (such as memcpy) which can be used to move contiguous blocks of array elements significantly faster than can be achieved through individual element access. The speedup of such optimized routines varies by array element size, architecture, and implementation.</p></div>
</body>
</html>

