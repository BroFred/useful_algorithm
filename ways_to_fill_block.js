/*
@param {number} @len1
@param {number} @len2


len1<=len2
every pair of input (n,m)is subset of  (n,m+1)
example: (3,7) =(3,6)+1(blank)+(3,3) + (3,3) + (3,1) + (3,0)
*/
var re=function(len1,len2){ 
    var ways=new Array(len2+1);
    for(var i=len1;i<=len2;i++){
        ways[i]=(ways[i-1]||1)+1;
        for(var k=i-len1-1;k>=0;k--){
            ways[i]=ways[i]+(ways[k]||1);
        }
    }
    return ways;
}
//console.log(re(3,15));