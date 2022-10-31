/* Write a Program to convert an array of objects to an object
	based on a given key */


const data = [
		{ key: 1, name: "Sachin" },
		{ key: 2, name: "Amit" },
		{ key: 3, name: "Sandeep" },
		{ key: 4, name: "Sumit" },
		{ key: 5, name: "Mahesh" }
	  ]

	  const convert = (array,key) => {
		if(!Array.isArray(array)){
			return null;
		}
		const res=(array,key)=>
		array.reduce((obj,item)=>{
			obj[item[key]]=item
			return obj
		},{});
		return res(array,key)
	};

	console.log(convert(data, "key"));

/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
			'2': {id: 2, value: 'xyz'}
		 }


*/

module.exports = convert;
