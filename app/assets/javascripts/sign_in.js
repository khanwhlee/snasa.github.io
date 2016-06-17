
$(document).ready(function(){
    $('.dot').hide();

});

$(document).ready(function(){
    $('.key').click(function() {
    	if ($('#first').is(":visible") && $('#second').is(":hidden")){
    		$('#second').fadeIn('fast');
    	}else if($('#first').is(":visible") && $('#second').is(":visible")){
    		$('#third').fadeIn('fast');
    	}else{
    		$('#first').fadeIn('fast');
    	}	
    });
});