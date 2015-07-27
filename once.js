function once(func) {
	var called = false;
	var context = this;
	return function() {
		var args = Array.prototype.slice.call(arguments);
		if (!called) {
			called = true;
			return func.call(this, args);
		}
	}
}

//test
var times = 0;

function calledOnce() {
	times++;
}

var onceCalled = once(calledOnce);
onceCalled();
onceCalled();
onceCalled();
console.log(times);