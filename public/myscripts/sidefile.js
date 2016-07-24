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
	  $(".cat").on("click", aClick).text("Can Click!").css({"background-color" : "yellow"});
	  
	  var title = $(".dog").attr("title");
	  $("#box4").text(title);
	  
	  $("#mydiv").addClass("highlight");
	  
   });
   
   $("#driver").click(function(event){
               $('#box6').load('/myscripts/sidefile.js');
            });

});