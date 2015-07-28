/*
@param {Number[]} nums //base array must be sorted
@param {Number []} arr //temp array
@param  {Number[]} res //result array
*/
var re=function(nums,arr,res){
    if(nums.length===0){
        res.push(arr.slice(0));
        return;
    }
    var len=nums.length;
    var temp;
    for(var i=0;i<len;i++){
        if(nums[i-1]===nums[i]){
            continue;
        }
        temp=nums[i];
        arr.push(nums[i]);
        nums.splice(i,1)
        re(nums,arr,res);
        nums.splice(i, 0, temp);
        arr.pop();
    }
};