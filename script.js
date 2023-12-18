function fibonacci(num) {
// your code here
	if(num == 1 || num == 2){
		return num - 1;
	}else{
		let i = 2;
		let first = 0;
		let second = 1;
		let ans =0;
		while(i < num){
			ans = first + second;
			first = second;
			second = ans;
			i++;
		}
		console.log(ans);
		return ans;
	}

}

module.exports = fibonacci;
