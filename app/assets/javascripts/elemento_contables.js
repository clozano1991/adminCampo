
// ------------------------------------ main -------------------------------
$(document).ready(function(){ 
    // funcionamiento de las flechas 
    $(".flechaAbajoMostrarMasInformacionCuentaSeleccionada").each(function(){
      mostrandoMasInformacionFlechaAbajo($(this));
    });
    $(".flechaArribaMostrarMenosInformacionCuentaSeleccionada").each(function(){
      mostrandoMenosInformacionFlechaArriba($(this));
    });
    // Cuando se hace click en la imagen para mostrar un modal que agrega datos contabes
    $(".imagenAgregarDatoContable").each(function(){ 
     mostrarModalAgregarDatoContableYActualizarDatosDeModal($(this));
   });
    // usando ajax para retirar informacion y mostrarla una vez que se cambia de año
    $("#selectAnoContabilidadEERR").change(function(){
      recopilandoInformacionPlanillaContabilidadEERRDeAnoSeleccionado();
    });
  });

//----------------funciones index elemento_contables -----------------
//------------------------------ flechas para mostrar mas o menos
function mostrandoMasInformacionFlechaAbajo(imagenFlechaAbajo){
	$(imagenFlechaAbajo).click(function(){
   $(".subInformacion"+imagenFlechaAbajo.attr("data-flechaCuentaEERR")).show();
   $(this).hide();
   $("#flechaArriba"+imagenFlechaAbajo.attr("data-flechaCuentaEERR")).show();
 });
}
function mostrandoMenosInformacionFlechaArriba(imagenFlechaArriba){
	$(imagenFlechaArriba).click(function(){
   $(".subInformacion"+imagenFlechaArriba.attr("data-flechaCuentaEERR")).hide();
   $(this).hide();
   $("#flechaAbajo"+imagenFlechaArriba.attr("data-flechaCuentaEERR")).show();
 });
}

//---------------------------- agregando datos con modals segun la imagen que se muestra----------------
function mostrarModalAgregarDatoContableYActualizarDatosDeModal(imagenAgregarDatoContable){
  $(imagenAgregarDatoContable).click(function(){
       //modificamos los datos del modal segun los datos ue nos entrega la imagen (los valores ocultos)
       var cuentaPrincipal = $(imagenAgregarDatoContable).attr("data-cuentaPrincipal");
       var cuentaSecundaria = $(imagenAgregarDatoContable).attr("data-cuentaSecundaria");
       var ingresoGastoProbable = $(imagenAgregarDatoContable).attr("data-ingresoGastoProbable");
       //cambiamos la info del modal que corresponde a la seccion donde esta la imagen clickeada
       
       $("#tituloModalAgregarElementoContable").text("Agregando dato: "+cuentaPrincipal.replace(/-/g," ")+" - "+cuentaSecundaria.replace(/-/g," "));
       $("#agregarCuentaPrincipalElementoContable").val(cuentaPrincipal);
       $("#agregarCuentaSecundariaElementoContable").val(cuentaSecundaria);
       $("#selectIngresoGastoElementoContableNew").val(ingresoGastoProbable);
       //se muestra el modal con la informacion pertinente
       $("#modalAgregandoDatoContable").modal("show");
     });
}

//------------usando ajax para retirar datos contables de un año
function recopilandoInformacionPlanillaContabilidadEERRDeAnoSeleccionado(){
  var ano = $("#selectAnoContabilidadEERR").val();
  var campoid = $("#selectAnoContabilidadEERR").attr("data-campoid");
  var userid = $("#selectAnoContabilidadEERR").attr("data-userid");
  //creamos el arreglo donde se guardara la info a usar de todos los elementos contables
  var arregloInfoElementosContablesRecopilados = [];
  $.getJSON("/users/"+userid+"/campos/"+campoid+"/cambiarInfoContableAno",{ano: ano}, function(result){
    $.each(result,function(i,field){
         // ojo que la fecha esta en ano-mes-dia  y que para js a diferencia de ruby el mes parte con enero en 0
         arregloInfoElementosContablesRecopilados.push(String(field.cuentaPrincipal)+"-"+String(field.cuentaSecundaria)+","+String((new Date(field.fecha)).getMonth())+","+String(field.tipoIngresoEgreso)+","+String(field.monto) );
       });
    mostrandoInformacionElementosContables(arregloInfoElementosContablesRecopilados);
  });
}

function mostrandoInformacionElementosContables(arreglo){
  // el arreglo viene con strings: cuentaPrincipal-cuentaSecundaria, mes,tipoIngresoGasto,monto
  // 1) limpiamos las casillas de la planilla contable
  $(".casillaDatos").each(function(){
      $(this).text(" ")
  });





  // 2)
  // separamos el arreglo por las comas y lo guardamos en otro arreglo de arreglos
  var arregloTodaLaInformacion = []; 
  for(i = 0; i < arreglo.length; i++){
    arregloTodaLaInformacion.push(arreglo[i].split(","));
  }
  //a continuacion se define el arreglo que contendra la acumulacion de todos los datos que vienen en el parametro arreglo
  // sera al estilo de [[cuentaPrincipal-cuentaSecundaria,mes,tipoIngresoGasto,monto],....,[],[]...]
  var arregloCuentaPrincipalSecundaria = [];
  // agregamos al arreglo todos los valores de cuenta principal-cuentasecundaria
  for(i = 0; i < arregloTodaLaInformacion.length; i++){
    arregloCuentaPrincipalSecundaria.push( arregloTodaLaInformacion[i][0]);
  }

  // removemos los datos repetidos del arreglo arregloCuentaPrincipalSecundaria
  var arregloCuentaPrincipalSecundariaDatosUnicos = []
  for(i = 0; i < arregloCuentaPrincipalSecundaria.length; i++){
    var valorRevisando = arregloCuentaPrincipalSecundaria[i];
    var contenido = 0; // es 0 si no esta contenido
    for (j = 0; j < arregloCuentaPrincipalSecundariaDatosUnicos.length; j++){
      if (valorRevisando == arregloCuentaPrincipalSecundariaDatosUnicos[j]) {
        contenido = 1;
      }
    }
    if (contenido == 0) {
      arregloCuentaPrincipalSecundariaDatosUnicos.push(arregloCuentaPrincipalSecundaria[i]);
    }
    // ahora tenemos el arreglo "arregloCuentaPrincipalSecundariaDatosUnicos" con los datos donde existe un elemento contable al menos
  }
  // creamos el arreglo donde se llenaran los datos y se le entregan los meses junto con el "total" que va al final
  arregloDeLlenadoCuentasSecundarias = [];
  for(i = 0; i < arregloCuentaPrincipalSecundariaDatosUnicos.length; i++ ){
    arregloDeLlenadoCuentasSecundarias.push([arregloCuentaPrincipalSecundariaDatosUnicos[i],[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0],[10,0],[11,0],[12,0]]); 
  }
  // ahora llenamos el arregloDeLennado con la info de los datos contables
  for(i = 0; i < arregloTodaLaInformacion.length; i++){
    // obtenemos las variables
    var cuenta = arregloTodaLaInformacion[i][0];
    var mes = parseInt(arregloTodaLaInformacion[i][1]);
    var ingresoGasto = arregloTodaLaInformacion[i][2];
    var monto = parseFloat(arregloTodaLaInformacion[i][3]);
    // verificamos si es ingreso o gasto, + o -
    if (ingresoGasto == "Gasto") {
      monto = monto*-1;
    }
    // ahora las metemos en su respectiva casilla
    for ( j = 0; j < arregloDeLlenadoCuentasSecundarias.length; j++){
      if (cuenta == arregloDeLlenadoCuentasSecundarias[j][0]){
        // notemos que es un arrego tridimencional a partir del segundo elemento una vez que se entra al primer arreglo de arreglos
        arregloDeLlenadoCuentasSecundarias[j][mes+1][1] = arregloDeLlenadoCuentasSecundarias[j][mes+1][1]+monto;
      } 
    } 
  }// fin del llenado de datos del aregloDeLLenado


  // agregamos los datos a la planilla contable
  // revisamos para cada arreglo en el arreglo que guarda todo lo que se agrega de las cuentas secundarias
  for(i = 0; i < arregloDeLlenadoCuentasSecundarias.length; i++){
    var cuentaSecundariaAMostrar = arregloDeLlenadoCuentasSecundarias[i][0];
    var arregloDeHijos = [];
    var contadorHijos = "primero";
    $("."+String(cuentaSecundariaAMostrar)).children().each(function(){
      if (contadorHijos == "primero") {
        contadorHijos = "paso";
        return;
      }
      arregloDeHijos.push($(this));
    });

    //para el arreglo de la cuenta seleccionada agregamos el monto usando el arreglo de hijos
    var k = 0;
    // definimos e contador del total de la cuenta secundaria
    var contadorMontoTotal = 0;
    while(k < 13){
      if (arregloDeLlenadoCuentasSecundarias[i][k+1][1] != 0) {
        // incorporamos el dato de cada mes
        arregloDeHijos[k].text(String(arregloDeLlenadoCuentasSecundarias[i][k+1][1]));
        // vamos sumando para cada mes
        contadorMontoTotal = contadorMontoTotal + arregloDeLlenadoCuentasSecundarias[i][k+1][1];
      }
      k = k+1;
    }
    arregloDeHijos[12].text(String(contadorMontoTotal));

  }

}