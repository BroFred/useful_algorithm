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
var re = function(start,s, wordDict,arr,res,ref,len) {
    var mark=0,i;
    if(start===len){
      res.push(arr.join(" "));
      return;
    }
      for(i=start;i<len;i++){
        if(ref[start+(i-start)]!==0){ //filter out unnecessary recursive
          if(wordDict.has(s.substring(start,i+1))) {
              arr.push(s.substring(start,i+1));
              ref[i]=re(i+1,s,wordDict,arr,res,ref,len);
              arr.pop();
              mark=1;
          }
        }
      }
      return mark;
}; 
var wordBreak = function(s, wordDict) {
    var arr=[],res=[],len=s.length,ref=new Array(len);
    re(0,s,wordDict,arr,res,ref,len);
    return res;
};