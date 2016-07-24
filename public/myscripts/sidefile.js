/* Filename: sidefile.js */
$(document).ready(function() {
	
		$("p").css("background-color", "yellow");
	   
	    $("#mydiv").addClass("highlight");
  
		$(".cat").on("click", aClick).text("Can Click!").css({"background-color" : "yellow"});
	  
		var title = $(".dog").attr("title");
		$("#box5").text(title);
	
		$("div").hover(
				
		function () {
			$("div").css("background-color", "white"); 
        }, 
				
        function () {
            $(this).css({"background-color":"blue"});
        }
		);
			   
});