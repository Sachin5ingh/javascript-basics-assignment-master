/* Write a Program to Flatten a given n-dimensional array */

const flatten = (array) => {
    let num=Infinity;
	return Array.isArray(array)? num>0 ?
	array.reduce((actual,val)=>actual.concat(Array.isArray(val)?
	flatten(val,num-1):val),[])
	:array.slice():null;
};

console.log(flatten([1, [2, 3], [[4], [5]]]))

/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;
