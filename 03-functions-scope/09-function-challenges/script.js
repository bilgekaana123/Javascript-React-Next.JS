// Challenge 1
// function getCelsius(f) {
//    const celsius = ((f - 32) * 5) / 9;
//    return celsius;
// }

// Arrow function
const getCelsius = (f) => ((f - 32) * 5) / 9;

console.log(getCelsius(50));

// Challenge 2
function minMax(arr) {
   const max = Math.max(...arr);
   const min = Math.min(...arr);

   return {
      min,
      max,
   };
}

console.log(minMax([1, 2, 3, 4, 5]));

// Challenge 3
(function (length, width) {
   const area = length * width;
   const output = `The area of the rectangle is ${area}`;
   console.log(output);
})(10, 5);
