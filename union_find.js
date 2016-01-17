//find circle in matrix
var find=function(res,i){
    while(res[i]!==i){
        i=res[i];
    }
    return i;
}
function friendCircles(friends) {
    var row=friends.length;
    var col=friends[0].length;
    var root;
    var t1,t2;
    var res=new Array(row);
    for(var i=0;i<row;i++){
        res[i]=i;
    }
    for(var i=0;i<col;i++){
        root=null;
        for(var j=0;j<row;j++){
            if((root===null)&&(friends[j][i]==='Y')){
                root=j;
            }
            if(friends[j][i]==='Y'){
                t1=find(res,j);
                t2=find(res,root);
                if(t1!==t2){
                    res[t1]=t2;
                }
            }
        }
    }
    return res;
}
//console.log(friendCircles([['Y','N','N','N'],['N','Y','Y','N'],['N','Y','Y','N'],['N','N','N','Y']]));
