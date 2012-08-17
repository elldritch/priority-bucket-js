/**
 * Creates a priority bucket. Priority buckets are essentially associative
 * arrays that map a priority to an array of values. This is useful for
 * iterating across an array in a specific order. Higher priority entries are
 * traversed first.
 */
(function() {
	"use strict";

	/**
	 * Constructor
	 */
	window.PriorityBucket = function() {
		// Create a bucket to hold all the prioritized items.
		this.bucket = {};
	};

	/**
	 * Push a value with a priority.
	 * 
	 * @param value
	 *            mixed The value to push.
	 * @param priority
	 *            int The priority; defaults to zero. Higher priorities are
	 *            traversed first.
	 */
	window.PriorityBucket.prototype.push = function(value, priority) {
		// Priorities default to zero.
		if (priority === undefined) {
			priority = 0;
		}
		// Make a new bucket if it doesn't already exist.
		if (this.bucket[priority] === undefined) {
			this.bucket[priority] = [];
		}
		// Push the value.
		this.bucket[priority].push(value);
	};

	/**
	 * Traverses the priority bucket with a callback.
	 * 
	 * @param func
	 *            callable A function with which to traverse the bucket. It is
	 *            passed the current item being traversed.
	 */
	window.PriorityBucket.prototype.each = function(func) {
		// Get all priorities.
		// Polyfill for Object.keys
		var priorities = [];
		if (!Object.keys) {
			for ( var priority in this) {
				priorities.push(priority);
			}
		} else {
			priorities = Object.keys(this.bucket);
		}
		// Sort by priority.
		priorities.sort(function(a, b) {
			return b - a;
		});
		// Iterate by priority.
		for ( var i = 0, lenA = priorities.length; i < lenA; i++) {
			var bucket = this.bucket[priorities[i]];
			for ( var j = 0, lenB = bucket.length; j < lenB; j++) {
				func(bucket[j]);
			}
		}
	};
})();