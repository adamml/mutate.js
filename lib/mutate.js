Object.prototype.mutate = function(pattern){
	function parseObject(obj,orig,cache){
		o = {};
		for(var prop in obj){
			if (!obj.hasOwnProperty(prop)) {
				continue;
			}
			if(typeof obj[prop]=='string'){
				if(obj[prop].substring(0,2)=='$.')
				{
					i = obj[prop].substring(2);
					if(i.indexOf('[')==-1){
						o[prop] = orig[i];
					}
					else{
						a = orig[i.split('[',1)[0]];
						e = 0;
						while(i.indexOf('[',e)!=-1){
							a = a[i.substring(i.indexOf('[',e)+1,
								i.indexOf(']',e))];
							e = i.indexOf(']',e)+1;
						}
						o[prop] = a;
					}
				}
				else{
					o[prop] = obj[prop];
				}
			}
			else if(typeof obj[prop]=='object'){
				ab = parseObject(obj[prop],orig,o);
				o = ab.cache;
				o[prop]=ab.o;
			}
		}
		if(cache==null){
			return o;
		}
		else
		{
			return {"o":o,"cache":cache}
		}
	};
	if(pattern == null){
		return this;
	}
	else if(typeof pattern != 'object'){
		throw "Error: On invocation: variable 'pattern' is not a JSON object.";
	}
	else{
		return parseObject(pattern,this);
	}
};
