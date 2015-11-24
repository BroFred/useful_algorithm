/*var matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
]*/
var btree =function(){
	this.val=null;
	this.tl=null;
	this.tr=null;
	this.bl=null;
	this.br=null;
	this.s;
	this.e;
}
var consT=function(r1,c1,r2,c2,m){
	var mid=[parseInt((r1+r2)/2),parseInt((c1+c2)/2)];
	var root =new btree();
	root.s=[r1,r2];
	root.e=[c1,c2];
	if(r1===r2&&c1===c2){
		root.val=m[r1][c1];
		return root;
	}
	root.tl=consT(r1,c1,mid[0],mid[1],m);
	root.val=root.tl.val
	if(m[r1][mid[1]+1]!==undefined&&r1<=mid[0]&&(mid[1]+1<=c2)){
		root.tr=consT(r1,mid[1]+1,mid[0],c2,m);
		root.val=root.tr.val+root.val;
	}
	if(m[mid[0]+1]&&(mid[0]+1<=r2)&&c1<=mid[1]){
		root.bl=consT(mid[0]+1,c1,r2,mid[1],m);
		root.val=root.bl.val+root.val;
	}
	if(m[mid[0]+1]&&m[mid[0]+1][mid[1]+1]!==undefined&&(mid[0]+1<=r2)&&(mid[1]+1<=c2)){
		root.br=consT(mid[0]+1,mid[1]+1,r2,c2,m);
		root.val=root.br.val+root.val;
	}
	return root;
}
var rangSum=function(r1,c1,r2,c2,root){
	if(!root){
		return 0;
	}
	if(r1>r2||c1>c2){
		return 0;
	}
	if(r1===root.s[0]&&r2===root.s[1]&&c1===root.e[0]&&c2===root.e[1]){
		return root.val;
	}
	var mid=[parseInt((root.s[0]+root.s[1])/2),parseInt((root.e[0]+root.e[1])/2)]; 
	var sum=0;
	if(r1>=root.s[0]&&r2<=root.s[1]&&c1>=root.e[0]&&c2<=root.e[1]){
		sum=rangSum(r1,c1,Math.min(mid[0],r2),Math.min(mid[1],c2),root.tl)+rangSum(r1,Math.max(mid[1]+1,c1),Math.min(mid[0],r2),c2,root.tr)+rangSum(Math.max(mid[0]+1,r1),c1,r2,Math.min(c2,mid[1]),root.bl)+rangSum(Math.max(mid[0]+1,r1),Math.max(mid[1]+1,c1),r2,c2,root.br);
	}
	return sum;
}
var update=function(dif,i,j,root){
	if(i>=root.s[0]&&i<=root.s[1]&&j>=root.e[0]&&j<=root.e[1]){
		root.val=root.val+dif;
		if(root.tl){
			update(dif,i,j,root.tl);
		}
		if(root.tr){
			update(dif,i,j,root.tr);
		}
		if(root.bl){
			update(dif,i,j,root.bl);
		}
		if(root.br){
			update(dif,i,j,root.br);
		}
	}
	return root;

}
//----------test--------------
/*var sum=0;
for(var i=0;i<=4;i++){
	for(var k=0;k<=4;k++){
		sum=sum+matrix[i][k];
	}
}*/
var root=consT(0,0,4,4,matrix);
//console.log(rangSum(2,1,4,3,root));
update(2,3,2,root);
//console.log(root.bl);
console.log(rangSum(2,1,4,3,root));
