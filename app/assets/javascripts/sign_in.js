
$(document).ready(function(){
    $('.dot , .field, #login').hide();
    $('.key').fadeTo('fast', 0.5);

    $('.key').mouseenter(function() {
        $(this).fadeTo('fast', 1);
    });
    $('.key').mouseleave(function() {
        $(this).fadeTo('fast', 0.5);
    });

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

function input(e) {
    var idInput = document.getElementById("idInput");
    var pwInput = document.getElementById("pwInput");
    if(idInput.value.length < 2){     //要記得加value tbInput是取出表單
        idInput.value = idInput.value + e.value;
    }
    else if(idInput.value.length ==2){
        idInput.value = idInput.value + e.value;
        if(idInput.value < 100){
            $('.field , #login').fadeIn('slow');
        }
        //else 自動回到 502 bad
    }
    else if(idInput.value.length > 2){
        pwInput.value = pwInput.value + e.value;
    }
}


