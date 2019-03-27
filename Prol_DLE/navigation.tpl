


<!--
<div id="ajax-next-page">[next-link]Показать Еще[/next-link]</div>
		
				



<div class="ajaxload_dv"><script type="text/javascript">
	$( "#ajax-next-page" ).click(function( event ) {
	  event.preventDefault();
	  var nextPage = $('#ajax-next-page a').attr('href');
					if (nextPage !== undefined) {
						$.ajax({
							url: nextPage,
							success: function(data) {
								for (let index = 0; index < 4; index++) {
	$('article').remove();
	
}
								$('#ajax-next-page').remove();
								// setTimeout(() => {
								// 	$('.ajaxload_dv').remove();
								// }, 10);
								$('#dle-content').append($('#dle-content', data).html());
			
													
							}
						})
					}
					
	  
	});
	
	</script></div>


-->
