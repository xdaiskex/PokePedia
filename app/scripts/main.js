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
		var wobble = document.getElementById('pokeballWobble');
	   	$('#pokeballWobble').prop('volume', 1);
	    $('#pokeballWobble').on('play', function() {
	    	$('#pokeballWobble').animate({volume: 1}, 300);
	    });
	    wobble.play();
	},
    function(){
    	$(this).removeClass('animated bounceInDown');
        $(this).css('filter', 'brightness(1)');
		$(this).css('transition', '.5s');
		var wobble = document.getElementById('pokeballWobble');
		$('#pokeballWobble').animate({volume: 0}, 300);
		
		setTimeout(function(){
			wobble.pause();
			wobble.currentTime = 0;
	    }, 100);
    });

    $('#pokeball').click(function(){
		$('.first').css('opacity', '0');
		$('.first').css('transition', '1s');
		$('#pokeballWobble').animate({volume: 0}, 500);
		setTimeout(function(){
			var wobble = document.getElementById('pokeballWobble');
			wobble.pause();
			var pokeball = document.getElementById('pokeballOpen');
	    	pokeball.play();
	    }, 200);
		setTimeout(function(){
			$('.navbar').css('opacity', '1');
			$('.navbar').css('transition', '1s');
			$('.second, .third').css('display', 'block');
			$('.second, .third').css('transition', '1s');
			$('#pokeman').css('display', 'block');
			$('.welcome2').css('display', 'block');
			$('.welcome1').css('display', 'none');
			$('.first').css('opacity', '1');
			$('.first').css('transition', '3s');
			$('#pokeball').remove();
		}, 2000);
		setTimeout(function(){
			var background = document.getElementById('backgroundMusic');
			background.play();
	    }, 3500);
	});
});