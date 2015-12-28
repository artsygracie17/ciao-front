$(document).ready(function() {
	for(var i=18; i<100; i++) {
		var age = i.toString();
		$('.age').append("<option value=" + age + ">" + age + "</option>");
	}



	$('li').click(function(e) {
		var id = e.target.id;
		console.log(id);

	})


})