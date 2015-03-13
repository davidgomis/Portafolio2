var $hidden = $('#hidden-text'),
	$button = $('#show-text'),
	$button2 = $('.article-down-button');

function mostrarTexto(){
	$hidden.slideToggle();
	return false;
}

// Eventos
$button.click(mostrarTexto);
$button2.click(mostrarTexto);