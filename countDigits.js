//find how many digits in a number
/*
@param{ number } n
*/
function countDigitOne(n) {
   var ones = 0;
    for (var m = 1; m <= n; m *= 10)
        ones += parseInt((parseInt(n/m) + 8) / 10) * m + (parseInt(n/m) % 10 == 1 ? n%m + 1 : 0);
    return ones;
}
function countDigitOne(n) {
	var ones = 0;
	for (var m = 1; m <= n; m *= 10){
		if(parseInt(n/m)%10>1){
			ones +=(parseInt(n/(10*m))+1)*m;
		}
		if(parseInt(n/m)%10===1){
			ones +=parseInt(n/(10*m))*m+n%m+1;
		}
		if(parseInt(n/m)%10<1){
			ones +=parseInt(n/(10*m))*m;
		}
		console.log(ones);
	}
	return ones

}

/*
when d<1 d===1 d>1
222
1 0 100
3 2 10
23 1

202
1 0 100
2 2 10
21  1

212
1 0 100
2 2 10 + 2
21 22 1
*/