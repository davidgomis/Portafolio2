var $hidden = $('#hidden-text'),
	$button = $('#show-text');

function mostrarTexto(){
	$hidden.slideToggle();
	return false;
}

// Eventos
$button.click( mostrarTexto );