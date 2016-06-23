
var line1 = "Waiting for authorization.............................................".split("");
var line2 = "Success!      ".split("");
var line3 = "Loading spacecraft location.........................".split("");
var line4 = "SiJak!   ".split("");


$(document).ready(function(){
	$("#o2").hide(); //test
	$(".footer").hide();
    $(".container3").hide();
	$(".terminal #i1").focus();
    $(".terminal #i1").on('keydown', function(event) {
        if(event.which === 13) {// Enter key pressed
            var $this = $(this), 
                val = $this.val();
            $this.focus().val('');
            scrollTo();
            if(val == "hello world"){
            	add(val);
            	setTimeout(function() {
					add("what can I help you?");
				}, 300);
            }
            else if(val == "whoami"){
            	add(val);
            	var username = document.getElementById('username').innerHTML;
            	setTimeout(function() {
					add("you are "+username);
				}, 300);
            }
            else if(val == "gc mission"){
            	add(val);
            	var usermission = document.getElementById('currentmission').innerHTML;
            	setTimeout(function() {
					add("current mission: "+usermission);
				}, 300);
            }
            else if(val == "gc schedule"){
            	add(val);
            	var description = document.getElementById('description').innerHTML;
            	setTimeout(function() {
					add(description);
				}, 300);
            }
            else if(val == "gc location"){
                add(val);
                track();
                //addtext(line1,200);
            }
            else if(val == "i love you"){
                add(val);
                setTimeout(function() {
                    add("♡");
                }, 300);
            }else if(val == "yuni"){
                add(val);
                heart();
            }
            else if(val == "show help"){
            	add(val);
            	$(".container3").show();
            }
            else if(val == "hide help"){
                add(val);
                $(".container3").hide();
            }
            else if(val == "hide setting"){
            	add(val);
            	$(".footer").hide();
            }
            else if(val == "show setting"){
            	add(val);
            	$(".footer").show();
            }
            else if(val == "clear"){
                $("#space p").remove();
            }
            /*else{
				add(val);
            	var line = "Error: Command <"+val+"> not recognized...";
            	setTimeout(function() {
            		add(val);
					add(line);
				}, 300);
            } unknown bug*/

        }
    });
});
var count = 0;
function track(){
    var randomline = grdline();
    if(count==0){
        addtext(line1,150);
    }else if(count==1){
        addtext(line2,100);
    }else if(count==2){
        addtext(line3,100);
    }else if(count==3){
        addtext(line4,200);
    }else if(count>3 && count<13){
        addtext(randomline,100);
    }
    count++;
}

var h = 0;
function heart(){
    if(h==0){
        addtext(heart1,50);
    }else if(h==1){
        addtext(heart2,50);
    }else if(h==2){
        addtext(heart3,50);
    }else if(h==3){
        addtext(heart4,50);
    }else if(h==4){
        addtext(heart5,50);
    }else if(h==5){
        addtext(heart6,50);
    }else if(h==6){
        addtext(heart7,50);
    }else if(h==7){
        addtext(heart8,50);
    }
    h++;
}

var i = 0;
function addtext(line, interval){

    var inputbox = document.getElementById('i1');
    setTimeout(function () {   
        inputbox.value = inputbox.value + line[i];
        i++;
        if (i < line.length){       
            addtext(line,interval);
        }else{
            i=0;
            add(inputbox.value);
            inputbox.value="";
            if(count>0 && count<13){
                track();
            }else if(h>0 && h<8){
                heart();
            }else{
                count=0;
                h=0;
            }
        };   
    }, interval);
}

function grdline(){
    var rdline =[];
    for(j = 0; j < 5; j++){
        var rdnum = Math.random()*10000
        var rdstr = rdnum.toString() + " ; "
        rdline.push(rdstr);
    }
    return rdline;
}


function add(text){
	var line = "SNASA:RDGC$ " + text
	var t = document.createElement('p')
	t.textContent = line;
	var space = document.getElementById("space");
	space.appendChild(t);
}

//textbox 下面要加一點<br>才有空間往上滾
function scrollTo(){
    var topPos = document.getElementById('i1').offsetTop;
    document.getElementById('t').scrollTop = topPos-350;
}

var heart1 ="............◢▇▇◣............◢▇▇◣".split("");
var heart2 ="......◢▇▇▇▇▇◣◢▇▇▇▇▇◣".split("");
var heart3 ="◢▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇◣".split("");
var heart4 ="◥▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇◤".split("");
var heart5 ="......◥▇▇▇▇▇▇▇▇▇▇▇▇◤".split("");
var heart6 ="............◥▇▇▇▇▇▇▇▇▇◤".split("");
var heart7 ="..................◥▇▇▇▇▇◤".split("");
var heart8 ="........................◥▇▇◤".split("");




