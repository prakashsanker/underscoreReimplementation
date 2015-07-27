function compose() {
	var functions = Array.prototype.slice.call(arguments);
	var context = this;
	return function() {
		var initialArgs = Array.prototype.slice.call(arguments);
		var result;
		for(var i = functions.length - 1; i >= 0; i--) {
			if (i === functions.length - 1) {
				result = functions[i].call(context, initialArgs);
			} else {
				result = functions[i].call(context, result);
			}
		}
	}
}