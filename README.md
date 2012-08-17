priority-bucket.js
==================
This is a small script to create a priority bucket, which functions like an array that allows you to arbitrarily define the order of item traversal.

Usage
=======
Constructor:
```javascript
var bucket = new PriorityBucket();
```

Pushing Items:
```javascript
bucket.push(item); // Pushes with a default priority of zero.
bucket.push(item2, 68);
bucket.push(item3, 200);
bucket.push(item4, -20);
bucket.push(item5, 50); // Now, traversal order is: [item3, item2, item5, item, item4]
```

Bucket Traversal:
```javascript
bucket.each(function(item){
	console.log('Look, it\'s '+item+'!');
});
```