$(document).ready(function(){
//----------------view agregando un nuevo empleado-----------------
    $("#botonConfirmarAgregarEmpleado").click(function(){ 
       $("#formAgregarEmpleado").submit();
    });
//----------------view index empleado empleado-----------------
    // Cuando se hace click en el basurero para borrar un empleado
    $(".imagenBorrarEmpleado").each(function(){ 
       mostrarModalBorrarEmpleado($(this));
    });
    // Cuando se hace click en la flecha abajo para ver mas opciones de un empleado
    $(".flechaAbajoMostrarMasInformacionEmpleado").each(function(){
      mostrandoMasInfoEmpleado($(this));
    })
    // Cuando se hace click en la flecha arriba para ver menos opciones de un empleado
    $(".flechaArribaMostrarMenosInformacionEmpleado").each(function(){
      mostrandoMenosInfoEmpleado($(this));
      
    })



});


//----------------funciones index empleado -----------------

function mostrarModalBorrarEmpleado(imagenBorrarEmpleado){
	$(imagenBorrarEmpleado).click(function(){
       $("#modal_borrar_empleado_"+imagenBorrarEmpleado.attr("data-idEmpleado")).modal("show");
	});
}

function mostrandoMasInfoEmpleado(imagenFlechaAbajo){
  $(imagenFlechaAbajo).click(function(){
       $(".empleadoTablaMuchaInformacion_"+imagenFlechaAbajo.attr("data-idEmpleado")).show();
       $(".empleadoTablaPocaInformacion_"+imagenFlechaAbajo.attr("data-idEmpleado")).hide();
  });

}

function mostrandoMenosInfoEmpleado(imagenFlechaArriba){
  $(imagenFlechaArriba).click(function(){
       $(".empleadoTablaMuchaInformacion_"+imagenFlechaArriba.attr("data-idEmpleado")).hide();
       $(".empleadoTablaPocaInformacion_"+imagenFlechaArriba.attr("data-idEmpleado")).show();
  });
  
}