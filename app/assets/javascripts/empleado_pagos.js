$(document).ready(function(){
    //----------------view index empleado_pago-----------------
    // Cuando se hace click en el basurero para borrar un pago
    $(".imagenBorrarEmpleado_pago").each(function(){ 
       mostrarModalBorrarEmpleado_pago($(this));
    });
    //----------------view new empleado_pago-----------------para que funcioe cocoon
    
});

//----------------funciones index empleado_pagos -----------------

function mostrarModalBorrarEmpleado_pago(imagenBorrarEmpleado_pago){
  $(imagenBorrarEmpleado_pago).click(function(){
    $("#modal_borrar_empleado_pago_"+imagenBorrarEmpleado_pago.attr("data-id")).modal("show"); 
  });
}

//----------------funciones new empleado_pagos -----------------

