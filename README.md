javascript_repository
=====================

A collection of multiple and different functions. 





js/libraries/classList.js
http://hacks.mozilla.org/2010/01/classlist-in-firefox-3-6/
https://developer.mozilla.org/media/uploads/demos/p/a/paulrouget/8bfba7f0b6c62d877a2b82dd5e10931e/hacksmozillaorg-achi_1334270447_demo_package/classList/classList.js



Array Shuffle //JavaScript Function
http://dzone.com/snippets/array-shuffle-javascript
//+ Jonas Raoni Soares Silva


<h2>Tutorials</h2>
<ul>
  <li>developer.mozilla.org
    <ul>
      <li><a title="The push() method adds one or more elements to the end of an array and returns the new length of the array." href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push"><code>push</code></a> / <a title="The pop() method removes the last element from an array and returns that element." href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop"><code>pop</code></a> - add/remove elements from the end of the array;</li>
      <li><a title="The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array." href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift"><code>unshift</code></a> / <a title="The shift() method removes the first element from an array and returns that element. This method changes the length of the array." href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift"><code>shift</code></a> - add/remove elements from the beginning of the array;</li>
      <li><a title="The splice() method changes the content of an array, adding new elements while removing old elements." href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice"><code>splice</code></a> - add/remove elements from the specified location of the array.</li>
      <li><a title="The concat() method combines the text of two or more strings and returns a new string." href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat"><code>String.prototype.concat</code></a></li>
    </ul>
  </li>
</ul>

<h2>Techniques</h2>
<ul>
  <li>Function decompilation aka Function serialisation
    <ul>
      <li><a href="http://blog.buymeasoda.com/understanding-john-resigs-simple-javascript-i/" target="_blank">understanding-john-resigs-simple-javascript-i</a></li>
    </ul>
  </li>

  <li>
    <h5><a href="https://carldanley.com/javascript-design-patterns/" target="_blank">JavaScript Design Patterns</a></h5>
    © Copyright 2014 - Carl Danley
    <ul>
      <li><a href="http://carldanley.com/js-module-pattern/" target="_blank">The Module Pattern</a></li>
      <li><a href="http://carldanley.com/js-revealing-module-pattern/" target="_blank">The Revealing Module Pattern</a></li>
      <li><a href="http://carldanley.com/js-singleton-pattern/" target="_blank">The Singleton Patter</a></li>
      <li><a href="http://carldanley.com/js-observer-pattern/" target="_blank">The Observer Patter</a></li>
      <li><a href="http://carldanley.com/js-mediator-pattern/" target="_blank">The Mediator Patter</a></li>
      <li><a href="http://carldanley.com/js-prototype-pattern/" target="_blank">The Prototype Patter</a></li>
      <li><a href="http://carldanley.com/js-facade-pattern/" target="_blank">The Facade Patter</a></li>
      <li><a href="http://carldanley.com/js-factory-pattern/" target="_blank">The Factory Pattern</a></li>
    </ul>
  </li>

</ul>


<h2>Articles</h2>

<ul>
  <li>
    <ul>
      <li><a href="http://stackoverflow.com/a/4484449/1021122" target="_blank">Underscore prefix for property and method names in JavaScript</a></li>
      <li><a href="https://blog.jcoglan.com/2012/01/19/the-cost-of-privacy/" target="_blank">The cost of Privacy</a></li>
      
      <li><a href="http://ejohn.org/blog/simple-javascript-inheritance/" target="_blank">Simple Javascript Inheritance</a></li>
    </ul>
  </li>
</ul>

<h3><a href="http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html" target="_blank">JavaScript Scoping and Hoisting</a></h3>

<h3><a href="http://kangax.github.io/nfe/" target="_blank">Named function expressions demystified</a></h3>
<p><a href="http://perfectionkills.com/" target="_blank">Juriy "kangax" Zaytsev</a></p>

<h3><a href="http://www.adequatelygood.com/Object-to-Primitive-Conversions-in-JavaScript.html" target="_blank">Object to Primitive Conversions</a></h3>



<h2>JavaScript Conferences</h2>
<ul>
  <li><a href="http://www.infoq.com/javascript/?utm_source=infoq&utm_medium=header_graybar&utm_campaign=topic_clk">InfoQ.com</a></li>
</ul>



<h2>Glossary</h2>
<dl>
<dt>AssignmentExpression</dt>
<dd></dd>
<dt>Implied Globals</dt>
<dt>Augmentation</dt>
<dt>Loose augmentation & Tight augmentation</dt>
<dd>http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html</dd>
<dt>Function-level scope</dt>
<dd>JavaScript has function-level scope. This is radically different from the C family. Blocks, such as if statements, do not create a new scope. Only functions create a new scope.

<p>
<code>
function test() {
	foo(); // TypeError "foo is not a function"
	bar(); // "this will run!"
	var foo = function () { // function expression assigned to local variable 'foo'
		alert("this won't run!");
	}
	function bar() { // function declaration, given the name 'bar'
		alert("this will run!");
	}
}
test();
</code></p>

</dd>
</dl>
