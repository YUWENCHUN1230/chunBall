
$(function(){
	
	/*點擊.gototop時,緩慢往上滑*/
	$('.gototop').on('click', function(e){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0,
		}, 1500);
	});

	/*捲軸位置在視窗小於100px時,將.gototop隱藏*/
	document.querySelector(".gototop").style.display = 'none';	
	window.addEventListener('scroll',function(){
		if( document.documentElement.scrollTop < 100){
			document.querySelector('.gototop').style.display = 'none';
		}else{
			document.querySelector('.gototop').style.display = '';			
		}
	});
});
	