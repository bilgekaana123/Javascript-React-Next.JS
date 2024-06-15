To use React in your newly created project, load two React scripts from an external website called unpkg.com:

react is the core React library.
react-dom provides DOM-specific methods that enable you to use React with the DOM.

What is JSX?
JSX is a syntax extension for JavaScript that allows you to describe your UI in a familiar HTML-like syntax. The nice thing about JSX is that apart from following three JSX rules, you don't need to learn any new symbols or syntax outside of HTML and JavaScript.

But browsers don't understand JSX out of the box, so you'll need a JavaScript compiler, such as a Babel, to transform your JSX code into regular JavaScript.
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/jsx">
