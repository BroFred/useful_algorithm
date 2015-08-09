/*
param {number[number[]]} nums
*/
var msort=function(nums){
	if(nums.length===1){
		console.log(nums);
		return;
	}
	var nums2=[];
	var temp=[];
	var len=nums.length;
	for(var i=0;i<len;i=i+2){
		temp=[];
	while((nums[i]&&nums[i].length>0)||(nums[i+1]&&nums[i+1].length>0)) {
		if(!nums[i+1]){
			temp.push(nums[i].shift());
			continue;
		}
		if(!nums[i].length){
			temp.push(nums[i+1].shift());
			continue;
		}
		if(!nums[i+1].length){
			temp.push(nums[i].shift());
			continue;
		}
		if(nums[i]<nums[1+i]){
			temp.push(nums[i].shift());
		}
		else{
			temp.push(nums[1+i].shift());
		}
	}
		nums2.push(temp.slice(0));
	}
	msort(nums2);
}
msort([[1],[5],[2],[4],[6],[1]]);