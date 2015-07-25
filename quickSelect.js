/*
@param {Number[]} arr
@param {Number[]} k
*/
// partition left < pivot < right when right.length = k return pivot
var re =function(arr,k){
    var p=arr[0],l=[],len=arr.length,r=[arr[0]],temp,i;
    for(i=1;i<len;i++){
        if(arr[i]<p)
            l.push(arr[i]);
        else
            r.push(arr[i]);
    }
    temp=r.length
    if(temp===k){
         return p;
    }
    else{
        if(temp>k){
            r.shift();
            return  re(r,k);
        }
        else{
           return  re(l,k-temp);
        }
    }
}
