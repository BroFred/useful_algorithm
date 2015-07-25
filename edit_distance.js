/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 //(i:length o world i j:length of word2) if(word1[i]===word2[i]) p[i][j]=p[i-1][j-1] 
 //                                       else p[i][j]=p[i-1][j-1]+1 (replace) p[i][j]=p[i-1][j]+1 (add) p[i][j]=p[i][j-1]+1
 /*
think in resverse max step to make w1 to w2 is max(w1.length,w2.length);
every maches mius 1 
every add     

 */
var minDistance = function(word1, word2) {
    var len1 =word1.length;
    var len2 =word2.length;
    p=[];
    for(var i=0;i<len2+1;i++){
        p.push(new Array(len1+1));
        for(var j=0;j<len1+1;j++){
            if(i===0){
                p[i][j]=j;
                continue;
            }
            if(j===0){
            	p[i][j]=i;
                continue;
            }
            if(word1[j-1]===word2[i-1]){
               p[i][j]=p[i-1][j-1];
            }
            else{
                p[i][j]=Math.min(p[i-1][j-1]+1,p[i-1][j]+1,p[i][j-1]+1);
            }
        }
    }
    return p[len2][len1];
};
