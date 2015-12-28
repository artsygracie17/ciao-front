$(document).ready(function() {

	//start with just trends showing
	$('.notifs').hide();
	$('.event-reqs').hide();

	$('#con-reqs').click(function() {
		//alert('trends clicked');
		$('#con-reqs').addClass('active');
		$('#event-reqs').removeClass('active');		
		$('#notifs').removeClass('active');

		$('.event-reqs').hide();
		$('.notifs').hide();
		$('.con-reqs').show();


	})

	$('#event-reqs').click(function() {
		// alert('friends clicked');
		$('#event-reqs').addClass('active');
		$('#notifs').removeClass('active');
		$('#con-reqs').removeClass('active');

		$('.con-reqs').hide();
		$('.notifs').hide();
		$('.event-reqs').show();


	})

	$('#notifs').click(function() {
		//alert('categories clicked');
		$('#notifs').addClass('active');
		$('#con-reqs').removeClass('active');
		$('#event-reqs').removeClass('active');

		$('.event-reqs').hide();
		$('.con-reqs').hide();
		$('.notifs').show();

	})


})