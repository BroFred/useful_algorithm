/*
@param {String} s
@param {Object} dic
*/
var prefixTreeInsert= function(s,dic){
    s=s+"!";
    var len = s.length;
    temp=dic;
    for(var i=0;i<len;i++){
        if(temp[s[i]]===undefined){
            temp[s[i]]={};
        }
        temp=temp[s[i]];
    }
}
/*
@param {String} s
@param {Object} dic
*/
var prefixTreeSearch=function(s,dic){
	var len=s.length;
	var temp=dic;
	for(var i=0;i<len;i++){
		if(temp[s[i]]===undefined){
			return false;
		}
		temp =temp[s[i]];
	}
	if(temp['!']===1){
		return true;
	}
	else{
		return false;
	}
}