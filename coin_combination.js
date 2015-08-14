//coin set 25 5 10
/*
@param{Number} m --target
@param{Set(Number)} c --coin set
@param{Number[]} arr --temp arr
@param{Number[]} res --result
*/
var findcom=function(m,c,arr,res){
	console.log(m,arr);
	if(m===0){
		res.push(arr.slice(0));
		return;
	}
	if(m<0){
		return;
	}
	if(m>25&&c.has(25)){
		arr.push(25);
		findcom(m-25,c,arr,res);
		c.delete(25);
		arr.pop();
		findcom(m,c,arr,res);
		c.add(25);
	}
	else{
		if(m>=10&&c.has(10)){
			arr.push(10);
			findcom(m-10,c,arr,res);
			c.delete(10);
			arr.pop();
			findcom(m,c,arr,res);
			c.add(10);
		}
		else{
			if(m>=5&&c.has(5)){
				arr.push(5);
				findcom(m-5,c,arr,res);
				c.delete(5);
				arr.pop();
				findcom(m,c,arr,res);
				c.add(5);
			}
		}
	}
}
/*test
var c=new Set([25,5,10]);
var arr=[];
var res =[];
findcom(35,c,arr,res);
console.log(res);
*/