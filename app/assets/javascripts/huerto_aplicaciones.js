$(document).ready(function(){
//----------------view agregando un nuevo empleado-----------------
    
//----------------view index empleado empleado-----------------
    // Cuando se hace click en el basurero para borrar un empleado
    $(".imagenBorrarHuerto_aplicacione").each(function(){ 
       mostrarModalBorrarHuerto_aplicacione($(this));
    });
    



});

function mostrarModalBorrarHuerto_aplicacione(imagenBorrarHuerto_aplicacione){
  $(imagenBorrarHuerto_aplicacione).click(function(){
       $("#modal_borrar_huerto_aplicacione_"+imagenBorrarHuerto_aplicacione.attr("data-id")).modal("show");
  });
}