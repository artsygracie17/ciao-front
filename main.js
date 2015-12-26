$(document).ready(function() {
	//$('.categories').hide();


	function main() {
		window.location.replace('main.html');
	}

	$('#trends').click(function() {
		//alert('trends clicked');
		$('#trends').addClass('active');
		$('#friends').removeClass('active');
		$('#categories').removeClass('active');


	})

	$('#friends').click(function() {
		// alert('friends clicked');
		$('#friends').addClass('active');
		$('#categories').removeClass('active');
		$('#trends').removeClass('active');


	})

	$('#categories').click(function() {
		//alert('categories clicked');
		$('#categories').addClass('active');
		$('#trends').removeClass('active');
		$('#friends').removeClass('active');
	})


})