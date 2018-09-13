$(document).ready(function(){
    //----------------view index empleado_pago-----------------
    // Cuando se hace click en el basurero para borrar un pago
    $(".imagenBorrarEmpleado_pago").each(function(){ 
       mostrarModalBorrarEmpleado_pago($(this));
    });
    //--------------------------------view new empleado_pago----------------- 
    //para ajustar el monto una cuando se cambia la cantidad y valor de un item
    $(".inputCantidadItemPago").each(function(){ 
       actualizarMontoItemPagoDesdeCantidad($(this));
    });
    $(".inputValorItemPago").each(function(){ 
       actualizarMontoItemPagoDesdeValor($(this));
    });
    //para ajustar el monto una cuando se cambia la cantidad de un item que se inserto dinamicamente luego de cargar
    $("#contenedor_pago_items_haberes_imponibles").on("cocoon:after-insert", function(e,insertedItem){
       // para cuando se cambia la cantidad
       var filaDondeEstaElInput = insertedItem;
       var inputFormCantidad = $(filaDondeEstaElInput).find(".inputCantidadItemPago");
       actualizarMontoItemPagoDesdeCantidad(inputFormCantidad);
       // para cuando se cambia el valor
       var filaDondeEstaElInput = insertedItem;
       var inputFormValor = $(filaDondeEstaElInput).find(".inputValorItemPago");
       actualizarMontoItemPagoDesdeValor(inputFormValor);    
    });
    $("#contenedor_pago_items_haberes_no_imponibles").on("cocoon:after-insert", function(e,insertedItem){
       // para cuando se cambia la cantidad
       var filaDondeEstaElInput = insertedItem;
       var inputFormCantidad = $(filaDondeEstaElInput).find(".inputCantidadItemPago");
       actualizarMontoItemPagoDesdeCantidad(inputFormCantidad);
       // para cuando se cambia el valor
       var filaDondeEstaElInput = insertedItem;
       var inputFormValor = $(filaDondeEstaElInput).find(".inputValorItemPago");
       actualizarMontoItemPagoDesdeValor(inputFormValor);    
    });
    $("#contenedor_pago_items_descuentos").on("cocoon:after-insert", function(e,insertedItem){
       // para cuando se cambia la cantidad
       var filaDondeEstaElInput = insertedItem;
       var inputFormCantidad = $(filaDondeEstaElInput).find(".inputCantidadItemPago");
       actualizarMontoItemPagoDesdeCantidad(inputFormCantidad);
       // para cuando se cambia el valor
       var filaDondeEstaElInput = insertedItem;
       var inputFormValor = $(filaDondeEstaElInput).find(".inputValorItemPago");
       actualizarMontoItemPagoDesdeValor(inputFormValor);    
    });


});
//--------------------------funciones index empleado_pagos ------------------------------
function mostrarModalBorrarEmpleado_pago(imagenBorrarEmpleado_pago){
  $(imagenBorrarEmpleado_pago).click(function(){
    $("#modal_borrar_empleado_pago_"+imagenBorrarEmpleado_pago.attr("data-id")).modal("show"); 
  });
}
//-----------------------------funciones new empleado_pagos -----------------------------
// se llama al cambiar el input de cantidad en un item
function actualizarMontoItemPagoDesdeCantidad(inputFormCantidad){
  // se tiene que ejecutar tanto como para cuando se levanta una tecla como para cuando se hace un change 
  // para cuando se levanta una tecla en el input
  $(inputFormCantidad).keyup(function(){
  	// obtenemos el "valor" del form donde se pone la cantidad
  	var cantidad = $(inputFormCantidad).val();
  	//seleccionamos la fila "tr" del input de cantidad
  	var filaDondeEstaElInput = $(inputFormCantidad).closest("tr");
    // usando la fila tr localizamos el form donde sta el imput de valor para esa fila
  	var inputFormValor = $(filaDondeEstaElInput).find(".inputValorItemPago");
  	// obtenemos el "valor" del form donde se pone el valor
  	var valor = $(inputFormValor).val();
    // ponemos el monto asociado a la cantidad y valor de la fila correspondiente
  	filaDondeEstaElInput.find(".contenedorMonto").text(String(cantidad*valor));  

  	// actualizamos los valores dependientes como AFP
  	//----sfdfdsfsfd-dfsdfd---------------------------------------------sdfsdfdsfdf---------------------- 
  	// actualizamos los datos del final
    actualizarMontosDeParteFinal();  
  });
  // para cuando se produce un change en el input
  $(inputFormCantidad).change(function(){
    // obtenemos el "valor" del form donde se pone la cantidad
    var cantidad = $(inputFormCantidad).val();
    //seleccionamos la fila "tr" del input de cantidad
    var filaDondeEstaElInput = $(inputFormCantidad).closest("tr");
    // usando la fila tr localizamos el form donde sta el imput de valor para esa fila
    var inputFormValor = $(filaDondeEstaElInput).find(".inputValorItemPago");
    // obtenemos el "valor" del form donde se pone el valor
    var valor = $(inputFormValor).val();
    // ponemos el monto asociado a la cantidad y valor de la fila correspondiente
    filaDondeEstaElInput.find(".contenedorMonto").text(String(cantidad*valor));  

    // actualizamos los valores dependientes como AFP
    //----sfdfdsfsfd-dfsdfd---------------------------------------------sdfsdfdsfdf---------------------- 
    // actualizamos los datos del final
    actualizarMontosDeParteFinal();  
  });
}

//se llama al cambiar el input de valor en un item
function actualizarMontoItemPagoDesdeValor(inputFormValor){
  // se tiene que ejecutar tanto como para cuando se levanta una tecla como para cuando se hace un change 
  // para cuando se levanta una tecla en el input
  $(inputFormValor).keyup(function(){
  	// obtenemos el "valor" del form donde se pone el valor
  	var valor = $(inputFormValor).val();
  	//seleccionamos la fila "tr" del input de cantidad
  	var filaDondeEstaElInput = $(inputFormValor).closest("tr");
    // usando la fila tr localizamos el form donde sta el imput de valor para esa fila
  	var inputFormCantidad = $(filaDondeEstaElInput).find(".inputCantidadItemPago");
  	// obtenemos el "valor" del form donde se pone el valor
  	var cantidad = $(inputFormCantidad).val();
    // ponemos el monto asociado a la cantidad y valor de la fila correspondiente
  	filaDondeEstaElInput.find(".contenedorMonto").text(String(cantidad*valor)); 

  	// actualizamos los valores dependientes como AFP
  	//----sfdfdsfsfd-dfsdfd---------------------------------------------sdfsdfdsfdf----------------------
  	// actualizamos los datos del final
    actualizarMontosDeParteFinal();   
  });
  // para cuando se produce un change en el input 
    $(inputFormValor).change(function(){
    // obtenemos el "valor" del form donde se pone el valor
    var valor = $(inputFormValor).val();
    //seleccionamos la fila "tr" del input de cantidad
    var filaDondeEstaElInput = $(inputFormValor).closest("tr");
    // usando la fila tr localizamos el form donde sta el imput de valor para esa fila
    var inputFormCantidad = $(filaDondeEstaElInput).find(".inputCantidadItemPago");
    // obtenemos el "valor" del form donde se pone el valor
    var cantidad = $(inputFormCantidad).val();
    // ponemos el monto asociado a la cantidad y valor de la fila correspondiente
    filaDondeEstaElInput.find(".contenedorMonto").text(String(cantidad*valor)); 

    // actualizamos los valores dependientes como AFP
    //----sfdfdsfsfd-dfsdfd---------------------------------------------sdfsdfdsfdf----------------------
    // actualizamos los datos del final
    actualizarMontosDeParteFinal();   
  });
}

// Para actualizar el valor de las imposiciones calculadas con %
function actualizarImposicionesConPorcentaje(){

}
// Para actualizar el valor de los montos que aparecen abajo
function actualizarMontosDeParteFinal(){
	//---------------------------------calculo de haberes imponibles---------------
	var totalHaberesImponibles = 0;
	$(".filaPagoItemHaberImponible").each(function(){ 
		var inputFormCantidad = $(this).find(".inputCantidadItemPago");
		var cantidad = $(inputFormCantidad).val();
		var inputFormValor = $(this).find(".inputValorItemPago");
		var valor = $(inputFormValor).val();
		totalHaberesImponibles = totalHaberesImponibles + cantidad*valor;
    });
    $(".montoFinalHaberesImponibles").text("Haberes imponibles: "+String(totalHaberesImponibles));

    //---------------------------------calculo de haberes no imponibles-------------------
	// calculo de haberes no imponibles normales
	var totalHaberesNoImponibles = 0;
	$(".filaPagoItemHaberNoImponible").each(function(){ 
		var inputFormCantidad = $(this).find(".inputCantidadItemPago");
		var cantidad = $(inputFormCantidad).val();
		var inputFormValor = $(this).find(".inputValorItemPago");
		var valor = $(inputFormValor).val();
		totalHaberesNoImponibles = totalHaberesNoImponibles + cantidad*valor;
    });
    $(".montoFinalHaberesNoImponibles").text("Haberes no imponibles: "+String(totalHaberesNoImponibles));
}
