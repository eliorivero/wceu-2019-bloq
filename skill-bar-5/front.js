window.addEventListener( 'load', function() {
	Array.prototype.forEach.call( document.querySelectorAll( '.wceu2019bloq__bar' ), function( skillBar ) {
		skillBar.style[ 'background-color' ] = skillBar.getAttribute( 'data-color' );
		skillBar.style.width = skillBar.getAttribute( 'data-size' ) + '%';
	} );
} );
