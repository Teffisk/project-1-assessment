addEventListener("DOMContentLoaded", function(){
	console.log("DOM is loaded");

	var addButton = document.querySelector('#add');
	var subButton = document.querySelector('#subtract');
	var userInput = document.querySelector('#user-input');
	//var result = document.querySelector('#result').textContent;
	var result = 0;
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
		userInput.value = 1;

	};

	function subtract(starting, input) {
		result = starting - Number(input.value);
		document.querySelector('#result').textContent = starting - Number(input.value);
		checkForNegative(starting);
		userInput.value = 1;
	};

	function checkForNegative(starting) {
		if (starting < 0) {
			document.querySelector('#result').style.color = 'red';
		} 
		else {
			document.querySelector('#result').style.color = 'black';
		}
	}

})