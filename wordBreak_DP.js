/*
@param {String} s
@param {set<String>} wordDict
*/
/*
explain:
everytime only consider if mark[0~k] &&  wordDict(s[k+1..i]) 
*/
var wordBreak = function(s, wordDict) {
    var len2=s.length;
    var mark=new Array(len2);
    var i,k;
    for(i=1;i<=len2;i++){
        if(wordDict.has(s.slice(0,i))){
            mark[i-1]=1;
        }
        else{
            for(k=0;k<i-1;k++){
                if(mark[k]&&wordDict.has(s.slice(k+1,i))){
                    mark[i-1]=1;
                    break;
                }
            }
        }
    }
   return mark[mark.length-1] ? true :false;
};