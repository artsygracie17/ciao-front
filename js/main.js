$(document).ready(function() {

	//start with just trends showing
	$('.friends').hide();
	$('.categories').hide();
	// $('.dialog-body').hide();

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



	$('#add-event').click(function() {
		bootbox.dialog({
		  message: "When is your event?",
		  title: "Add Event",
		  buttons: {
		    main: {
		      label: "Publish!",
		      className: "btn-primary",
		      
		    }
		  }
		});
		
		// $('.bootbox-body').append('<select class="form-control day"></select>');
		$('.bootbox-body').addClass('input-group');
		$('.input-group').append('<input type="text" class="form-control event-name" placeholder="Name of Event" aria-describedby="sizing-addon1">');
		$('.bootbox-body').append(' <textarea class="form-control event-description" rows="6" placeholder="Add a short description of your event!"></textarea>');

		// for(var i=1; i<31; i++) {
		// 	var day = i.toString();
		// 	$('.day').append("<option value=" + day + ">" + day + "</option>");
		// }
	})

	

	// $('.range-slider').jRange({
	//     from: 18,
	//     to: 100,
	//     step: 1,
	//     format: '%s',
	//     width: 100,
	//     showLabels: true,
	//     isRange : true
	// });





})