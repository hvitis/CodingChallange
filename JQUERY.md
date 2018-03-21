jQuery Functions
During the training we’ll be using jQuery (http://jquery.com/) for DOM manipulations,
HTTP Requests, and JSONP calls. jQuery became a de facto standard because of its
$ object or function, which provides a simple yet efficient way to access any HTML
DOM element on a page by its ID, class, tag name, attribute value, structure, or any
combination thereof. The syntax is very similar to CSS, where we use # for id and . for
class selection. For example:
$('#main').hide()
$('p.large').attr('style','color:red')
$('#main').show().html('<div>new div</div>')
Here is the list of most commonly used jQuery API functions:
• find() (http://api.jquery.com/find): Selects elements based
on the provided selector string
• hide() (http://api.jquery.com/hide): Hides an element if it
was visible
• show() (http://api.jquery.com/show): Shows an element if it
was hidden
• html() (http://api.jquery.com/html): Gets or sets an inner
HTML of an element
• append() (http://api.jquery.com/append) Injects an element
into the DOM after the selected element
• prepend() (http://api.jquery.com/prepend) Injects an
element into the DOM before the selected element
• on() (http://api.jquery.com/on): Attaches an event listener to
an element
• off() (http://api.jquery.com/off) Detaches an event listener
from an element
attribute value of an element
• attr() (http://api.jquery.com/attr) Gets or sets any
attribute of an element
• val() (http://api.jquery.com/val): Gets or sets the value
attribute of an element
• text() (http://api.jquery.com/text): Gets the combined text
of an element and its children
• each() (http://api.jquery.com/each): Iterates over a set of
matched elements
Most jQuery functions act not only on a single element, on which they are called,
but on a set of matched elements if the result of the selection has multiple items. This
is a common pitfall that leads to bugs, and it usually happens when a jQuery selector is
too broad.
Also, jQuery has many available plug-ins and libraries that provide a rich user
interface or other functionality. For example:
• jQuery UI (http://jqueryui.com/)
• jQuery Mobile (http://jquerymobile.com/)


 Basic syntax is: $(selector).action()
- A $ sign to define/access jQuery
 - A (selector) to "query (or find)" HTML elements
  - A jQuery action() to be performed on the element(s)


$("p").hide() - hides all <p> elements.

$(".test").hide() - hides all elements with class="test".
    
$("#test").hide() - hides the element with id="test".

$(document).ready(function(){

    // jQuery methods go here...
 
 });

$("*")	Selects all elements
$(this)	Selects the current HTML element
$("p.intro")	Selects all <p> elements with class="intro"
$("p:first")	Selects the first <p> element
$("ul li:first")	Selects the first <li> element of the first <ul>
$("ul li:first-child")	Selects the first <li> element of every <ul>
$("[href]")	Selects all elements with an href attribute
$("tr:even")	Selects all even <tr> elements
$("tr:odd")	Selects all odd <tr> elements
$(":checked")
$(":selected")
$(":image")