/* Filename: sidefile.js */
$(document).ready(function() {

		$('div').hover(
				
		function () {
			$(this).css({ "background-color" : "blue" }); 
        }, 
				
        function () {
            $(this).css({ "background-color" : "white" });
        }
		);
			   
		function aClick() {
            $("div").show().fadeIn("slow");
        };
		
		$("div").click(function() {

		$(".cat").on("click", aClick).text("Can Click!").css({"background-color" : "yellow"});

	   });
			   
	
});