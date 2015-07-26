/*
	This was found here: http://blog.corrlabs.com/2011/02/shuffling-object-properties-in.html
*/
module.exports = function(obj) {
	var shuffledObj = {};
	var props = getProperties(obj);
	
	props.shuffle();
	props = shuffleArray(props);
	
	for (var prop in props) {
		shuffledObj[props[prop]] = obj[props[prop]];
	}
	
	return shuffledObj;
};

function getProperties(obj) {
	var arr = [];
	
	for (var prop in obj){
		arr.push(prop);
	}
	
	return arr;
}

function shuffleArray(arr) {
	for (var i = 0; i < arr.length; i++) {
		var a = arr[i];
		var b = Math.floor(Math.random() * arr.length);
		arr[i] = arr[b];
		arr[b] = a;
	}
	return arr;
}