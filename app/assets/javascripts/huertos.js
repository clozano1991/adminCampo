$(document).ready(function(){
//para cada huerto hacemos que se muestren las coordenadas 
     for (i in gon.huertos){
        var idHuerto=gon.huertos[i].id;

        var polyline = $("#huerto_"+String(idHuerto));
        var espacioSVG = $(".gridDerechaMapaHuertos");

        var coordenadasPosicion = transformarPorcentajesACoordenadasPosicionEnSVG(polyline,espacioSVG);
        //asignamos a los points del polyline las coordenadas posicion
        $("#huerto_"+ String(idHuerto)).attr("points",coordenadasPosicion);
     };
	 
//esto es lo que pasa al apretar agregar un huerto, se activan las opciones
     $('#botonAgregarHuerto').click(function () { 
        $('.normal').hide();
        $('.agregandoHuerto').show();
        $(".gridDerechaMapaHuertos").attr("data-permiso","creandoNuevoHuerto");
        // se crea una figura polyline y se agrega al html, con sus atriutos basicos.
        var figura= document.createElementNS("http://www.w3.org/2000/svg", "polyline");
        figura.setAttribute("class","huertoEnCreacion");
        figura.setAttribute("id","HuertoNuevo");
        figura.setAttribute("points","");
        figura.setAttribute("data-porcentajes","");
        figura.setAttribute("stroke","red");
        figura.setAttribute("fill","lightGreen");
        $("#svgMapaCampo").append(figura);

// cuando se hace click en el svg, agregamos las coordenadas en porcentaje a el data de la figura
        $('svg').click(function (e){ 
            //solo se ejecuta si tiene el permiso que esta en el cardBody
            if ($(".gridDerechaMapaHuertos").attr("data-permiso")=="creandoNuevoHuerto"){
               var elemento=$(this);
               var figuraHuerto=$(".huertoEnCreacion");
               var PosicionPorcentaje=obtenerPosicionClickPorcentajes(e,elemento);
               var acumulacionPosicionPorcentajes= figuraHuerto.attr("data-porcentajes");
               figuraHuerto.attr("data-porcentajes",acumulacionPosicionPorcentajes+PosicionPorcentaje);
               var coordenadasPosicion=transformarPorcentajesACoordenadasPosicionEnSVG(figuraHuerto,elemento);
               figuraHuerto.attr("points",coordenadasPosicion);
               //agregmos unos circulos para marcar la posicion donde se hace click, estos no se guardaran
               agregarCirculoEnClick(e,elemento);
            }
        });

//Lo que pasa cuando apretamos el boton cancelar de la izquierda al estar aregando un huerto
        $("#cancelarAgregarHuerto").click(function(){
        // se muestran los botones normales y se esconden los de agregar huerto
        $('.normal').show();
        $('.agregandoHuerto').hide();
        //cambiamos la clase del huerto que se estaba creando por una clase y los escondemos.
        $(".huertoEnCreacion").attr("class","huertoDesechar");
        $(".circulitos").attr("class","huertoDesechar");
        $(".huertoDesechar").hide();
        //cambiamos el id 
        $("#HuertoNuevo").attr("id","");
        //quitamos el permiso que esta en el cardBody
        $(".card-body.cardBody.huertos").attr("data-permiso","noPermitido");
        });

//Lo que pasa cuando apretamos el boton confirmar para proseguir con la creacion del huerto
        $("#botonConfirmarAgregarHuerto").click(function(){
            // verificamos que la superficie del huerto exista
            if ($("#HuertoNuevo").attr("data-porcentajes").split(",").length<3){
                alert("para agregar un huerto primero se tiene que asignar una superficie valida en el mapa")
            }
            // si la superficie existe se le permite continuar
            if ($("#HuertoNuevo").attr("data-porcentajes").split(",").length>=3){
                $("#agregarHuertoModal").modal("show");
                // le asignamos al formulario el valor de las coordenadas en porcentaje
                $("#coordenadasFormularioCreacionHuerto").val($("#HuertoNuevo").attr("data-porcentajes"));
                $("#botonConfirmarCrearHuertoFinalFormulario").click(function(){
                    $("#formAgregarHuerto").submit();

                });
            } 
        });




});


// aca estan las funciones que usamos en el main del doc------------------------------------------     

function obtenerPosicionClickPorcentajes(e,contenedorSVG){
    var anchoSvg = contenedorSVG.width();
    var altoSvg = contenedorSVG.height();
    var posX = contenedorSVG.position().left;
    var posY = contenedorSVG.position().top;
    var posXenSvg = e.pageX - posX;
    var posYenSvg = e.pageY - posY;
    var porcentageX = posXenSvg/anchoSvg;
    var porcentageY = posYenSvg/altoSvg;
    return (String(porcentageX)+ ',' +String(porcentageY)+"-");    
}

function transformarPorcentajesACoordenadasPosicionEnSVG(figura,contenedorSVG){
    var coordenadasPorcentaje= figura.attr("data-porcentajes");
    //notemos que al hacer split el utimo elemento del arreglo sera " "
    var arregloCoordenadasEnPorcentaje= coordenadasPorcentaje.split("-");
    // quitamos el ultimo elemento que es " "
    arregloCoordenadasEnPorcentaje.pop();
    //ahora transformamos cada parte del array a coordenadas de posicion en el svg
    var anchoSvg = contenedorSVG.width();
    var altoSvg = contenedorSVG.height();
    var arregloCoordenadasPosicion = [];
    for (i in arregloCoordenadasEnPorcentaje){
        var duplaCoordenadasPorcentage= arregloCoordenadasEnPorcentaje[i].split(",");
        var x=parseFloat(duplaCoordenadasPorcentage[0])*anchoSvg;
        var y=parseFloat(duplaCoordenadasPorcentage[1])*altoSvg;
        var duplaCoordenadasPosicion = [];
        duplaCoordenadasPosicion.push(String(x)+","+String(y));
        arregloCoordenadasPosicion.push(duplaCoordenadasPosicion[0]);
    }
    // ahora que tenemos un arreglo de coordenadas en posicion, las metemos todas en un string
    var stringCoordenadas="";
    for (i in arregloCoordenadasPosicion){
        var stringCoordenadas=stringCoordenadas+String(arregloCoordenadasPosicion[i])+" ";
    }
    // retornamos las coordenadas que tienen que aplicarse al elemento polyline
    return stringCoordenadas
}


function agregarCirculoEnClick(e,contenedorSVG){
    var posX = contenedorSVG.position().left;
    var posY = contenedorSVG.position().top;
    var posXenSvg = e.pageX - posX;
    var posYenSvg = e.pageY - posY;
    var circulo=document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circulo.setAttribute("cx",String(posXenSvg));
    circulo.setAttribute("cy",String(posYenSvg));
    circulo.setAttribute("r","3");
    circulo.setAttribute("fill","red");
    circulo.setAttribute("class","circulitos");
    $("#svgMapaCampo").append(circulo);
}



});// este es el final del doc





