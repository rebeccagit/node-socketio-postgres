/* Filename: sidefile.js */
$(document).ready(function() {

		var title = $(".dog").attr("title");
	    $("#box5").text(title);
	  
	    $("#mydiv").addClass("highlight");

		
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
	   
	   
	   	$('p').click(function () {
			
			$(this).hide();
		
		});
			   
			   
//		$("#driver").click(function(event){
//        
//			$('#box6').load('/myscripts/sidefile.js');
//		});

            $("#driver").click(function(event){
				
               $.getJSON('/myscripts/practice.json', function(anyword) {
                  $('#stage').html('<p> Name: ' + anyword.name + '</p>');
                  $('#stage').append('<p>Age : ' + anyword.age+ '</p>');
                  $('#stage').append('<p> Sex: ' + anyword.sex+ '</p>');
               });
					
            });
	
});