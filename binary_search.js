/*
 * @param {number} i,j,tar
 * @param {number[]} arr
 * @return {boolean}

*/
var bi=function(i,j,arr,tar){
    if(i>j){
        return false
    }
    var len=parseInt((i+j)/2);
    return arr[len]===tar || (arr[len]>tar ? bi(i,len-1,arr,tar):bi(len+1,j,arr,tar));
}