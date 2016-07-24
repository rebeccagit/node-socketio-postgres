/* Filename: sidefile.js */
$(document).ready(function() {
	
		$("p").css("background-color", "yellow");
	   
	    $("#mydiv").addClass("highlight");
  
		$(".cat").on("click", aClick).text("Can Click!").css({"background-color" : "yellow"});
	  
	
		$("div").hover(
				
		function () {
			$(this).css("background-color" : "blue"); 
        }, 
				
        function () {
            $(this).css({"background-color":"blue"});
        }
		);
			   
});