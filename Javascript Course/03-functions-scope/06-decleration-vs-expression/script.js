console.log(addDollarSign(100));
// Function Declaration (You can call before defining)
function addDollarSign(value) {
   return '$' + value;
}

// Function Expression
const addPlusSign = function (value) {
   return '+' + value;
};

console.log(addPlusSign(200));
