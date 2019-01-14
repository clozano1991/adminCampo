$(document).ready(function(){       
//main de la parte principal de los huertos
    //mostramos los huertos existentes al cargar el doc
    $(".huertos").each(function(){
        mostrarHuerto($(this));
    });
    // que pasa al cambiar de bloque al apretar los botones con numeritos
    $(".botonParaCambiarBloque").each(function(){
        cambiarBloqueHuertos($(this));
    });
    // definimos que pasa al apretar un huerto ya existente
    $(".huertos").each(function(){
        apretarHuerto($(this));
    });
    // lo que pasa al hacer click en el svg
    $(".svgMapasBloques").click(function(e){ 
        haciendoClickEnSVG(e,$(this));//se le manda tambien el svg donde se hace click
    });
    // Regrezamos a la vista normal de un modal
    $(".regresarHuertoModal").each(function(){
        mostrarVistaNormalHuertoModal($(this));
    });

    //-----------------------------------------agregando huerto -----------------------------------------------

    // boton agregando un huerto
    $('#botonAgregarHuerto').click(function(){
        agregarHuerto();
    });
    // confirmar la creacion de la figura del huerto
    $("#botonConfirmarAgregarHuerto").click(function(){
        creacionHuerto();
    });
    // cancelar la creacion del huerto
    $("#cancelarAgregarHuerto").click(function(){
        cancelarAgregarHuerto();
    });
    //-----------------------------------------editando huerto -----------------------------------------
    // boton editar huerto
    // seleccionar lapiz para editar un huerto en el modal
    $(".editarHuertoModal").each(function(){
        mostrarVistaEditarHuertoModal($(this)); // esta vista es donde estan los do botones para seleccion (info-figura)
    });
    //----------editando la superficie del huerto------------
    //boton editar huerto superficie
    $(".botonSeleccionarEditarSuperficie").each(function(){
        iniciarEdicionSuperficieHuerto($(this));
    });
    //confirmar edicion figura huerto una vez que se hizo la nueva figura
    $("#confirmarEditandoHuertoFiguraElegida").click(function(){
        confirmarEditandoHuertoFiguraElegida();
    });
    //seleccionamos editar figura del huerto
    $("#cancelarEditandoHuertoFiguraElegida").click(function(){
        cancelarEditandoHuertoFigura();
    });
    //----------editando la informacion del huerto------------
    $(".botonSeleccionarEditarInformacion").each(function(){
        mostrarVistaEditarInformacionHuertoModal($(this));
    });

    

    //-----------------------------------------eliminar un huerto----------------------------------------
    // seleccionar basurero para borar un huerto en el modal
    $(".borrarHuertoModal").each(function(){
        mostrarVistaBorrarHuertoModal($(this));
    });


    //mostramos la imagen de fondo del huerto 
    mostrarMapaFondoBloques();


    
});

//---------------------------------funciones parte huertos general-------------------------------------------------

// cambiando de bloques con los botones con numeritos
function cambiarBloqueHuertos(boton){
  boton.click(function(){
    if ($("#gridDerechaMapaHuertos").attr("data-permiso")!="normal") {
           $("#avisoNoSePuedeCambiarBloque").show();
           $("#avisoNoSePuedeCambiarBloque").fadeOut(3000);
    }
    //solo permitimos el cambio cuando no se esta creando ni editando un herto
    if ($("#gridDerechaMapaHuertos").attr("data-permiso")=="normal") {
        //vemos cual es el boton que se clickeo
        if (boton.attr("id")=="botonParaCambiarABloqueUno"){
            // verificamos que no este ya en el bloque uno
            if ($("#gridDerechaMapaHuertos").attr("data-bloque")!="bloqueHuertosUno") {

                // cambiamos el data que nos dice en que bloque estamos
                $("#gridDerechaMapaHuertos").attr("data-bloque","bloqueHuertosUno");

                //removemos las clases de los otros botones que estan activos
                $("#botonParaCambiarABloqueDos").removeClass("btn-dark");
                $("#botonParaCambiarABloqueTres").removeClass("btn-dark");
                $("#botonParaCambiarABloqueDos").removeClass("active");
                $("#botonParaCambiarABloqueTres").removeClass("active");
                // a los botones que estaban activos les damos la clase btn-secondary
                $("#botonParaCambiarABloqueDos").addClass("btn-secondary");
                $("#botonParaCambiarABloqueTres").addClass("btn-secondary");
                //ahora le quitamos las clases antiguas al boton que se clickeo y agregaos las nuevas
                boton.removeClass("btn-secondary");
                boton.addClass("btn-dark");
                boton.addClass("active");

                //ahora dejamos de mostrar los bloques y mostramos el bloque que se solicita
                $("#bloqueHuertosDos").hide();
                $("#bloqueHuertosTres").hide();
                $("#bloqueHuertosUno").show();
                //dejamos de mostrar los otros botones y mostramos el boton seleccionado
                $("#botonAgregarMapaBloqueTres").hide();
                $("#botonAgregarMapaBloqueDos").hide();
                $("#botonAgregarMapaBloqueUno").show();
            }

        }
        if (boton.attr("id")=="botonParaCambiarABloqueDos"){
            // verificamos que no este ya en el bloque Dos
            if ($("#gridDerechaMapaHuertos").attr("data-bloque")!="bloqueHuertosDos") {

                // cambiamos el data que nos dice en que bloque estamos
                $("#gridDerechaMapaHuertos").attr("data-bloque","bloqueHuertosDos");

                //removemos las clases de los otros botones que estan activos
                $("#botonParaCambiarABloqueUno").removeClass("btn-dark");
                $("#botonParaCambiarABloqueTres").removeClass("btn-dark");
                $("#botonParaCambiarABloqueUno").removeClass("active");
                $("#botonParaCambiarABloqueTres").removeClass("active");
                // a los botones que estaban activos les damos la clase btn-secondary
                $("#botonParaCambiarABloqueUno").addClass("btn-secondary");
                $("#botonParaCambiarABloqueTres").addClass("btn-secondary");
                //ahora le quitamos las clases antiguas al boton que se clickeo y agregaos las nuevas
                boton.removeClass("btn-secondary");
                boton.addClass("btn-dark");
                boton.addClass("active");

                //ahora dejamos de mostrar los bloques y mostramos el bloque que se solicita
                $("#bloqueHuertosUno").hide();
                $("#bloqueHuertosTres").hide();
                $("#bloqueHuertosDos").show();
                //dejamos de mostrar los otros botones y mostramos el boton seleccionado
                $("#botonAgregarMapaBloqueUno").hide();
                $("#botonAgregarMapaBloqueTres").hide();
                $("#botonAgregarMapaBloqueDos").show();

            }

        }
        if (boton.attr("id")=="botonParaCambiarABloqueTres"){
            // verificamos que no este ya en el bloque tres
            if ($("#gridDerechaMapaHuertos").attr("data-bloque")!="bloqueHuertosTres") {

                // cambiamos el data que nos dice en que bloque estamos
                $("#gridDerechaMapaHuertos").attr("data-bloque","bloqueHuertosTres");

                //removemos las clases de los otros botones que estan activos
                $("#botonParaCambiarABloqueUno").removeClass("btn-dark");
                $("#botonParaCambiarABloqueDos").removeClass("btn-dark");
                $("#botonParaCambiarABloqueUno").removeClass("active");
                $("#botonParaCambiarABloqueDos").removeClass("active");
                 // a los botones que estaban activos les damos la clase btn-secondary
                $("#botonParaCambiarABloqueUno").addClass("btn-secondary");
                $("#botonParaCambiarABloqueDos").addClass("btn-secondary");
                //ahora le quitamos las clases antiguas al boton que se clickeo y agregaos las nuevas
                boton.removeClass("btn-secondary");
                boton.addClass("btn-dark");
                boton.addClass("active");

                //ahora dejamos de mostrar los bloques y mostramos el bloque que se solicita
                $("#bloqueHuertosUno").hide();
                $("#bloqueHuertosDos").hide();
                $("#bloqueHuertosTres").show();
                //dejamos de mostrar los otros botones y mostramos el boton seleccionado
                $("#botonAgregarMapaBloqueUno").hide();
                $("#botonAgregarMapaBloqueDos").hide();
                $("#botonAgregarMapaBloqueTres").show();

            }    
        }
    }
    });
}
function mostrarHuerto(figura){
        // tomamos los datos de % del huerto
        var porcentajes=figura.attr("data-porcentajes");
        // transformamos los datos a posicion en el svg
        var coordenadasPosicion = transformarPorcentajesACoordenadasPosicionEnSVG(porcentajes);
        //asignamos a los points del polyline las coordenadas posicion obtenidas
        figura.attr("points",coordenadasPosicion);
        //vemos los colores dependiendo de la clase
        if(String(figura.data("clase"))=="green"){
            figura.attr("fill","#34a853"); 
        }
        if(String(figura.data("clase"))=="red"){
            figura.attr("fill","#ea4335");  
        }
        
        if(String(figura.data("clase"))=="yellow"){
            figura.attr("fill","#fbbc05"); 
        }
        if(String(figura.data("clase"))=="blue"){
            figura.attr("fill","#4285f4");     
        }
        //agregamos la sombra correspondiente al polyline
        figura.attr("stroke","#BDBDBE");
}
function transformarPorcentajesACoordenadasPosicionEnSVG(porcentajes){
    //hacemos notamos que el utimo elemento del arreglo sera " "
    var arregloCoordenadasEnPorcentaje= String(porcentajes).split("-");
    // notamos que el utimo elemento del arreglo sera " ", lo quitamos 
    arregloCoordenadasEnPorcentaje.pop();
    //ahora transformamos cada parte del array a coordenadas de posicion en el svg
    var anchoSvg = $("#gridDerechaMapaHuertos").width();
    var altoSvg = $("#gridDerechaMapaHuertos").height();
    var arregloCoordenadasPosicion = [];
    for (i in arregloCoordenadasEnPorcentaje){
        var duplaCoordenadasPorcentage= arregloCoordenadasEnPorcentaje[i].split(",");
        var x=parseFloat(duplaCoordenadasPorcentage[0])*anchoSvg;
        var y=parseFloat(duplaCoordenadasPorcentage[1])*altoSvg;
        var duplaCoordenadasPosicion = [];
        duplaCoordenadasPosicion.push(String(x)+","+String(y));
        arregloCoordenadasPosicion.push(duplaCoordenadasPosicion[0]);
    }
    //aca hacemos que el ultimo elemento de string coordenadas sea el primero, cosa que se cierre 
    var coordenadaPrimeraPosicionPorcentaje=arregloCoordenadasPosicion[0];
    arregloCoordenadasPosicion.push(coordenadaPrimeraPosicionPorcentaje);

    // ahora que tenemos un arreglo con las coordenadas en posicion, las metemos todas en un string
    var stringCoordenadas="";
    for (i in arregloCoordenadasPosicion){
        var stringCoordenadas=stringCoordenadas+String(arregloCoordenadasPosicion[i])+" ";
    }

    // retornamos las coordenadas que tienen que aplicarse al elemento polyline
    return stringCoordenadas
}    
function apretarHuerto(figura){
    $("#huerto_"+figura.attr("data-id")).click(function(){
        if ($("#gridDerechaMapaHuertos").attr("data-permiso")=="normal"){
            $("#modal_huerto_"+figura.attr("data-id")).modal("show");    
        }         
    });   
}
// cuando se hace click en el svg, agregamos las coordenadas en porcentaje a el data de la figura
function haciendoClickEnSVG(e,svgBloque){ 
 //solo se ejecuta si tiene el permiso que esta en el cardBody para crear
 if ($("#gridDerechaMapaHuertos").attr("data-permiso")=="creandoNuevoHuerto"){
    //------------------obteniendo posicion del click en %-----------------------------
    //obtenemos dimenciones del contenedor del svg
    var anchoSvg = $("#gridDerechaMapaHuertos").width();
    var altoSvg = $("#gridDerechaMapaHuertos").height();
    //obtenemos pos x,y de donde esta ubicado el contenedor del svg
    var position= $("#gridDerechaMapaHuertos").position();
    var posX = position.left;
    var posY = position.top;
    // obtenemos pos relativas x,y de donde se hace el click en el contenedor del SVG
    var posXenSvg = e.pageX - posX;
    var posYenSvg = e.pageY - posY;
    // obtenemos porcentage x,y de donde se hace click en el contenedor del SVG
    var porcentageX = posXenSvg/anchoSvg;
    var porcentageY = posYenSvg/altoSvg;
    // juntamos las pociciones en un solo string al estilo "x,y-"
    var posicionPorcentaje= (String(porcentageX)+ ',' +String(porcentageY)+"-");
    console.log(posicionPorcentaje);
    //agregando la posicion en % al polyline-
    $("#huertoNuevo").attr("data-porcentajes",$("#huertoNuevo").attr("data-porcentajes")+posicionPorcentaje);
    // usando una funcion se transforman los puntos acumulados en % a puntos reales
    var coordenadasPosicion=transformarPorcentajesACoordenadasPosicionEnSVG( $("#huertoNuevo").attr("data-porcentajes"));
    //agregamos los punos reales al attr points del polyline/huerto
    $("#huertoNuevo").attr("points",coordenadasPosicion);

    //----------------------------agregando circulos rojos al click------------------
    var circulo=document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circulo.setAttribute("cx",String(posXenSvg));
    circulo.setAttribute("cy",String(posYenSvg));
    circulo.setAttribute("r","3");
    circulo.setAttribute("fill","red");
    circulo.setAttribute("class","circulitos");
    svgBloque.append(circulo);
    }

    //solo se ejecuta si tiene el permiso que esta en el cardBody para editar
    if ($("#gridDerechaMapaHuertos").attr("data-permiso")=="editandoHuertoFiguraElegido"){
        //no se activa el if si el primer click no se ha realizado
        
            // hacemos un each en la clase huertoEnEdicion para obtener el id del unico elemento siendo editado
            $(".huertoEnEdicion").each(function(){
                //------------------obteniendo posicion del click en %-----------------------------
                //obtenemos dimenciones del contenedor del svg
                var anchoSvg = $("#gridDerechaMapaHuertos").width();
                var altoSvg = $("#gridDerechaMapaHuertos").height();
                //obtenemos pos x,y de donde esta ubicado el contenedor del svg
                var position= $("#gridDerechaMapaHuertos").position();
                var posX = position.left;
                var posY = position.top;
                // obtenemos pos relativas x,y de donde se hace el click en el contenedor del SVG
                var posXenSvg = e.pageX - posX;
                var posYenSvg = e.pageY - posY;
                // obtenemos porcentage x,y de donde se hace click en el contenedor del SVG
                var porcentageX = posXenSvg/anchoSvg;
                var porcentageY = posYenSvg/altoSvg;
                // juntamos las pociciones en un solo string al estilo "x,y-"
                var posicionPorcentaje= (String(porcentageX)+ ',' +String(porcentageY)+"-");
                //agregando la posicion en % al polyline-
                $(this).attr("data-porcentajes",$(this).attr("data-porcentajes")+posicionPorcentaje);
                // usando una funcion se transforman los puntos acumulados en % a puntos reales
                var coordenadasPosicion=transformarPorcentajesACoordenadasPosicionEnSVG( $(this).attr("data-porcentajes"));
                //agregamos los punos reales al attr points del polyline/huerto
                $(this).attr("points",coordenadasPosicion);

                //----------------------------agregando circulos rojos al click------------------
                var circulo=document.createElementNS("http://www.w3.org/2000/svg", "circle");
                circulo.setAttribute("cx",String(posXenSvg));
                circulo.setAttribute("cy",String(posYenSvg));
                circulo.setAttribute("r","3");
                circulo.setAttribute("fill","red");
                circulo.setAttribute("class","circulitos");
                svgBloque.append(circulo);
            });
        }  
}
// en el modal hace que al apretar la flecha de retroceso se vuelva a la vista normal
function mostrarVistaNormalHuertoModal(imagenRegresarClickeada){
    $(imagenRegresarClickeada).click(function(){
        $(".imagenRegresarANormalHuertoModal_"+ $(this).attr("data-idHuerto")).hide();
        $(".vistaEditandoHuertoModal_"+ $(this).attr("data-idHuerto")).hide();
        $(".vistaBorrarHuertoModal_"+ $(this).attr("data-idHuerto")).hide();
        $(".vistaEditandoInformacionHuertoModal_"+ $(this).attr("data-idHuerto")).hide();
        $(".vistaNormalHuertoModal_"+ $(this).attr("data-idHuerto")).show();
        $(".opcionesEditarBorrarHuertoModal_"+ $(this).attr("data-idHuerto")).show();
    });
}
//funciones para mostrar mapa fondos huertos
function mostrarMapaFondoBloques(){ 
    var imagenEnTextoBloqueUno = $("#bloqueHuertosUno").attr("data-urlImagen");    
    $("#svgMapaBloqueUno").css("background-image","url("+imagenEnTextoBloqueUno+")");
    var imagenEnTextoBloqueDos = $("#bloqueHuertosDos").attr("data-urlImagen");    
    $("#svgMapaBloqueDos").css("background-image","url("+imagenEnTextoBloqueDos+")");
    var imagenEnTextoBloqueTres = $("#bloqueHuertosTres").attr("data-urlImagen");    
    $("#svgMapaBloqueTres").css("background-image","url("+imagenEnTextoBloqueTres+")");
}



//----------------------------------funciones para agregar huerto---------------------------------
function agregarHuerto(){
    // cambiamos los textos y botones de "normal" a "agragando huerto"
    $(".vistaNormalIndexHuertos").hide();
    $(".vistaAgregandoHuertoIndexHuertos").show();
    //cambiamos el permiso 
    $("#gridDerechaMapaHuertos").attr("data-permiso","creandoNuevoHuerto");
    // se crea una figura polyline y se agrega al html, con sus atriutos basicos.
    var figura= document.createElementNS("http://www.w3.org/2000/svg", "polyline");
    figura.setAttribute("class","huertoEnCreacion");
    figura.setAttribute("id","huertoNuevo");
    figura.setAttribute("points"," ");
    figura.setAttribute("data-porcentajes","");
    figura.setAttribute("stroke","red");
    figura.setAttribute("fill","lightGreen");
    // vemos en que bloque estamos y agregamos la figuara de huerto nuevo
    if ($("#gridDerechaMapaHuertos").attr("data-bloque")=="bloqueHuertosUno"){
        $("#svgMapaBloqueUno").append(figura);
    }
    if ($("#gridDerechaMapaHuertos").attr("data-bloque")=="bloqueHuertosDos"){
        $("#svgMapaBloqueDos").append(figura);
    }
    if ($("#gridDerechaMapaHuertos").attr("data-bloque")=="bloqueHuertosTres"){
        $("#svgMapaBloqueTres").append(figura);
    }  
    //asignamos el vaor del bloque en que se encuentra a la forma de creacion
    $("#bloqueMapaFormularioCreacionHuerto").val($("#gridDerechaMapaHuertos").attr("data-bloque")); 
}
// verifica que la figua sea correcta y muestra el modal para la informacion, hace el submit del form crear
function creacionHuerto(){
    // verificamos que la superficie del huerto exista
    if ($("#huertoNuevo").attr("data-porcentajes").split(",").length<4){
        $("#avisoSuperficieHuertoNoValida").show();
        $("#avisoSuperficieHuertoNoValida").fadeOut(3000);
    }
    // si la superficie existe se le permite continuar con la creacion del huerto
    if ($("#huertoNuevo").attr("data-porcentajes").split(",").length>=4){
        //mostramos formulario para continuar creacion
        $("#agregarHuertoModal").modal("show");
        // le asignamos al formulario el valor oculto de las coordenadas en porcentaje
        $("#coordenadasFormularioCreacionHuerto").val($("#huertoNuevo").attr("data-porcentajes"));
        // le asignamos al formulario el valor oculto del bloque mapa
        if ($("#gridDerechaMapaHuertos").attr("data-bloque")=="bloqueHuertosUno"){
            $("#bloqueMapaormularioCreacionHuerto").val("bloqueHuertosUno");
        }
        if ($("#gridDerechaMapaHuertos").attr("data-bloque")=="bloqueHuertosDos"){
            $("#bloqueMapaormularioCreacionHuerto").val("bloqueHuertosDos");
        }
        if ($("#gridDerechaMapaHuertos").attr("data-bloque")=="bloqueHuertosTres"){
           $("#bloqueMapaormularioCreacionHuerto").val("bloqueHuertosTres"); 
        }
        // -----------------Creacion del huerto--------------------------
        $("#botonConfirmarCrearHuertoFinalFormulario").click(function(){
            $("#formAgregarHuerto").submit();
        });
    } 
}
//Lo que pasa cuando apretamos el boton cancelar de la izquierda al estar aregando un huerto
function cancelarAgregarHuerto(){
    // se muestran los botones normales y se esconden los de agregar huerto
    $(".vistaAgregandoHuertoIndexHuertos").hide();
    $(".vistaNormalIndexHuertos").show();
    //cambiamos la clase del huerto que se estaba creando por una clase y los escondemos.
    $(".huertoEnCreacion").attr("class","huertoDesechar");
    $(".circulitos").attr("class","huertoDesechar");
    $(".huertoDesechar").hide();
    //cambiamos el id 
    $("#huertoNuevo").attr("id","");
    //volvemos al permiso normal en el card body
    $("#gridDerechaMapaHuertos").attr("data-permiso","normal");
}



//----------------------------------funciones para editar huerto---------------------------------
// al apretar el lapis del modal se cambia la vista a la de seleccion editar figura o informacion
function mostrarVistaEditarHuertoModal(imagenLapizClickeada){
    $(imagenLapizClickeada).click(function(){
        $(".opcionesEditarBorrarHuertoModal_"+ $(this).attr("data-idHuerto")).hide();
        $(".vistaNormalHuertoModal_"+ $(this).attr("data-idHuerto")).hide();
        $(".imagenRegresarANormalHuertoModal_"+ $(this).attr("data-idHuerto")).show();
        $(".vistaEditandoHuertoModal_"+ $(this).attr("data-idHuerto")).show();
    });
}
// se selecciona el boton para editar la informacion del huerto en el modal
function mostrarVistaEditarInformacionHuertoModal(boton){
    $(boton).click(function(){
        $(".vistaEditandoHuertoModal_"+ $(this).attr("data-idHuerto")).hide();
        $(".vistaEditandoInformacionHuertoModal_"+ $(this).attr("data-idHuerto")).show();
    });
}
// se selecciona el boton para editar la Superficie del huerto en el mapa
function iniciarEdicionSuperficieHuerto(botonClickeado){
    //aca poner lo necesario
    $(botonClickeado).click(function(){
        $("#modal_huerto_"+botonClickeado.attr("data-idHuerto")).modal("hide");
        $("#huerto_"+botonClickeado.attr("data-idHuerto")).hide();
        huertoFiguraParaEditarElegida(botonClickeado.attr("data-idHuerto"));

        // mostramos la vista del grid izquierda
        $(".vistaNormalIndexHuertos").hide();
        $(".vistaEditandoHuertoFiguraIndexHuertos").show();
    });
}
function huertoFiguraParaEditarElegida(id){
        // se crea una figura polyline y se agrega al html, con sus atriutos basicos.
        var figura= document.createElementNS("http://www.w3.org/2000/svg", "polyline");
        figura.setAttribute("class","huertoEnEdicion");
        figura.setAttribute("id","huertoEditando_"+id);
        figura.setAttribute("points"," ");
        figura.setAttribute("data-porcentajes","");
        figura.setAttribute("data-id",id);
        figura.setAttribute("stroke","red");
        figura.setAttribute("fill","lightGreen"); 


        // modificamos el permiso del grid derecha (svg)
        $("#gridDerechaMapaHuertos").attr("data-permiso","editandoHuertoFiguraElegido");
        

        if ($("#gridDerechaMapaHuertos").attr("data-bloque")=="bloqueHuertosUno"){
           $("#svgMapaBloqueUno").append(figura);
        }
        if ($("#gridDerechaMapaHuertos").attr("data-bloque")=="bloqueHuertosDos"){
           $("#svgMapaBloqueDos").append(figura);
        }
        if ($("#gridDerechaMapaHuertos").attr("data-bloque")=="bloqueHuertosTres"){
           $("#svgMapaBloqueTres").append(figura);
        }       
}

// funcion que hace el submit del form del huerto editado
function confirmarEditandoHuertoFiguraElegida(){
    $(".huertoEnEdicion").each(function(){
        if ($(this).attr("data-porcentajes").split(",").length<4){
            $("#avisoSuperficieHuertoNoValida").show();
            $("#avisoSuperficieHuertoNoValida").fadeOut(3000);
        }
        // si la superficie existe se le permite continuar con la creacion del huerto
        if ($(this).attr("data-porcentajes").split(",").length>=4){
            // le asignamos al formulario el valor oculto de las coordenadas en porcentaje
            $("#coordenadasFormularioEditandoHuertoFigura_" + $(this).attr("data-id")).val($(this).attr("data-porcentajes"));
            // hacemos que se envie el formulario
            $("#formEditandoHuerto_" + $(this).attr("data-id")).submit();
        } 
    });
}
// se cancela la edicion de la figura de un huerto y se vuelve a lo normal
function cancelarEditandoHuertoFigura(){
    //cambiamos la clase del huerto que se estaba editando por una clase y los escondemos.
    $(".huertoEnEdicion").attr("class","huertoDesechar");
    $(".circulitos").attr("class","huertoDesechar");
    $(".huertoDesechar").hide();
    //guardamos y modificamos el id 
    
    $("#huertoEnEdcion").attr("id","");
    //quitamos el permiso que esta en el grid
    $("#gridDerechaMapaHuertos").attr("data-permiso","normal");
    // volvemos a la vista normal del modal del huerto y el grid izquierdo 
    $(".vistaNormalIndexHuertos").show();
    $(".vistaEditandoHuertoFiguraIndexHuertos").hide(); 
    //mostramos el huerto principal que se habia escondido al hacer ue todos los huertos con clase "huertos" en el grid sean visibles

    $(".huertos").show();
}



//-------------------------funciones para modals de huertos ----------------------

//----------------------------------funciones para borrar un huerto---------------------------------

function mostrarVistaBorrarHuertoModal(imagenBasureroClickeada){
    $(imagenBasureroClickeada).click(function(){

        $(".opcionesEditarBorrarHuertoModal_"+ $(this).attr("data-idHuerto")).hide();
        $(".vistaNormalHuertoModal_"+ $(this).attr("data-idHuerto")).hide();
        $(".imagenRegresarANormalHuertoModal_"+ $(this).attr("data-idHuerto")).show();
        $(".vistaBorrarHuertoModal_"+ $(this).attr("data-idHuerto")).show();
    });
}













