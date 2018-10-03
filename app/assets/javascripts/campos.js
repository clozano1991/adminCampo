$(document).ready(function(){
    //----------------view index campos-----------------
    // Cuando se hace click en el lapiz para editar un campo
    $(".imagenEditarCampo").each(function(){ 
       mostrarModalEditarCampo($(this));
    });
    // Cuando se hace click en el basurero para borrar un campo
    $(".imagenBorrarCampo").each(function(){ 
       mostrarModalBorrarCampo($(this));
    });
    // cuando se hace click en el ticket para editar las notas
    $(".ticketGuardarCambiosNotasCampo").each(function(){ 
       editarNotasCampo($(this));
    });
    

    //view seleccionando un mapa -------------------------------
    $("#botonSeleccionarMapa").click(function(){
        seleccionarMapa();
    });
 
    //view configuracion parametros de pago a empleados
    $(".imagenEditarGestionCesantiaSeguro").each(function(){ 
       mostrarModalEditarGestionCesantiaSeguro($(this));
    });
});




//----------------funciones index campo -----------------

// cuando se hace click en el lapiz para editar un campo
function mostrarModalEditarCampo(imagenEditarCampo){
    $(imagenEditarCampo).click(function(){
       $("#modal_editar_campo_"+imagenEditarCampo.attr("data-idCampo")).modal("show");
    });
}
// cuando se hace click en el basurero para borrar un campo
function mostrarModalBorrarCampo(imagenBorrarCampo){
    $(imagenBorrarCampo).click(function(){
       $("#modal_borrar_campo_"+imagenBorrarCampo.attr("data-idCampo")).modal("show");
    });
}
// cuando se hace click en el ticket para editar las notas
function editarNotasCampo(imagenEditarNotasCampo){
    $(imagenEditarNotasCampo).click(function(){
       $("#alertaCambiosNotasGuardadas_"+imagenEditarNotasCampo.attr("data-idCampo")).fadeIn(1000);
       $("#alertaCambiosNotasGuardadas_"+imagenEditarNotasCampo.attr("data-idCampo")).fadeOut(1000);
       $("#formEditarNotasCampo_"+imagenEditarNotasCampo.attr("data-idCampo")).submit();
    });
}



//------------------------funciones seleccionar mapa huertos index------------------------------

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
            console.log("hola");
            //pasamos el canvas a base64
            var imagenBaseSesentaYCuatro= canvas.toDataURL("image/png");
            // incluimos la imagen en el form_for
            $("#imagenMapaAUsar").append(imagenBaseSesentaYCuatro); 
            console.log(imagenBaseSesentaYCuatro);
            // hacemos submit para el form
            //$("#guardandoUrlBaseDiesParaCampo").submit();
            $("body").append(url(imagenBaseSesentaYCuatro));
        } 
    });   
}

//------------------------funciones configuracion parametros------------------------------
// parametros de pagos a empleados
// cuando se hace click en el lapiz para editar un parametro de seguro cesantia
function mostrarModalEditarGestionCesantiaSeguro(imagenEditarGestionCesantiaSeguro){
    $(imagenEditarGestionCesantiaSeguro).click(function(){
       $("#modal_editar_gestion_cesantia_seguro_"+imagenEditarGestionCesantiaSeguro.attr("data-idGestionCesantiaSeguro")).modal("show");
    });
}