function marcoPoloFunc(number){
	let retVal='';
	for(let i=1; i<=number;i++){
		if(i%3==0 && i%5==0) 
			retVal+='marcopolo'
		else if(i%3==0)  
			retVal+='marco'
		else if(i%5==0) 
			retVal+='polo'
		else
			retVal+=i;
		retVal+=',';
		}
		retVal =retVal.substring(0,retVal.length-1);
		console.log(retVal);
	return retVal; 
}