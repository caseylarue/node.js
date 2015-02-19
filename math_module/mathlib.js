module.exports = function(){
	return {
		add: function(num1, num2){
			console.log(num1 + num2);
		},
		multiply: function(num1, num2){
			console.log(num1 * num2);
		},
		square: function(num1){
			console.log(num1 * num1);
		},
		random: function(num1, num2){
			console.log(Math.floor(Math.random() * ((num2+1) - num1)) + num1);
		}
	}
}