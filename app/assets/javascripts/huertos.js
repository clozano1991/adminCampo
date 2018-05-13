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
    // boton editar huerto
    $("#botonEditarHuerto").click(function(){
        botonEditarHuerto();
    });
    //cancelarEditarHuerto general
    $("#cancelarEditarHuertoGeneral").click(function(){
        cancelarEditarHuertoGeneral();
    });
    //boton editar huerto figura
    $("#editarHuertoFigura").click(function(){
        botonEditarHuertoFigura();
    });
    // cancelar editar huerto figura elegida
    $("#cancelarEligiendoHuertoFiguraParaEditar").click(function(){
        cancelarEligiendoHuertoFiguraParaEditar();
    });
    //confirmar edicion figura huerto una vez que se hizo la figura
    $("#confirmarEditandoHuertoFiguraElegida").click(function(){
        confirmarEditandoHuertoFiguraElegida();

    });
    //cancelar editando huerto figura elegida
    $("#cancelarEditandoHuertoFiguraElegida").click(function(){
        cancelarEditandoHuertoFiguraElegida();
    });

    // eliminando un huerto
    $('#botonEliminarHuerto').click(function(){
        eliminarHuerto();
    });
    // cancelando la eliminacion de un huerto
    $('#cancelarEliminarHuerto').click(function(){
        cancelarEliminar();
    });



    //mostramos la imagen de fondo del huerto 
    //mostrarMapaFondoBloques();


    
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
        if($("#gridDerechaMapaHuertos").attr("data-primerClick")=="realizado"){
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
                $("#svgMapaCampo").append(circulo);
            });
        }
        // cambiamos data-primerClick para que pueda entrar al if anterior desde el segundo
        $("#gridDerechaMapaHuertos").attr("data-primerClick","realizado");
    }
}
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
}
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
function eliminarHuerto(){
    $(".normal").hide();
    $('.textoNormal').hide();
    $(".eliminandoHuerto").show();
    $(".textoEliminandoHuerto").show();
    $("#gridDerechaMapaHuertos").attr("data-permiso","eliminandoHuerto");
}
function cancelarEliminar(){
    $(".normal").show();
    $('.textoNormal').show();
    $(".eliminandoHuerto").hide();
    $(".textoEliminandoHuerto").hide();
    $("#gridDerechaMapaHuertos").attr("data-permiso","normal");
}
function botonEditarHuerto(){
    $(".normal").hide();
    $('.textoNormal').hide();
    $(".editandoHuertoGeneral").show();
    $('.textoEditandoHuertoGeneral').show();
    $("#gridDerechaMapaHuertos").attr("data-permiso","editarHuertoGeneral");
}
function cancelarEditarHuertoGeneral(){
    $(".normal").show();
    $('.textoNormal').show();
    $(".editandoHuertoGeneral").hide();
    $(".textoEditandoHuertoGeneral").hide();
    $("#gridDerechaMapaHuertos").attr("data-permiso","normal");
}
function botonEditarHuertoFigura(){
    $(".editandoHuertoGeneral").hide();
    $('.textoEditandoHuertoGeneral').hide();
    $(".eligiendoHuertoFiguraParaEditar").show();
    $('.textoEligiendoHuertoFiguraParaEditar').show();
    $("#gridDerechaMapaHuertos").attr("data-permiso","eligiendoHuertoFiguraParaEditar");      
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
        $("#svgMapaCampo").append(figura);

        // modificamos el permiso del grid derecha (svg)
        $("#gridDerechaMapaHuertos").attr("data-permiso","editandoHuertoFiguraElegido");
        // agregamos el data-primerClick para que hacer que el primero no se tome en cuenta
        $("#gridDerechaMapaHuertos").attr("data-primerClick","pendiente");
        

        $(".editandoHuertoFiguraElegida").show();
        $(".textoEditandoHuertoFiguraElegida").show();
        $(".eligiendoHuertoFiguraParaEditar").hide();
        $('.textoEligiendoHuertoFiguraParaEditar').hide();
}
function cancelarEligiendoHuertoFiguraParaEditar(){
    // se vuelve a la vista anterior
    $('.editandoHuertoGeneral').show();
    $('.textoEditandoHuertoGeneral').show();
    $('.eligiendoHuertoFiguraParaEditar').hide();
    $(".textoEligiendoHuertoFiguraParaEditar").hide();
    $("#gridDerechaMapaHuertos").attr("data-permiso","editarHuertoGeneral");
}
function confirmarEditandoHuertoFiguraElegida(){
    $(".huertoEnEdicion").each(function(){
        if ($(this).attr("data-porcentajes").split(",").length<4){
            alert("para continuar primero se tiene que asignar una superficie valida en el mapa")
        }
        // si la superficie existe se le permite continuar con la creacion del huerto
        if ($(this).attr("data-porcentajes").split(",").length>=4){

            // le asignamos al formulario el valor oculto de las coordenadas en porcentaje
            $("#coordenadasFormularioEditandoHuertoFigura_" + $(this).attr("data-id")).val($(this).attr("data-porcentajes"));
            // hacemos que se envie el formulario
            $("#formEditandoHuertoFigura_" + $(this).attr("data-id")).submit();
        } 
    });
}
function cancelarEditandoHuertoFiguraElegida(){
    //cambiamos la clase del huerto que se estaba creando por una clase y los escondemos.
    $(".huertoEnEdicion").attr("class","huertoDesechar");
    $(".circulitos").attr("class","huertoDesechar");
    $(".huertoDesechar").hide();
    //cambiamos el id 
    $("#huertoEnEdcion").attr("id","");
    //quitamos el permiso que esta en el cardBody
    $("#gridDerechaMapaHuertos").attr("data-permiso","eligiendoHuertoFiguraParaEditar");
    //regresamos al estado pendiente para que el primer click no se tome en cuenta al editar
    $("#gridDerechaMapaHuertos").attr("data-primerClick","pendienteFigura");

    $(".eligiendoHuertoFiguraParaEditar").show();
    $('.textoEligiendoHuertoFiguraParaEditar').show();
    $(".editandoHuertoFiguraElegida").hide();
    $(".textoEditandoHuertoFiguraElegida").hide();
}
function botonEditarHuertoInformacion(){
}
function mostrarMapaFondoBloques(){
    var imagenEnTextoBloqueUno = $("#bloqueHuertosUno").attr("data-urlImagen");    
    $("#svgMapaBloqueUno").css("background-image","url("+imagenEnTextoBloqueUno+")");
    var imagenEnTextoBloqueDos = $("#bloqueHuertosDos").attr("data-urlImagen");    
    $("#svgMapaBloqueDos").css("background-image","url("+imagenEnTextoBloqueDos+")");
    var imagenEnTextoBloqueTres = $("#bloqueHuertosTres").attr("data-urlImagen");    
    $("#svgMapaBloqueTres").css("background-image","url("+imagenEnTextoBloqueTres+")");
}















