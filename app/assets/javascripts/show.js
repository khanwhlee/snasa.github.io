
var line1 = "Waiting for authorization from host 104.223.112.1......................".split("");
var line2 = "Success!      ".split("");
var line3 = "Loading spacecraft location.........................".split("");
var line4 = "Start to locate current coordinate!   ".split("");
var width = $(window).width();
var height = $(window).height();
var ratio = height/width;

$(document).ready(function(){
	$("#o2").hide(); //test
	$(".terminal #input").focus();
    $(".terminal input, #inputarea").on('keydown', function(event) {
        if(event.which === 13) {// Enter key pressed
            var usertarget = document.getElementById('target').innerHTML;
            var $this = $(this), 
            val = $this.val();
            $this.focus().val('');
            if(val == "hello world"||val == "Hello world"){
            	add(val);
            	setTimeout(function() {
					addcontent("what can I help you?");
				}, 300);
            }
            else if(val == "whoami"||val == "Whoami"){
            	add(val);
            	var username = document.getElementById('username').innerHTML;
            	setTimeout(function() {
					addcontent("you are "+username);
				}, 300);
            }
            else if(val == "gc mission"||val == "Gc mission"){
            	add(val);
            	var usermission = document.getElementById('currentmission').innerHTML;
            	setTimeout(function() {
					addcontent("current mission: "+ usermission);
				}, 300);
            }
            else if(val == "gc schedule"||val == "Gc schedule"){
            	add(val);
            	var schedule = document.getElementById('schedule').innerHTML;
                var schedulearray = schedule.split("-");
            	for(k=0 ; k<schedulearray.length;k++){
                    addcontent(schedulearray[k]);
                }
            }
            else if(val == "gc i love you"||val == "Gc i love you"){
                add(val);
                setTimeout(function() {
                    addcontent("thank you ♡");
                }, 300);
            }
            else if(val == "gc location"||val == "Gc location"){
                add(val);
                track();
                //addtext(line1,200);
            }
            else if(val == "gc route"||val == "Gc route"){
                add(val);
                $("#p1img2 , #p1img3").hide();
                if(ratio>1.2){
                    $("#scrollimg").fadeIn(2000,"swing",function(){
                        $("#scrollimg").fadeOut(500,"swing");
                    })
                }
                setTimeout(function() {
                    $("#p1img1").fadeIn(800,"swing",function(){
                        setTimeout(function() {
                            $("#p1img1").fadeOut(800,"swing");
                        },10000);
                    });
                }, 1000);
            }
            else if(val == "gc mima"||val == "Gc mima"){
                $("#p1img1 , #p1img3").hide();
                add(val);
                if(ratio>1.2){
                    $("#scrollimg").fadeIn(2000,"swing",function(){
                        $("#scrollimg").fadeOut(500,"swing");
                    })
                };
                $("#p1img2").fadeIn(800,"swing");
            }
            else if(val == "gc titan"||val == "Gc titan"){
                add(val);
                $("#p1img1 , #p1img2").hide();
                if(ratio>1.2){
                    $("#scrollimg").fadeIn(2000,"swing",function(){
                        $("#scrollimg").fadeOut(500,"swing");
                    })
                };
                $("#p1img3").fadeIn(800,"swing");
            }
            else if(val == "gc "+usertarget||val == "Gc "+usertarget){
                add(val);
                heart();
            }
            else if(val == "help"||val == "Help"){
            	add(val);
            	$("#instruction").fadeIn(800,"swing");
                if(ratio>1.2){
                    $("#scrollimg").fadeIn(2000,"swing",function(){
                        $("#scrollimg").fadeOut(500,"swing");
                    })
                }
            }
            else if(val == "hide help"||val == "Hide help"){
                add(val);
                $("#instruction").hide();
            }
            else if(val == "hide setting"||val == "Hide setting"){
            	add(val);
            	$(".header").hide();
            }
            else if(val == "show setting"||val == "Show setting"){
            	add(val);
            	$(".header").show();
            }
            else if(val == "clear"||val == "Clear"){
                $("#space p").remove();
            }
        }
    });
    /*$("#inputarea").change(function(){
        $("#inputc, inputm").val($(this).val());
    });好像不需要*/
    /*$("#inputarea").focus(function(){
        $(".terminal_container").css("height","300px")
    });全失敗 再想想怎麼改
    
    if($("#inputarea").is(":focus")){
        alert("focus!");
        $(".terminal_container").css("height","300px")
    }*/
    /*$(window).resize(function(){
        alert("resized");
        if($(window).width() + $(window).height() != width+height){
          alert("keyboard show up");
          //$(".copyright_link").css("position","relative");  
        }else{
          alert("keyboard closed");
          //$(".copyright_link").css("position","fixed");  
        }
      });*/
    
    panelani("panel5","red");
});

var count = 0;
function track(){
    updateScroll();
    if(count==0){
        addtext(line1,150);
    }else if(count==1){
        addtext(line2,100);
    }else if(count==2){
        addtext(line3,100);
    }else if(count==3){
        addtext(line4,100);
    }else if(count>3 && count<13){
        var randomline = grdline();
        addtext(randomline,180);
    }
    count++;
}

var h = 0;
function heart(){
    updateScroll();
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
function addtext(line, interval){ //dynamic 

    var inputboxc = document.getElementById('input')
    var inputboxm = document.getElementById('inputmi')
    setTimeout(function () {   
        inputboxc.value = inputboxc.value + line[i];
        inputboxm.value = inputboxm.value + line[i];
        i++;
        if (i < line.length){       
            addtext(line,interval);
        }else{
            i=0;
            add(inputboxc.value);
            updateScroll();
            inputboxc.value="";
            inputboxm.value="";
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

function add(text){ //static command
    var t = document.createElement('p')
    t.textContent = "$ "+text;
    var space = document.getElementById("space");
    space.appendChild(t);
}
function addcontent(text){ //static response
    var t = document.createElement('p')
    t.textContent = text;
    var space = document.getElementById("space");
    space.appendChild(t);
    updateScroll();

}

var heart1 ="............◢▇▇◣............◢▇▇◣".split("");
var heart2 ="......◢▇▇▇▇▇◣◢▇▇▇▇▇◣".split("");
var heart3 ="◢▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇◣".split("");
var heart4 ="◥▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇◤".split("");
var heart5 ="......◥▇▇▇▇▇▇▇▇▇▇▇▇◤".split("");
var heart6 ="............◥▇▇▇▇▇▇▇▇▇◤".split("");
var heart7 ="..................◥▇▇▇▇▇◤".split("");
var heart8 ="........................◥▇▇◤".split("");

function grdline(){
    var rdline =[];
    for(j = 0; j < 5; j++){
        var rdnum = (Math.round(Math.random()*10000000))/1000
        var rdstr = rdnum.toString() + " ; "
        rdline.push(rdstr);
    }
    return rdline;
}
function panelani(id,color){
    var p = document.getElementById(id)
    var r = Math.random()*100
    var n = r%25;
    $("#"+id).css({'color': color});
    //var a = new Array(n);

    //p.innerHTML = "▊▊▊▊▊▊";
}

function updateScroll(){
    var element = document.getElementById("t");
    element.scrollTop = element.scrollHeight;
}
