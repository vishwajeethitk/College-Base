
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

	//Email Id of student validation
	$("#email").blur(function() {
		var sEmail = $("#email").val();
		if ($.trim(sEmail).length == 0) {
            alert('Please enter valid email address');
            $("#email").focus();
            e.preventDefault();
        }
        if (!(validateEmail(sEmail))) {
            alert('Invalid Email Address');
            $("#email").focus();
            e.preventDefault();
        }
	});

	//Email Id of faculty validation
	$("#emailfaculty").blur(function() {
		var sEmail = $("#emailfaculty").val();
		if ($.trim(sEmail).length == 0) {
            alert('Please enter valid email address');
            $("#emailfaculty").focus();
            e.preventDefault();
        }
        if (!(validateEmail(sEmail))) {
            alert('Invalid Email Address');
            $("#emailfaculty").focus();
            e.preventDefault();
        }
	});

	//Student's name validation
	$("#sname").blur(function() {
		var stname = $("#sname").val();
		if ($.trim(stname).length == 0) {
			alert('Please enter valid name');
			$("#sname").focus();
            e.preventDefault();
        }
        else if (stname.length > 30) {
        	alert('Please enter a name less than 30 characters');
        	$("#sname").focus();
            e.preventDefault();
        }
		else if (!(/^[a-zA-Z\s]+$/.test(stname))) {
			alert('Name should have only characters and spaces');
			$("#sname").focus();
			e.preventDefault();
		}
	});

	//Faculty's name validation
	$("#namefaculty").blur(function() {
		var ftname = $("#namefaculty").val();
		if ($.trim(ftname).length == 0) {
			alert('Please enter valid name');
			$("#namefaculty").focus();
            e.preventDefault();
        }
        else if (ftname.length > 30) {
        	alert('Please enter a name less than 31 characters');
        	$("#namefaculty").focus();
            e.preventDefault();
        }
		else if (!(/^[a-zA-Z\s]+$/.test(ftname))) {
			alert('Name should have only characters and spaces');
			$("#namefaculty").focus();
			e.preventDefault();
		}
	});

	//Student's roll validation
	$("#roll").blur(function() {
		var roll = $("#roll").val();
		if (roll.length != 7) {
			alert("Please enter a valid roll no.");
			$("#roll").focus();
			e.preventDefault();	
		}
	});

	//Password length validation for student 
	$("#password").blur(function() {
		var pass = $("#password").val();
		if (pass.length <=4 || pass.length >= 35) {
			alert('Please enter a password of length between 5 and 34');
			$("#password").focus();
			e.preventDefault();
		}
	});

	//Password and Confirm Password validation for student
	$("#repassword").blur(function() {
		var pass = $("#password").val();
		var repass = $("#repassword").val();
		if (pass != repass) {
			alert("Passwords don't match");
			var msg = "";
			$("#repassword").val(msg);
			$("#password").focus();
			e.preventDefault();
		}
	});

	//Password length validation for faculty 
	$("#passwordfaculty").blur(function() {
		var pass = $("#passwordfaculty").val();
		if (pass.length <=4 || pass.length >= 35) {
			alert('Please enter a password of length between 5 and 34');
			$("#passwordfaculty").focus();
			e.preventDefault();
		}
	});

	//Password and Confirm Password validation for student
	$("#repasswordfaculty").blur(function() {
		var pass = $("#passwordfaculty").val();
		var repass = $("#repasswordfaculty").val();
		if (pass != repass) {
			alert("Passwords don't match");
			var msg = "";
			$("#repasswordfaculty").val(msg);
			$("#passwordfaculty").focus();
			e.preventDefault();
		}
	});

	//Mobile number validation of student
	$("#mobile").blur(function() {
		var mobile = $("#mobile").val();
		if (mobile.length != 10) {
			alert("Please enter a valid mobile no.");
			$("#mobile").focus();
			e.preventDefault();	
		}
	});

	//Mobile number validation of faculty
	$("#mobilefaculty").blur(function() {
		var mobile = $("#mobilefaculty").val();
		if (mobile.length != 10) {
			alert("Please enter a valid mobile no.");
			$("#mobilefaculty").focus();
			e.preventDefault();	
		}
	});

	//Faculty ID validation
	$("#idfaculty").blur(function() {
		var ftid = $("#idfaculty").val();
		if ($.trim(ftid).length == 0) {
			alert('Please enter valid ID');
			$("#idfaculty").focus();
            e.preventDefault();
        }
        else if (ftid.length > 3) {
        	alert('Please enter a ID less than 4 characters');
        	$("#idfaculty").focus();
            e.preventDefault();
        }
		else if (!(/^[A-Z]+$/.test(ftid))) {
			alert('ID should have only uppercase characters');
			$("#idfaculty").focus();
			e.preventDefault();
		}
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