/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {set<string>} wordDict
 * @return {number}
 */
 // breadth-first recusive 
 // every level choose nearest element the following element can't hava higher number cuz count is increasing

var re=function(b,loc,wordDict,count,res,dil){
	if(count>dil){
		return res;
	}
     var temp,len =b.length,loc1=[],z,k,i;
     for(z in loc){
      for(k=0;k<len;k++){
        for(i=97;i<=122;i++){
            temp=loc[z].substring(0,k)+String.fromCharCode(i)+loc[z].substring(k+1);
            if(temp===b){
            	if(res.length===0){
            		res.push(count+1);
        		}
        		else{
            		if(res[0]>count+1){
                		res[0]=count+1;
            		}
        		}
        		return;
            }
            if(wordDict.has(temp)&&temp!==loc[z]){
                    loc1.push(temp);
                    wordDict.delete(temp);
            }
        }
    }
	}
    re(b,loc1,wordDict,count+1,res,dil);
 }
var ladderLength = function(beginWord, endWord, wordDict) {
    var len=beginWord.length;
    var res=[];
    var dil=wordDict.size;
    wordDict.delete(endWord);
    wordDict.delete(beginWord);
    re(beginWord,[endWord], wordDict,1,res,dil);
    return res[0]!==undefined ? res[0]:0; 
};