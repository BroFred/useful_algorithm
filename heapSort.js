/*
p:n c:2n+1 2n+2
@param {Number[]} arr
*/
var createHeap=function(arr){
	var r=[];
	var len=arr.length;
	var t;
	var n;
	for(var i=0;i<len;i++){
		r.push(arr[i]);
		n=i;
		while(r[parseInt((n-1)/2)]<r[n]){
			t=r[parseInt((n-1)/2)];
			r[parseInt((n-1)/2)]=r[n];
			r[n]=t;
			n=parseInt((n-1)/2);
		}
	}
	return r;
}
/*
@param {Number[]} arr
@param {Number[]} r
*/
var hsort=function(arr,r){
	if(arr.length===1){
		r.push(arr.shift());
		return;
	}
	r.push(arr.shift());
	arr.unshift(arr.pop());
	var len=arr.length;
	var t;
	for(var i=0;i<len;i++){
		if(arr[i]>arr[2*i+1]&&(!arr[2*i+2]||arr[i]>arr[2*i+2])){
			break;
		}
		if(arr[2*i+1]<arr[2*i+2]&&arr[2*i+2]){
			t=arr[2*i+2];
			arr[2*i+2]=arr[i];
			arr[i]=t;
			i=2*i+1;
		}
		else{
			if(arr[2*i+1]){
				t=arr[2*i+1];
				arr[2*i+1]=arr[i];
				arr[i]=t;
				i=2*i;
			}
		}
	}
	hsort(arr,r);
}
