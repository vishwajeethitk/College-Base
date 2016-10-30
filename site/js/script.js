
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
	$("#snamealert").hide();
	$("#srollalert").hide();
	$("#spasswordalert").hide();
	$("#scpasswordalert").hide();
	$("#semailalert").hide();
	$("#smobilealert").hide();
	$("#fnamealert").hide();
	$("#fidalert").hide();
	$("#fpasswordalert").hide();
	$("#fcpasswordalert").hide();
	$("#femailalert").hide();
	$("#fmobilealert").hide();

	//Email Id of student validation
	$("#email").blur(function() {
		var sEmail = $("#email").val();
		if ($.trim(sEmail).length == 0) {
			$("#semailalert").show();
            $("#semailalert").text('Please enter valid email address');
            $("#email").focus();
            e.preventDefault();
        }
        else if (!(validateEmail(sEmail))) {
        	$("#semailalert").show();
            $("#semailalert").text('Invalid Email Address');
            $("#email").focus();
            e.preventDefault();
        }
        else
        	$("#semailalert").hide();
	});

	//Email Id of faculty validation
	$("#emailfaculty").blur(function() {
		var sEmail = $("#emailfaculty").val();
		if ($.trim(sEmail).length == 0) {
			$("#femailalert").show();
            $("#femailalert").text('Please enter valid email address');
            $("#emailfaculty").focus();
            e.preventDefault();
        }
        else if (!(validateEmail(sEmail))) {
        	$("#femailalert").show();
            $("#femailalert").text('Invalid Email Address');
            $("#emailfaculty").focus();
            e.preventDefault();
        }
        else
        	$("#femailalert").hide();
	});

	//Student's name validation
	$("#sname").blur(function() {
		var stname = $("#sname").val();
		if ($.trim(stname).length == 0) {
			$("#snamealert").show();
			$("#snamealert").text('Invalid name');
			$("#sname").focus();
            e.preventDefault();
        }
        else if (stname.length > 30) {
        	$("#snamealert").show();
        	$("#snamealert").text('Please enter a name less than 30 characters');
        	$("#sname").focus();
            e.preventDefault();
        }
		else if (!(/^[a-zA-Z\s]+$/.test(stname))) {
			$("#snamealert").show();
			$("#snamealert").text('Name should have only characters and spaces');
			$("#sname").focus();
			e.preventDefault();
		}
		else
			$("#snamealert").hide();
	});

	//Faculty's name validation
	$("#namefaculty").blur(function() {
		var ftname = $("#namefaculty").val();
		if ($.trim(ftname).length == 0) {
			$("#fnamealert").show();
			$("#fnamealert").text('Please enter valid name');
			$("#namefaculty").focus();
            e.preventDefault();
        }
        else if (ftname.length > 30) {
        	$("#fnamealert").show();
        	$("#fnamealert").text('Please enter a name less than 31 characters');
        	$("#namefaculty").focus();
            e.preventDefault();
        }
		else if (!(/^[a-zA-Z\s]+$/.test(ftname))) {
			$("#fnamealert").show();
			$("#fnamealert").text('Name should have only characters and spaces');
			$("#namefaculty").focus();
			e.preventDefault();
		}
		$("#fnamealert").hide();
	});

	//Student's roll validation
	$("#roll").blur(function() {
		var roll = $("#roll").val();
		if (roll.length != 7) {
			$("#srollalert").show();
			$("#srollalert").text("Please enter a valid roll no.");
			$("#roll").focus();
			e.preventDefault();	
		}
		else
			$("#srollalert").hide();
	});

	//Password length validation for student 
	$("#password").blur(function() {
		var pass = $("#password").val();
		if (pass.length <=4 || pass.length >= 35) {
			$("#spasswordalert").show();
			$("#spasswordalert").text('Please enter a password of length between 5 and 34');
			$("#password").focus();
			e.preventDefault();
		}
		else
			$("#spasswordalert").hide();
	});

	//Password and Confirm Password validation for student
	$("#repassword").blur(function() {
		var pass = $("#password").val();
		var repass = $("#repassword").val();
		if (pass != repass) {
			$("#scpasswordalert").show();
			$("#scpasswordalert").text("Passwords don't match");
			var msg = "";
			$("#repassword").val(msg);
			$("#password").focus();
			e.preventDefault();
		}
		else
			$("#scpasswordalert").hide();
	});

	//Password length validation for faculty 
	$("#passwordfaculty").blur(function() {
		var pass = $("#passwordfaculty").val();
		if (pass.length <=4 || pass.length >= 35) {
			$("#fpasswordalert").show();
			$("#fpasswordalert").text('Please enter a password of length between 5 and 34');
			$("#passwordfaculty").focus();
			e.preventDefault();
		}
		else
			$("#fpasswordalert").hide();
	});

	//Password and Confirm Password validation for student
	$("#repasswordfaculty").blur(function() {
		var pass = $("#passwordfaculty").val();
		var repass = $("#repasswordfaculty").val();
		if (pass != repass) {
			$("#fcpasswordalert").show();
			$("#fcpasswordalert").text("Passwords don't match");
			var msg = "";
			$("#repasswordfaculty").val(msg);
			$("#passwordfaculty").focus();
			e.preventDefault();
		}
		else
			$("#fcpasswordalert").hide();
	});

	//Mobile number validation of student
	$("#mobile").blur(function() {
		var mobile = $("#mobile").val();
		if (mobile.length != 10) {
			$("#smobilealert").show();
			$("#smobilealert").text("Please enter a valid mobile no.");
			$("#mobile").focus();
			e.preventDefault();	
		}
		else
			$("#smobilealert").hide();
	});

	//Mobile number validation of faculty
	$("#mobilefaculty").blur(function() {
		var mobile = $("#mobilefaculty").val();
		if (mobile.length != 10) {
			$("#fmobilealert").show();
			$("#fmobilealert").text("Please enter a valid mobile no.");
			$("#mobilefaculty").focus();
			e.preventDefault();	
		}
		else
			$("#fmobilealert").hide();
	});

	//Faculty ID validation
	$("#idfaculty").blur(function() {
		var ftid = $("#idfaculty").val();
		if ($.trim(ftid).length == 0) {
			$("#fidalert").show();
			$("#fidalert").text('Please enter valid ID');
			$("#idfaculty").focus();
            e.preventDefault();
        }
        else if (ftid.length > 3) {
        	$("#fidalert").show();
			$("#fidalert").text('Please enter a ID less than 4 characters');
        	$("#idfaculty").focus();
            e.preventDefault();
        }
		else if (!(/^[A-Z]+$/.test(ftid))) {
			$("#fidalert").show();
			$("#fidalert").text('ID should have only uppercase characters');
			$("#idfaculty").focus();
			e.preventDefault();
		}
		else
			$("#fidalert").hide();
	});

});

//function for validating email id
function validateEmail(sEmail) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(sEmail)) {
        return true;
    }
    else {
        return false;
    }
}