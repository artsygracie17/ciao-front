$(document).ready(function() {	


$('.dropdown-menu input').click(function(e) {
        e.stopPropagation(); //This will prevent the event from bubbling up and close the dropdown when you type/click on text boxes.
    });

	//this is the check if the person has logged into facebook
	//it should respond with a JSON giving their status/access etc

	FB.getLoginStatus(function(response) {
	    statusChangeCallback(response);
	});

	


});
