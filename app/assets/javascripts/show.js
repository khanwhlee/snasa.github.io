$(document).ready(function(){

	$(window).scroll(function(){
		var scrollval = $(this).scrolltop();)};
		var t = 1- (scrollval/50);
		if(scrollval <50){
			$('.showhead').css("background-color","red")
		};
		else{
			$('.showhead').css("background-color","rgba(100%, 100%, 100%, 0)")
		};
	});
});

