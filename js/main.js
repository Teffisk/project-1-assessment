addEventListener("DOMContentLoaded", function(){
	console.log("DOM is loaded");

	var addButton = document.querySelector('#add');
	var subButton = document.querySelector('#subtract');
	var userInput = document.querySelector('#user-input');
	var result = document.querySelector('#result').textContent;
	result = 0;
	addButton.addEventListener('click', function(e){
		e.preventDefault();
		add(result, userInput);
	});
	subButton.addEventListener('click', function(e){
		e.preventDefault();
		subtract(result, userInput);
	});

	function add(starting, input) {
		result = starting + Number(input.value);
		document.querySelector('#result').textContent = starting + Number(input.value);
		checkForNegative(starting);
		userInput.value = "";

	};

	function subtract(starting, input) {
		result = starting - Number(input.value);
		document.querySelector('#result').textContent = starting - Number(input.value);
		checkForNegative(starting);
		userInput.value = "";
	};

	function checkForNegative(starting) {
		if (starting < 0) {
			result = result.style.color = 'red';
		} 
		else {
			result = result.style.color = 'black';
		}
	}

})