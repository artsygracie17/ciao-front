$(document).ready(function() {

	//start with just trends showing
	$('.friends').hide();
	$('.categories').hide();

	$('#trends').click(function() {
		//alert('trends clicked');
		$('#trends').addClass('active');
		$('#friends').removeClass('active');		
		$('#categories').removeClass('active');

		$('.friends').hide();
		$('.categories').hide();
		$('.trends').show();


	})

	$('#friends').click(function() {
		// alert('friends clicked');
		$('#friends').addClass('active');
		$('#categories').removeClass('active');
		$('#trends').removeClass('active');

		$('.trends').hide();
		$('.categories').hide();
		$('.friends').show();


	})

	$('#categories').click(function() {
		//alert('categories clicked');
		$('#categories').addClass('active');
		$('#trends').removeClass('active');
		$('#friends').removeClass('active');

		$('.friends').hide();
		$('.trends').hide();
		$('.categories').show();

	})


})