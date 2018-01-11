$(document).ready(function(){       
//main
    //mostramos los huertos existentes al cargar el doc
    $(".huertos").each(function(){
        mostrarHuerto($(this));
    });

    // definimos que pasa al apretar un huerto ya existente
    $(".huertos").each(function(){
        apretarHuerto($(this));
    });

    // agregando un huerto
    $('#botonAgregarHuerto').click(function(){
        agregarHuerto();
    });

    // lo que pasa al hacer click en el svg
    $('svg').click(function(e){ 
        haciendoClickEnSVG(e);
    });

    // si queremos cancelar la creacion del huerto
    $("#cancelarAgregarHuerto").click(function(){
        cancelarAgregarHuerto();
    });

    // confirmar la creacion de la figura del huerto
    $("#botonConfirmarAgregarHuerto").click(function(){
        creacionHuerto();
    });
});

//---------------------------------funciones-------------------------------------------------

function mostrarHuerto(figura){
        porcentajes=figura.attr("data-porcentajes");
        var coordenadasPosicion = transformarPorcentajesACoordenadasPosicionEnSVG(porcentajes);
        //asignamos a los points del polyline las coordenadas posicion
        figura.attr("points",coordenadasPosicion);
        //vemos los colores dependiendo de la clase
        if(String(figura.data("clase"))=="green"){
            figura.attr("fill","lightGreen");
            figura.attr("stroke","black");
        }
        if(String(figura.data("clase"))=="red"){
            figura.attr("fill","#FF221E");
            figura.attr("stroke","black");
        }
        if(String(figura.data("clase"))=="orange"){
            figura.attr("fill","#FFBB1E");
            figura.attr("stroke","black");
        }
        if(String(figura.data("clase"))=="yellow"){
            figura.attr("fill","#FFFC4F");
            figura.attr("stroke","black");
        }
        if(String(figura.data("clase"))=="blue"){
            figura.attr("fill","#6691FF");
            figura.attr("stroke","black");
        }
}
    
function apretarHuerto(figura){
    $("#huerto_"+figura.attr("data-id")).click(function(){
        if ($("#gridDerechaMapaHuertos").attr("data-permiso")=="normal"){
            $("#modal_huerto_"+figura.attr("data-id")).modal("show");    
        }         
        if ($("#gridDerechaMapaHuertos").attr("data-permiso")=="eliminando"){
            alert("#huerto_"+String(figura.data("id"))); 
        }
        if ($("#gridDerechaMapaHuertos").attr("data-permiso")=="editandoFiguraHuerto"){
            alert("#huerto_"+String(figura.data("id")));  
        }
        if ($("#gridDerechaMapaHuertos").attr("data-permiso")=="editandoInformacionHuerto"){
            alert("#huerto_"+String(figura.data("id")));  
        }
    }); 
}

function agregarHuerto(){ 
        $('.normal').hide();
        $('.agregandoHuerto').show();
        $(".textoAgregandoHuerto").show();
        $("#gridDerechaMapaHuertos").attr("data-permiso","creandoNuevoHuerto");
        // se crea una figura polyline y se agrega al html, con sus atriutos basicos.
        var figura= document.createElementNS("http://www.w3.org/2000/svg", "polyline");
        figura.setAttribute("class","huertoEnCreacion");
        figura.setAttribute("id","huertoNuevo");
        figura.setAttribute("points"," ");
        figura.setAttribute("data-porcentajes","");
        figura.setAttribute("stroke","red");
        figura.setAttribute("fill","lightGreen");
        $("#svgMapaCampo").append(figura);
}

// cuando se hace click en el svg, agregamos las coordenadas en porcentaje a el data de la figura
function haciendoClickEnSVG(e){       
    //solo se ejecuta si tiene el permiso que esta en el cardBody
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
        $("#svgMapaCampo").append(circulo);
    }
}

//Lo que pasa cuando apretamos el boton cancelar de la izquierda al estar aregando un huerto
function cancelarAgregarHuerto(){
    // se muestran los botones normales y se esconden los de agregar huerto
    $('.normal').show();
    $('.agregandoHuerto').hide();
    $(".textoAgregandoHuerto").hide();
    //cambiamos la clase del huerto que se estaba creando por una clase y los escondemos.
    $(".huertoEnCreacion").attr("class","huertoDesechar");
    $(".circulitos").attr("class","huertoDesechar");
    $(".huertoDesechar").hide();
    //cambiamos el id 
    $("#huertoNuevo").attr("id","");
    //quitamos el permiso que esta en el cardBody
    $("#gridDerechaMapaHuertos").attr("data-permiso","normal");
}

function creacionHuerto(){
    // verificamos que la superficie del huerto exista
    if ($("#huertoNuevo").attr("data-porcentajes").split(",").length<4){
        alert("para agregar un huerto primero se tiene que asignar una superficie valida en el mapa")
    }
    // si la superficie existe se le permite continuar con la creacion del huerto
    if ($("#huertoNuevo").attr("data-porcentajes").split(",").length>=4){
        //mostramos formulario para continuar creacion
        $("#agregarHuertoModal").modal("show");
        // le asignamos al formulario el valor oculto de las coordenadas en porcentaje
        $("#coordenadasFormularioCreacionHuerto").val($("#huertoNuevo").attr("data-porcentajes"));
        // -----------------Creacion del huerto--------------------------
        $("#botonConfirmarCrearHuertoFinalFormulario").click(function(){
            $("#formAgregarHuerto").submit();
        });
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













