var qs=function(arr){
	if(arr.length){
		var pivot=arr.pop();
		var res=[pivot];
		var len=arr.length;
		var left=[];
		var right=[];
		var temp;
		for(var i=0;i<len;i++){
			temp=arr.pop();
			if(temp>pivot){
				right.push(temp);
			}
			else{
				left.push(temp);
			}
		}
		return qs(left).concat(res).concat(qs(right));
	}
	return [];
}