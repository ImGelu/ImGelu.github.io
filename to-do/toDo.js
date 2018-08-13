// JavaScript Document

$("ul").on("click", "li", function(){
	$(this).toggleClass("checkedItem");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(1000, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13 && $(this).val() !== ""){
		var toDoText = $(this).val();
		$("ul").append("<li><span class='fas fa-trash'></span>" + toDoText + "</li>");
		$(this).val("");
	}
})

$(".fa-plus-circle").click(function(){
	$("input[type='text']").fadeToggle();
});