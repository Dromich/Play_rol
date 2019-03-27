$(document).ready(function(){

	
	var inProgress = false;
	
	var startFrom = 2;
		
		$(window).scroll(function() {
	
			
			if($(window).scrollTop() + $(window).height() >= $(document).height() - 200 && !inProgress) {	
			$.ajax({
				/* адрес файла-обработчика запроса */
				url: '/page/'+ startFrom,				
				method: 'GET',				
				beforeSend: function() {			
				inProgress = true;}
				/* что нужно сделать по факту выполнения запроса */
				}).done(function(data){				
				if (data.length > 0) {	
					$('#dle-content').append($('#dle-content', data).html());
			
				inProgress = false;
				
				startFrom ++;
				}else{
					console.log('Eroro')
				}
			
			});
			}
		});
	});