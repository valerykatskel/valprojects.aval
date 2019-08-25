	$(function(){
			$('#loginFormLink').click(function() {
				$('#loginForm').fadeIn('slow').end().toogle;
			});
		}); 	
		$(function(){
			$('#closeForm').click(function() {
				$('#loginForm').fadeOut('slow');
			});
		}); 