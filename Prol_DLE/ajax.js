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
					if ($('article').length >= 3) {
						for (let index = 0; index < 3; index++) {
							let artik = document.querySelector("article");
							artik.remove();
							
						}
					}
					console.log(startFrom)			
				inProgress = true;}
				/* что нужно сделать по факту выполнения запроса */
				}).done(function(data){				
				if (data.length > 0) {	
					$('.loader').remove();
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