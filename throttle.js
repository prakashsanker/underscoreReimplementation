/*
Implementing throttle function -

Creates and returns a new, throttled version of the passed function, that, when invoked repeatedly, 
will only actually call the original function at most once per every wait milliseconds. 
Useful for rate-limiting events that occur faster than you can keep up with.

So returning a function that calls func
So I call the function over and over again, but it will only call it once per every wait period.

setInterval will call the function once every wait period 

but that's not we want -- we want to decrement a counter 

call the throttled function
check if we are within the wait period
if we are within the wait period - do not execute the function
if we are not within the wait period - execute the function


*/


function throttle(func, wait) {
	 function () {
		var maxWait = wait;
		var wait = wait;
		setInterval(function(){
			wait = wait - 1;
		}, 1);

		return function () {
			if (wait === 0 || wait === maxWait) {
				return func.apply(this , Array.prototype.slice.call(func.arguments));
			} 
		}
	}();
}