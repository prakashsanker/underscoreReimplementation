/*
Partially apply a function by filling in any number of its arguments, without changing its dynamic this value. 
A close cousin of bind. You may pass _ in your list of arguments to specify an argument that should not be pre-filled, 
but left open to supply at call-time.
*/
function partial(func) {
	var context = this;
	var originalArgs = Array.prototype.slice.call(arguments);
	var supplied = originalArgs.shift(); //don't want the original func
	var result;
	return function() {
		var args = Array.prototype.slice.call(arguments);
		var numberOfSuppliedArguments = 


		var newArgs = supplied.concat(args);
		return func.apply(context, newArgs);
	}
}