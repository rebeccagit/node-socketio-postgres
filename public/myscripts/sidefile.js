/* Filename: sidefile.js */
$(document).ready(function() {
	
		$("div").hover(
				
		function () {
			$("div").css("background-color", "white"); 
        }, 
				
        function () {
            $(this).css({"background-color":"blue"});
        }
		);
		

       $("p").css("background-color", "yellow");
  
		
		
$('div').click(function() {

	  $(".cat").on("click", aClick).text("Can Click!").css({"background-color" : "yellow"});
	  
	  var title = $(".dog").attr("title");
	  $("#box4").text(title);
	  
	  $("#mydiv").addClass("highlight");
	  
	   });
	
});