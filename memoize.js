//Memoize takes a function and erturn 

function memoize(func, hashFunction) {
	var original = func;
	var store = {};
	return function() {
		var args = Array.prototype.slice.call(arguments); //[1,2]
		var key;
		if (typeof hashFunction !== "undefined") {
			key = hashFunction(args);
		} else {
			key = args + "";
		}
		if (typeof store[key] !== "undefined") {
			return store[key]; 
		} else {
			store[key] = original.apply(this, args);
			return store[key];
		}
	}
}