/*
@param {String} s ("1+2")
*/
var reversPolish=function(s){
    var sign=[];
    var number=[];
    var len=s.length;
    var temp ="";
    for(var i=0;i<len;i++){
        temp ="";
        if(s[i]===" "){
            continue;
        }
        while(!isNaN(s[i]-1)){
            temp =temp+s[i];
            i++;
        }
        temp.length ? number.push(temp):null;
        if(isNaN(s[i]-1)){
            if(s[i]===')'){
                while(sign[sign.length-1]!=="("){
                    number.push(sign.pop());
                }
                sign.pop();
            }
            else{
                if((sign[sign.length-1]==="+"||sign[sign.length-1]==="-")&&s[i]!=="("){
                    number.push(sign.pop());
                }
                sign.push(s[i]);
            }
        }
    };
    while(sign.length!==0){
        number.push(sign.pop());
    }
    return number;
}