var shuffleProps = require('./shuffleProps');

function getProperties(obj) {
	var arr = [];
	
	for (var prop in obj){
		arr.push(prop);
	}
	
	return arr;
}

describe('shuffleProps', function() {
	
	var data = {};
	
	function cleanData() {
		data = { a:1, b:2, c:3, d:4, e:5 };
	}
	
	it('Properties aren\'t in the same order', function(done) {
		
		var pass = false;
		
		for(var i=0; i<100; i++){
			cleanData();
			var shuffled = shuffleProps(data);
			
			var dProps = getProperties(data);
			var sProps = getProperties(shuffled);
			
			for(var j=0;j<dProps.length;j++){
				if(dProps[j] != sProps[j]){
					pass = true;
					break;
				}
			}
			
		}
		
		if (pass) {
			done();
		} else {
			throw new Error('After 100 shuffles, the properties were all still in the same order');
		}
		
	});
	
});


