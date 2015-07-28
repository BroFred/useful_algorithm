/*
@param {Number} start   //start point
@param {Number} end     // length of array
@param {Number[]} nums  //base array
@param {Number[]} arr   //temp arr 
@param {Number[[]]} res //result array
*/
var re =function(start,end,nums,arr,res){
	for(var i=start;i <end; i++){
		if(i>start&&nums[i]===nums[i-1]){
			continue;
		}
		arr.push(nums[i]);
		res.push(arr.slice(0));
		re(i+1,end,nums,arr,res);
		arr.pop();
	}
}