// click to check off
//toggles between done class and null display
$("ul").on("click", "li", function(){
	$(this).toggleClass("done", "null");
});

//click on # to delete 
//layer event listeners to prevent event bubbling
//remove hidden elements for improved performance
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	e.stopPropagation();
});

//listens for enter keypress in text input 
//applies input to var
//clear input
//append var to ul as li
$('input[type="text"]').keypress(function(e){
	if(e.which === 13){
		var userInp = $(this).val();
		$(this).val("");
		$('ul').append("<li><span> <i class='far fa-trash-alt'></i> </span>" +"   " + userInp + "</li>");
	}
});

