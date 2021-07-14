const add = function(a,b) {
  return a+b;
	
};

const subtract = function(a,b) {
  return a-b;

	
};

  const sum = function(arr){
    const reducer = (sum, val) => sum + val;
    const initialValue = 0;
    return arr.reduce(reducer,initialValue);
    

};


const multiply = function(arr) {
  return arr.reduce((acc,item)=> acc *= item);
};

const power = function(a,b){
	let total = 1;
	for(i=0; i < b; i++){
	total *= a;
		}
    return total;
};

const factorial = function(n) {
  if (n === 0 || n === 1 ){
      return 1;
    }
  return n * factorial (n - 1);
  }

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
