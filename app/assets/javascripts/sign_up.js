var imgindex = 1;

$(document).ready(function(){

	$('.instructionsimg, #laststep, #nextstep').fadeTo('fast', 0.7);

	$('#laststep, #nextstep').mouseleave(function() {
        $(this).fadeTo('fast', 0.7);
    });
    $('.instructionsimg').mouseleave(function() {
    	if(imgindex == parseInt(this.id)){
    		$(this).fadeTo('fast', 1);
    	}
    	else{
    		$(this).fadeTo('fast', 0.7);
    	}
    });
    $('.instructionsimg, #laststep, #nextstep').mouseenter(function() {
        $(this).fadeTo('fast', 1);
    });
	$(".instructionsimg").click(function(){
		imgindex = parseInt(this.id);
		setimg(imgindex);
	});

	$("#laststep").click(function(){
		if (imgindex>1){
			imgindex = imgindex - 1;
			setimg(imgindex);
		}
	});
	$("#nextstep").click(function(){
		if (imgindex<8){
			imgindex = imgindex + 1;
			setimg(imgindex);
		}
	});

	//$('#instructionimg').on('load', function () {
	//	$('#instructionimg').fadeTo(300, 1);
	//	});
});


function setimg(i){
	$('.instructionsimg').fadeTo('fast', 0.7);
	var img = document.getElementById("instructionimg");
	var simg = document.getElementById(i.toString());
	$(simg).fadeTo('fast', 1);
	img.src= simg.src;
}