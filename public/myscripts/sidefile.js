/* Filename: sidefile.js */
$(document).ready(function() {
	
		$('div').hover(
				
		function () {
			$("*").css("background-color", "white"); 
        }, 
				
        function () {
            $(this).css({"background-color":"blue"});
        }
    );

   $("div").click(function() {

		//$("*").css("background-color", "white");  
        alert("Hello, world!");
	  
	  
	  
   });
   
});