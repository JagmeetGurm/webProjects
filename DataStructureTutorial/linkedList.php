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
<h2 style="color: 	#191970;">Linked List</h2>
<br></br>
<h3 id="introduction">Introduction</h3>

<p>Linked List is a dynamic storage location.  But the big difference from array and vector is that collection of items are stored in non- consecutive manner. This means that we have to do not have to declare the size of this container in advance before using them. Further, it can contain different type of elements the type of this container, though all the elements in each node will hold. Further, each node points to the next node in the list, that is it contains the address fo the next node. Declaration of type is necessary for the typed languages like C/C++, Java. </p>
<br></br>
<br></br>
<p>
Example: in c++ language,<br></br>
Class node{ <br></br>
Public: <br></br>
Int number; <br></br>
Node next; <br></br>
} <br></br>
Class Linked{ <br></br>
Public: <br></br>
Linked(){<br></br>
Node *nn; <br></br>
Nn=new Node; <br></br>
} <br></br>
Private: <br></br>
Node Front; <br></br>
} <br></br>
</p>
<br></br>
<p>
This means we create a node of integers which also points to the next address. The linked list class creates the list of nodes by joining them through the addresses.
</p>

<img src="stylesheet/linkimage.png" alt="linked list">
<br></br>
<h3 id="use">Use</h3>
<p>Linked list is most useful when the size requirement is not known in advance and the data is large. For example, if we dont know before hand how many integers we have, so we can use it. It is also extremely useful when the space is limited and we may not have enough consecutive space. 

.</p>
<br></br>
<h3 id="advantage">Advantage </h3> 
<p>Linked list is extremely useful for insertion and deletion. Just need to readjust the addresses, that is the pointers.  </p>
<p>Linked lists are a dynamic data structure, allocating the needed memory while the program is running.
Insertion and deletion node operations are easily implemented in a linked list.
Linear data structures such as stacks and queues are easily executed with a linked list.
They can reduce access time and may expand in real time without memory overhead.</p><br></br>
<h3 id="disadvantage">Disadvantage</h3>
<p>The search operation is very expensive because we have to start at the front and traverse the list till we find the target element.</p>
<p>They have a tendency to use more memory due to pointers requiring extra storage space.
Nodes in a linked list must be read in order from the beginning as linked lists are inherently sequential access.
Nodes are stored incontiguously, greatly increasing the time required to access individual elements within the list.
Difficulties arise in linked lists when it comes to reverse traversing. For instance, singly linked lists are cumbersome to navigate backwards[1] and while doubly linked lists are somewhat easier to read, memory is wasted in allocating space for a back pointer.</p><br></br>
<h3 id="timecomplexity">TIME COMPLEXITY</h3>
<p>The search operation has  time complexity of O(n). The insert, delete operations have O(1), where n is the number of elements in the list.  </p>
</div>
</body>
</html>

