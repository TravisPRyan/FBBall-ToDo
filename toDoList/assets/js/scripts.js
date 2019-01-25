// click to check off
//toggles between done class and null display
$("li").on("click", function(){
	$(this).toggleClass("done", "null");
});

//click on # to delete 
//layer event listeners to prevent event bubbling
//remove hidden elements for improved performance
$("span").on("click", function(e){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	e.stopPropagation();
});