$(document).ready(function(){
//----------------view agregando un nuevo equipo-----------------

//----------------view index equipo equipo-----------------
    // Cuando se hace click en el basurero para borrar un equipo
    $(".imagenBorrarEquipo").each(function(){ 
       mostrarModalBorrarEquipo($(this));
    });
    // Cuando se hace click en la flecha abajo para ver mas opciones de un equipo
    $(".flechaAbajoMostrarMasInformacionEquipo").each(function(){
      mostrandoMasInformacion($(this));
    })
    // Cuando se hace click en la flecha arriba para ver menos opciones de un equipo
    $(".flechaArribaMostrarMenosInformacionEquipo").each(function(){
      mostrandoMenosInformacion($(this));
      
    })



});


//----------------funciones index equipo -----------------

function mostrarModalBorrarEquipo(imagenBorrarEquipo){
	$(imagenBorrarEquipo).click(function(){
       $("#modal_borrar_equipo_"+imagenBorrarEquipo.attr("data-idEquipo")).modal("show");
	});
}

function mostrandoMasInformacion(imagenFlechaAbajo){
  $(imagenFlechaAbajo).click(function(){
       $(".equipoTablaMuchaInformacion_"+imagenFlechaAbajo.attr("data-idEquipo")).show();
       $(".equipoTablaPocaInformacion_"+imagenFlechaAbajo.attr("data-idEquipo")).hide();
  });

}

function mostrandoMenosInformacion(imagenFlechaArriba){
  $(imagenFlechaArriba).click(function(){
       $(".equipoTablaMuchaInformacion_"+imagenFlechaArriba.attr("data-idequipo")).hide();
       $(".equipoTablaPocaInformacion_"+imagenFlechaArriba.attr("data-idequipo")).show();
  });
  
}