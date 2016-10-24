
$("#studentclick").click(function(){
	if($("#faculty").is(':visible')) {
		$("#faculty").hide();
	}
	if($("#student").is(':visible')) {
		$("#student").hide();
	}
	else
    	$("#student").show();
});
$("#facultyclick").click(function(){
	if($("#student").is(':visible')) {
		$("#student").hide();
	}
	if($("#faculty").is(':visible')) {
		$("#faculty").hide();
	}
	else
    	$("#faculty").show();
});
$(document).ready(function(e) {
	$("#student").hide();
	$("#faculty").hide();

	$("#emailfaculty").blur(function() {
		var sEmail = $("#emailfaculty").val();
		if ($.trim(sEmail).length == 0) {
            alert('Please enter valid email address');
            e.preventDefault();
        }
        if (!(validateEmail(sEmail))) {
            alert('Invalid Email Address');
            $("#emailfaculty").focus();
            e.preventDefault();
        }
	});
});
function validateEmail(sEmail) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(sEmail)) {
        return true;
    }
    else {
        return false;
    }
}