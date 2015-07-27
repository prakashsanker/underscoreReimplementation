function compose() {
	var functions = Array.prototype.slice.call(arguments);
	var context = this;
	return function() {
		var initialArgs = Array.prototype.slice.call(arguments);
		var result;
		for(var i = functions.length - 1; i >= 0; i--) {
			if (i === functions.length - 1) {
				result = functions[i].apply(context, initialArgs);
			} else {
				result = functions[i].call(context, result);
			}
		}
		return result;
	}
}

var greet    = function(name){ return "hi: " + name; };
var exclaim  = function(statement){ 
    return statement.toUpperCase() + "!"; };
var welcome = compose(greet, exclaim);
console.log(welcome('moe'));