//var num =[1,3,5,7,9,11];
var btree=function(){
	this.val=0;
	this.s=null;
	this.e=null;
	this.left=null;
	this.right=null;
}
var consT=function(num,i,j){
	var mid= parseInt((i+j)/2);
	var left,right;
	var root;
	root=new btree();
	root.s=i;
	root.e=j;
	if(i===j){
		root.val=num[i];
		return root;
	}
	if(mid>=i){
		root.left=consT(num,i,mid);
		root.val=root.val+root.left.val;
	}
	if(mid+1<=j){
		root.right=consT(num,mid+1,j);
		root.val=root.val+root.right.val;
	}
	return root;
}
var update=function(dif,index,root){
	if(index>=root.s&&index<=root.e){
		root.val=root.val+dif;
		if(root.left){
			update(dif,index,root.left);
		}
		if(root.right){
			update(dif,index,root.right);
		}
	}
	return root;
}
var getSum=function(i,j,root){
	var mid= parseInt((root.s+root.e)/2);
	var sum =0;
	if(i===root.s&&j===root.e){
		return root.val;
	}
	if(i<=mid&&j>mid){
		sum=getSum(i,mid,root.left)+getSum(mid+1,j,root.right);
	}
	else{
		if(j<=mid){
			sum=getSum(i,j,root.left);
		}
		if(i>mid){
			sum=getSum(i,j,root.right);
		}
	}
	return sum;
}
//var root=consT(num,0,5);
//console.log(update(1,2,root));
//console.log(getSum(1,4,root));