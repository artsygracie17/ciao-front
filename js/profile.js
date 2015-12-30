$(document).ready(function() {
	for(var i=18; i<100; i++) {
		var age = i.toString();
		$('.age').append("<option value=" + age + ">" + age + "</option>");
	}



	$('li').click(function(e) {
		var id = e.target.id.toString();
		console.log(id);

		/* this doesn't work for some reason */
		if($('#'+id+'-li').hasClass('active')) {
			// $('#'+id+'-li').removeAttr('class', 'active');
			$('#'+id+'-li').removeClass("active")
			console.log('noclass')
		}

		else {
			$('#'+id+'-li').addClass('active');
			console.log('hasclass')

		} 

		

	}) //end click function

	// $('.active').click(function(e) {
	// 	var id = e.target.id.toString();
	// 	console.log(id);
	// 	$(".nav-pills > li.active").removeClass("active")
	// 	//$('#'+id+'-li').removeAttr('class', 'active');

	// })


})