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
		$('.first').css('opacity', '0');
		$('.first').css('transition', '1s');

		setTimeout(function(){
			$('#pokeman').css('display', 'block');
			$('.welcome2').css('display', 'block');
			$('.welcome1').css('display', 'none');
			$('.first').css('opacity', '1');
			$('.first').css('transition', '2s');
			$('#pokeball').remove();
		}, 2000);
		
	});
});