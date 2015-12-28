$(document).ready(function() {
	

	//unhighlights all names except for clicked name
	$('.name').click(function(e) {
		console.log('clicked');
		clicked_id = e.target.id;
		console.log(e.target.id);
		$('.name').removeClass('active');
		$('#'+clicked_id.toString()).addClass('active');
		$('#name-of-person').html(clicked_id.toString());
	})


})