javascript_repository
=====================

A collection of multiple and different functions. 





js/libraries/classList.js
http://hacks.mozilla.org/2010/01/classlist-in-firefox-3-6/
https://developer.mozilla.org/media/uploads/demos/p/a/paulrouget/8bfba7f0b6c62d877a2b82dd5e10931e/hacksmozillaorg-achi_1334270447_demo_package/classList/classList.js



Array Shuffle //JavaScript Function
http://dzone.com/snippets/array-shuffle-javascript
//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]

shuffle = function(o){ //v1.0
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};



http://www.paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/
<!--[if lt IE 7]> <html class="ie ie6 lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>    <html class="ie ie7 lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>    <html class="ie ie8 lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class=""> <!--<![endif]-->


