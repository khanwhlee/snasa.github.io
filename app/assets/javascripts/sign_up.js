/*var imgindex = 1;

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
    		$(this).fadeTo('fast', 0.5);
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
			move(imgindex);
			setimg(imgindex);
		}
	});
	$("#nextstep").click(function(){
		var lc = document.getElementById("flowarea").lastElementChild.id; //要用lastElementChild
		var max = parseInt(lc);
		if (imgindex < 4){
			imgindex = imgindex +1;
			alert(imgindex);
			move(imgindex);
			setimg(imgindex);
		}
	});
});

//element.scrollIntoView(); 直接捲動網頁到element位置

function setimg(i){
	$('.instructionsimg').fadeTo('fast', 0.5);
	var img = document.getElementById("instructionimg");
	var simg = document.getElementById(i.toString());
	$(simg).fadeTo('fast', 1);
	img.src= simg.src;
}

function move(i){
	var leftPos = document.getElementById(i.toString()).offsetLeft;
    document.getElementById('flowarea').scrollLeft = leftPos-550;
}*/






