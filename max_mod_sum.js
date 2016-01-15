//max module sum
var treeNode=function(val){
    this.val=val;
    this.left=null;
    this.right=null;
}
var add=function(root,val,res){
    if(!root){
        return new treeNode(val);
    }
    if(root.val>val){
        res[0]=root.val;
        root.left=add(root.left,val,res);
    }
    else{
        root.right=add(root.right,val,res);
    }
    return root;
}
var findMax=function(arr,m){
    var len=arr.length;
    var sum=[];
    for(var i=0;i<len;i++){
        sum.push((sum[i-1]||0)+arr[i])
    }
    for(i=0;i<len;i++){
        sum[i]=sum[i]%m;
    }
    var root=new treeNode(sum[0]);
    var res=[];
    var result=0;
    var temp;
    for(i=1;i<len;i++){
        res=[0];
        add(root,sum[i],res);
        if(sum[i]-res[0]<0){
            temp=m+sum[i]-res[0];
        }
        else{
            temp=sum[i]-res[0];
        }
        if(result<temp%m){
            result=temp%m
        }
    }
    return result;
}
console.log(findMax([3,3,9,9,5],13));