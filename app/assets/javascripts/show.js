$(document).ready(function(){
	$("#o2").hide(); //test
	$(".footer").hide();
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
					add(username);
				}, 300);
            }
            else if(val == "gc current mission"){
            	add(val);
            	var usermission = document.getElementById('currentmission').innerHTML;
            	setTimeout(function() {
					add(usermission);
				}, 300);
            }
            else if(val == "gc schedule"){
            	add(val);
            	var description = document.getElementById('description').innerHTML;
            	setTimeout(function() {
					add(description);
				}, 300);
            }
            else if(val == "help"){
            	add(val);
            	var help = 
            	setTimeout(function() {
					add("hello world, whoami, gc current mission, gc description, help, clear, hide setting, show setting");
				}, 300);
            }
            else if(val == "clear"){
            	$("#space p").remove();
            }
            else if(val == "hide setting"){
            	add(val);
            	$(".footer").hide();
            }
            else if(val == "show setting"){
            	add(val);
            	$(".footer").show();
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