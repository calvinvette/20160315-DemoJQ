var customers = [];

var customer = {};

var txtFirstName;
var txtLastName;
var txtPhoneNumber;
var txtEmail;

window.onload = function() {
	txtFirstName = document.getElementById("firstName");	
	txtLastName = document.getElementById("lastName");	
	txtPhoneNumber = document.getElementById("phoneNumber");	
	txtEmail = document.getElementById("email");	

	txtFirstName.onchange = function(evt) {
		customer.firstName = txtFirstName.value;
	}
	txtLastName.onchange = function(evt) {
		customer.lastName = txtLastName.value;
	}
	txtPhoneNumber.onchange = function(evt) {
		customer.phoneNumber = txtPhoneNumber.value;
	}
	txtEmail.onchange = function(evt) {
		customer.email = txtEmail.value;
	}
};

