/* Filename: sidefile.js */
$(document).ready(function() {
	
		$('div').hover(
				
		function () {
			$(this).css({"background-color":"red"});
        }, 
				
        function () {
            $(this).css({"background-color":"blue"});
        }
    );

   $("div").click(function() {

		$("*").css("background-color", "yellow");  
        alert("Hello, world!");
	  
	  
	  
   });
   
});