$(document).ready(function(){
     $("cancelarCreacion").click(function(){
          $("crearCampoModal").modal("hide");
     });


     //main de la parte cuando se elige un mapa -------------------------------
    $("#botonSeleccionarMapa").click(function(){
        seleccionarMapa();
    });


     


});




// lo que pasa al seleccionar el mapa, aca se completa todo
function seleccionarMapa(){
    //mostramos aviso, modificamos imagen del mouse y 
    $("#avisoGuardandoMapa").fadeIn(2000);
    // le quitamos los botones al mapa ara que no salgan en la foto
    map.setOptions({draggable: false, zoomControl: false, scrollwheel: false, disableDoubleClickZoom: true});
    // pasamos el html a canvas
    html2canvas(document.querySelector("#gridDerechaMapaHuertosSeleccionarMapa"),{
        useCORS: true,
        onrendered: function(canvas){
            //pasamos el canvas a base64
            var image = canvas.toDataURL("image/png");
            // incluimos la imagenURL en el form_for
            $("#urlImagenMapaAUsar").val(image); 
            // hacemos submit para el form
            $("#guardandoUrlBaseDiesParaCampo").submit();

        } 
    });
    
}
