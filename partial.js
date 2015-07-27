/*
Partially apply a function by filling in any number of its arguments, without changing its dynamic this value. 
A close cousin of bind. You may pass _ in your list of arguments to specify an argument that should not be pre-filled, 
but left open to supply at call-time.
*/
function partial(func) {
	var context = this;
	var originalArgs = Array.prototype.slice.call(arguments);
	var supplied = originalArgs.shift(); //don't want the original func //(_, 9 , 3)
	var result;
	return function() {
		var args = Array.prototype.slice.call(arguments); //[1, 3]
		var newArgs = [];
		for(var i = 0; i < originalArgs.length; i++) {
				if (originalArgs[i] === "_") {
					newArgs[i] = args.shift(); //[3]
				} else {
					newArgs[i] = originalArgs[i]; //[1, 9, 3 ]
				}
		}
		newArgs = newArgs.concat(args);
		return func.apply(context, newArgs);
	}
}

//test cases

function subtract(a, b) {
    return a - b;
}

function subtract2(a, b, c, d) {
    return a - b - c - d;
}

var subtest = partial(subtract2, "_", 9, 3);
subtest(1,3);


subtest = partial(subtract2, "_", "_", "_", "_");
subtest(1,1,1,1);

subtest = partial(subtract2);
subtest(1,1,1,1);
