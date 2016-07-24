/* Filename: sidefile.js */
$(document).ready(function() {

		$("div").hover(
				
		function () {
			$('div').css("background-color" : "blue"); 
        }, 
				
        function () {
            $(this).css({"background-color":"blue"});
        }
		);
			   
});