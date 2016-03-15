var customers = [];

var customer = {};

customer.setFirstName = function(name) {
	this.firstName = name;
	// Tightly coupled - ick!
	//$("#firstName").val(this.firstName);
	//$("#spnName").html(this.firstName);
	$(document).trigger("CustomerChanged");
};

$(document).ready(function() {
	
	$("#firstName").change(function(evt) {
		customer.firstName =$("#firstName").val();
		$(document).trigger("CustomerTxtChanged");
	});
	$("#lastName").change(function(evt) {
		customer.lastName = $("#lastName").val();
	});
	$("#phoneNumber").change(function(evt) {
		customer.phoneNumber =$("#phoneNumber").val();
	});
	$("#email").change(function(evt) {
		customer.email = $("#email").val();
	});
	
	$(document).on("CustomerChanged", function(evt) {
		$("#firstName").val(customer.firstName);
	});
	
	$(document).on("CustomerChanged", function(evt) {
		$("#spnName").html(customer.firstName);
	});
	
	$(document).on("CustomerTxtChanged", function(evt) {
		customer.firstName = $("#firstName").val();
		$(document).trigger("CustomerChanged");
	});
});
