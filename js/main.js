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

		var first = bootbox.dialog({
						message: 'Which category does this event belong in?',
						title: 'Create New Event',
						buttons: {

						}
					});

		var catnavs = "";
			catnavs+="<br><br><ul class='nav nav-pills nav-stacked'>";

			catnavs+="<li><a href='#'>Academics</a></li>";
			catnavs+="<li><a href='#'>Athletics</a></li>";
			catnavs+="<li><a href='#'>Business</a></li>";
			catnavs+="<li><a href='#'>Community</a></li>";
			catnavs+="<li><a href='#'>Entertainment</a></li>";
			catnavs+="<li><a href='#'>Leisure</a></li>";
			catnavs+="<li><a href='#'>Nightlife</a></li>";
			catnavs+="<li><a href='#'>Technology</a></li>";
			catnavs+="<li><a href='#'>Travel</a></li>";

			catnavs+="</ul>"


		$('.bootbox-body').append(catnavs);

		$('li').click(function() {
			// $('.bootbox-body').empty();
			first.modal('hide');

			var second = bootbox.dialog({
						  message: "When is your event?",
						  title: "Create New Event",
						  buttons: {
						    main: {
						      label: "Publish!",
						      className: "btn-primary",
						      
						    }
						  }
						});
			$('.bootbox-body').append('<input type="text" id="datepicker">');

			var picker= '';
				picker+='<p id="jqueryExample">';
				picker+='<input type="text" class="date start">'
				picker+='<input type="text" class="time start">'
				picker+='<input type="text" class="time end">'
				picker+='<input type="text" class="date end"></p>'
			$('.bootbox-body').append(picker);

			$('#jqueryExample .time').datepicker({
		        'showDuration': true,
		        'timeFormat': 'g:ia'
		    });

		    $('#jqueryExample .date').datepicker({
		        'format': 'm/d/yyyy',
		        'autoclose': true
		    });
		    // initialize datepair
		    $('#jqueryExample').datepair();



			$('.bootbox-body').append('<div class="input-group"></div>');
			$('.input-group').append('<input type="text" class="form-control event-name" placeholder="Name of Event" aria-describedby="sizing-addon1">');
			$('.input-group').append('<br><br><input type="text" class="form-control event-location" placeholder="Location" aria-describedby="sizing-addon1">');


			$('.bootbox-body').append('<br><textarea class="form-control event-description" rows="6" placeholder="Add a short description of your event!"></textarea>');

			var privacy = "";
			privacy+="<br><br><ul class='nav nav-pills'>";

			privacy+="<li><span class='glyphicon glyphicon-eye-open event-settings' aria-hidden='true'></span></li>"
			privacy+="<li><a id='pub' href='#'>Public</a></li>";
			privacy+="<li><a id='priv' href='#'>Private</a></li>";
			privacy+="<li><a id='fri' href='#'>Friends</a></li>";
			privacy+="</ul>";

			$('.bootbox-body').append(privacy);

		})

		
	$('a').click(function(e) {
		var id = e.target.id.toString();
		console.log(id);

		/* this doesn't work for some reason */
		if($('#'+id).hasClass('active')) {
			// $('#'+id+'-li').removeAttr('class', 'active');
			$('#'+id).removeClass("active")
			console.log('noclass')
		}

		else {
			$('#'+id).addClass('active');
			console.log('hasclass')

		} 
	});
		



	}) //end add-event

	

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