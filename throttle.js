// throttle_.throttle(function, wait, [options]) 
// Creates and returns a new, throttled version of the passed function, that, 
//when invoked repeatedly, will only actually call the original function at most
// once per every wait milliseconds. If called during wait, function will be called again after wait period is over. 

function throttle(func, wait) {
	var context = this;
	var intervalId;
	var time = wait;
	var calledMultiple = false;
	return function() {
		var args = Array.prototype.slice.call(arguments);
		var timeoutId;
		function countdown() {
			time = time - 1;
			if (time === 0) {
				intervalId = clearInterval(intervalId);
			}
		}
		if(typeof intervalId === "undefined") {
			time = wait;
			intervalId = setInterval(countdown, 1);
			return func.call(context, this);
		} else {
			//still in wait period, function is being called. 
			//do nothing, but after wait is done call again
			if (typeof timeoutId === "undefined") {
				setTimeout(function() {
					timeoutId = clearTimeout(timeoutId);
					//need to restart timer
					time = wait;
					intervalId = setInterval(countdown, 1);
					return func.call(context, this);
				}, time);
			}

		}
	}
}

//cases
//call multiple times in wait period - should only be called once
//call once, wait for wait to finish, call again
//call once, call again, should only be called twice. 


function timesCalled() {
	var nTimes = 0;
	return function() {
		nTimes++;
		return nTimes;
	}
}

