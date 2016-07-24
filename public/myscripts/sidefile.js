/* Filename: sidefile.js */
$(document).ready(function() {
	
		$('div').hover(
				
		function () {
			$("*").css("background-color", "blue"); 
        }, 
				
        function () {
            $(this).css({"background-color":"white"});
        }
		);
	
});