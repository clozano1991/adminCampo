
// ------------------------------------ main -------------------------------
$(document).ready(function(){
    // funcionamiento de las flechas 
    $(".flechaAbajoMostrarMasInformacionCuentaSeleccionada").each(function(){
        mostrandoMasInformacionFlechaAbajo($(this));
    });
    $(".flechaArribaMostrarMenosInformacionCuentaSeleccionada").each(function(){
        mostrandoMenosInformacionFlechaArriba($(this));
    });
});

//----------------funciones index elemento_contables -----------------

function mostrandoMasInformacionFlechaAbajo(imagenFlechaAbajo){
	$(imagenFlechaAbajo).click(function(){
       $(".subInformacion"+imagenFlechaAbajo.attr("data-flechaCuentaEERR")).show();
       $(this).hide();
       $("#flechaArriba"+imagenFlechaAbajo.attr("data-flechaCuentaEERR")).show();
    });
}
function mostrandoMenosInformacionFlechaArriba(imagenFlechaArriba){
	$(imagenFlechaArriba).click(function(){
       $(".subInformacion"+imagenFlechaArriba.attr("data-flechaCuentaEERR")).hide();
       $(this).hide();
       $("#flechaAbajo"+imagenFlechaArriba.attr("data-flechaCuentaEERR")).show();
    });
}