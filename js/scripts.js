// ###########################
// CODING CHALLENGE - JS                    
// ###########################



// #################### THREE UP BUTTON TOGGLES ####################
// on click, this toggles the fontawesome icon class name, and the content of the span from view to hide
$('.three-up__item__button').click(function() {
	$(this).find('i').toggleClass('fa-eye fa-eye-slash');
   $(this).find('span').text($(this).find('span').text() == 'View' ? 'Hide' : 'View');
});





