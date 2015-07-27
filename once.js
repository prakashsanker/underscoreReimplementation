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