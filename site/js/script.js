
$("#student").hide();
$("#faculty").hide();
$("#studentclick").click(function(){
	if($("#faculty").is(':visible')) {
		$("#faculty").hide();
	}
    $("#student").show();
});
$("#facultyclick").click(function(){
	if($("#student").is(':visible')) {
		$("#student").hide();
	}
    $("#faculty").show();
});