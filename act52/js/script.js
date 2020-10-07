const email = document.getElementById("mail");

const form = document.getElementByTagName('form')[0];
const emailError = document.querySelector('#mail + span.error');

email.addEventListiner('input', function(event)) {
	if(email.validity.valid) {
		emailError.innerHTML = '';
		emailError.className ='error'
	} else {
		showError();
	}
}

form.addEventListiner('submit', function(event)) {
	if(!email.validity.valid) {
		showError();

		event.preventDefault();
	}
}

function showError() {
	if(email.validity.valueMissing) {
		emailError.textContent = 'You need to enter an e-mail address.';
	} else if {
		emailError.textContent = 'Email shoud be atleast ${ email.minLength } characters; you entered ${ email.value.length}.';
	}
	emailError.className = 'error active';
}