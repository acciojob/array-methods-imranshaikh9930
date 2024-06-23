Array.prototype.myMap = function(callback) {

	const res = [];
	for(let i = 0 ; i< this.length;i++){
		res.push(callback(this[i],i,this));
	}

	return res;
	
	
    
  };
  
  Array.prototype.myFilter = function(callback) {

	  const res = [];
	  for(let i  = 0 ; i< this.length;i++){
		  if(callback(this[i] , i , this)){
			  res.push(this[i]);
		  }
	  }
	  return res;
  
  };
  
  Array.prototype.myReduce = function(callback, initialValue) {

	  let accumlator = initialValue;
	  let startIndex = 0;

	  if(accumlator === undefined){
		  if(this.length === 0){
			  throw new TypeError("Reduce OF empty array");
		  }

		  accumlator = this[0];
		  startIndex = 1;
	  }

	  for(let i = startIndex; i< this.length;i++){
		  accumlator = callback(accumlator,this[i],i,this);
	  }
	  return accumlator;
  };
  
  
module.exports = Array.prototype;
