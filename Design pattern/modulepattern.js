let fnc=  (function(){return 12;})(); //imeediately invoked function expression (IIFE) to create a new scope and avoid polluting the global namespace

console.log(fnc); // Output: 12