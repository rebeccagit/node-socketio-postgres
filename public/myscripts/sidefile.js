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
	
	

    function aClick() {
               $("div").show().fadeIn("slow");
            };


   $("div").click(function() {

		//$("*").css("background-color", "white");  
        //alert("Hello, world!");
	  $("div").on("click", aClick).text("Can Click!");
   });
   
});