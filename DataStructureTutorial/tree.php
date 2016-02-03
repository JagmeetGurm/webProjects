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
        <li> <a href="#disadvantage">Disadvantage</a></li>
<li><a href="#timecomplexity">Time Complexity</a></li>
          
      </ul>
      </div>

<br></br>
<br></br>
<div id="rightpane">
<h2 style="color: 	#191970;">Binary Search Tree</h2>
<br></br>
<h3 id="introduction">Introduction</h3>

<p>Binary Tree is a data structure in which every node has a parent node except the root. And every node has max of two nodes, that are its child nodes. </p><br></br>
<p> They allow fast lookup, addition and removal of items, and can be used to implement either dynamic sets of items, or lookup tables that allow finding an item by its key (e.g., finding the phone number of a person by name).</p><br></br>
<img src="stylesheet/binarytree.png" alt="binary">
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


<br></br>
<h3 id="use">Use</h3>
<p>Binary Search Tree is most useful when the size requirement is not known in advance and the data is large. For example, if we dont know before hand how many integers we have, so we can use it. It is also extremely useful when the space is limited and we may not have enough consecutive space. 

.</p>
<br></br>
<h3 id="advantage">Advantage </h3> 
<p>Binary Tree is most useful when the data needs to be represented in hierarchical order. When constructing a binary tree, if an element is less than the value of its parent-node, it is placed on left side of it otherwise right side. size requirement is not known in advance and the data is large. For example, if we dont know before hand how many integers we have, so we can use it. It is also extremely useful when the space is limited and we may not have enough consecutive space. Linked list is extremely useful for insertion and deletion. Just need to readjust the addresses, that is the pointers.  </p>
<br></br>
<h3 id="disadvantage">Disadvantage</h3>
<br></br>
<h3 id="timecomplexity">TIME COMPLEXITY</h3>
<p>The search operation has time complexity of O(lgn). The insert, delete operations have O(1), where n is the number of elements in the list. The search operation has  time complexity of O(n). The insert, delete operations have O(1), where n is the number of elements in the list.  </p>
</div>
</body>
</html>

