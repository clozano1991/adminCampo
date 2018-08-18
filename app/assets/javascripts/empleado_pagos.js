$(document).ready(function(){
//----------------view agregando un nuevo empleado-----------------
    
//----------------view index empleado empleado-----------------
    // Cuando se hace click en el basurero para borrar un empleado
    $(".imagenBorrarEmpleado_pago").each(function(){ 
       mostrarModalBorrarEmpleado_pago($(this));
    });

});

//----------------funciones index empleado -----------------

function mostrarModalBorrarEmpleado_pago(imagenBorrarEmpleado_pago){
  $(imagenBorrarEmpleado_pago).click(function(){
    $("#modal_borrar_empleado_pago_"+imagenBorrarEmpleado_pago.attr("data-id")).modal("show"); 
  });
}