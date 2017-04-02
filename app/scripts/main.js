$(document).ready(function() {
	$('#fullpage').fullpage({
		menu: '#menu',
		keyboardScrolling: true,
		verticalCentered: false,
		anchors:['first', 'second', 'third']
	});

	$('#pokeball').hover(function(){
		$(this).css('filter', 'brightness(.5)');
		$(this).css('transition', '.5s');
	},
    function(){
        $(this).css('filter', 'brightness(1)');
		$(this).css('transition', '.5s');
    });

    $('#pokeball').click(function(){
		$('.container').css('opacity', '0');
		//$('.navbar').css('opacity', '0');
		$('.first').css('transition', '1s');
		$('.pokedex').css('display', 'block');
		/*$('.first').css('opacity', '1');
		$('.first').css('transition', '1s');*/
	});
});