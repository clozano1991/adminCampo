
// ------------------------------------ main -------------------------------
$(document).ready(function(){ 
  //verificamos si estamos en el domumento principal de contabilidad, 
  //para que de otra manera no se ejecuten los json y todo eso
  if ($("#contenedorCuerpoPlanillaContabilidad").attr("data-planillaContabilidad")=="planillaPrincipalNoLasEspecificas") {
    // mostramos la info que se tiene con el año selecionado
    recopilandoInformacionPlanillaContabilidadEERRDeAnoSeleccionado()
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
  }
  //verificamos si estamos en el domumento de cuentas especificas, 
  //para que de otra manera no se ejecuten los codigos de los modals y todo eso
  if ($("#contenedorListadoElementosContablesEspecificos").attr("data-contenedorListadoElementosContablesEspecificos")=="contenedorListadoElementosContablesEspecificos") {
    // Cuando se hace click en el basurero para borrar un elemento contable
    $(".imagenBorrarElementoContable").each(function(){ 
       mostrarModalBorrarElementoContable($(this));
    });
    // Cuando se hace click en la lupa para mostrar el detalle del elemento contable
    $(".imagenMostrarElementoContable").each(function(){ 
       mostrarModalMostrarElementoContable($(this));
    });
    // para editar un elemento contable en las cuentas especificas
    $(".imagenEditarElementoContable").each(function(){ 
       mostrarModalEditarElementoContable($(this));
    });
  }
  });


//----------------funciones index elemento_contables --------------------
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------

function mostrarModalBorrarElementoContable(imagenBorrarElementoContable){
  $(imagenBorrarElementoContable).click(function(){
       $("#modal_borrar_elemento_contable_"+imagenBorrarElementoContable.attr("data-idElementoContable")).modal("show");
  });
}

function mostrarModalMostrarElementoContable(imagenMostrarElementoContable){
  $(imagenMostrarElementoContable).click(function(){
       $("#modal_mostrar_elemento_contable_"+imagenMostrarElementoContable.attr("data-idElementoContable")).modal("show");
  });
}

function mostrarModalEditarElementoContable(imagenEditarElementoContable){
    $(imagenEditarElementoContable).click(function(){
       $("#modal_editar_elemento_contable_"+imagenEditarElementoContable.attr("data-idElementoContable")).modal("show");
    });
}





//----------------funciones index elemento_contables --------------------
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
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
       //modificamos los datos del modal segun los datos que nos entrega la imagen (los valores ocultos)
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
  //-------------------------------------------------------------------------------------------
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
  // en el arreglo anterior existiran datos repetidos de cuentas, ya que se pueden hacer varias ventas en un mismo año (ejemplo)
  // removemos los datos repetidos del arreglo arregloCuentaPrincipalSecundaria, asi nos quedams solo con las diferentes cuentas existentes, luego agregamos los montos
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
  // ahora llenamos el arregloDeLlenado con la info de los datos contables
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
    var cuentaPrimariaSecundariaAMostrar = arregloDeLlenadoCuentasSecundarias[i][0];
    var arregloDeHijos = [];
    var contadorHijos = "primero";
    $("."+String(cuentaPrimariaSecundariaAMostrar)).children().each(function(){
      if (contadorHijos == "primero") {
        contadorHijos = "paso";
        return;
      }
      arregloDeHijos.push($(this));
    });

    // notemos que el monto final no esta agregado, entonces
    //para el arreglo de la cuenta seleccionada agregamos el monto final usando el arreglo de hijos
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
  // lo anterior va a mostrar los valores en las cuentas secundarias


  //-------------------------------------------------------------------------------------------
  // 3)
  // ahora mostramos los valores en las cuentas principales, primero necesitamos juntar los datos en las partes donde estan las flechas que se expanden
  //luego nos preocupamos de las lineas de resultados

  // notemos el arreglo arregloDeLlenadoCuentasSecundarias que tiene los valores consolidados:
  // [arregloCuentaPrincipalSecundariaDatosUnicos[i],[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0],[10,0],[11,0],[12,0]]
  // es decir:
  // [cuenta-principal-cuenta-secundaria, [0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0],[10,0],[11,0],[12,0]]
  // tiene 14 elementos, el primero es un string con la cuenta principal y secundaria separadas por lineas
  // y los otros 13 las casillas de llenado [casilla(mes),valor], el ultimo es el del total.

  
  // ponemos directamente las cuentas principales que tienen cuentas secundarias asi ahorramos tiempo de busqueda 
  //aunque no va aquedar automatico en caso de agregar otra
  arregloNombresCuentasPrincipales=["Ingresos-de-operación","Costos-de-operación","Costos-de-administración","Otros-costos-e-ingresos","Impuestos"];
  arregloCuentasPrincipales=[]
  for(i = 0; i < arregloNombresCuentasPrincipales.length; i++){
    arregloCuentasPrincipales.push([arregloNombresCuentasPrincipales[i],[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0],[10,0],[11,0],[12,0]]);
  }
  //lo anterior nos da la estructura para meter los datos
  //usamos el arreglo arregloDeLlenadoCuentasSecundarias que tiene los valores consolidados


  for (i = 0; i < arregloCuentasPrincipales.length; i++){
    for(j = 0; j < arregloDeLlenadoCuentasSecundarias.length; j++){
      // verificamos si la cuenta secundaria pertenece a la principal y en caso de se ejecuta
      if (arregloDeLlenadoCuentasSecundarias[j][0].indexOf(arregloCuentasPrincipales[i][0]) != -1) {
        // nos enfocamos en el arreglo de la cuenta secundaria que pertenece a la principal
        // partimos en k=1 para tomar solo los valores
        for (k =1; k < arregloDeLlenadoCuentasSecundarias[j].length; k++) {
          arregloCuentasPrincipales[i][k][1]=arregloCuentasPrincipales[i][k][1]+arregloDeLlenadoCuentasSecundarias[j][k][1];
        }
      }
    }
  }
  //lo anterior nos deja el arreglo arregloCuentasPrincipales como queremos
  //ahora llenamos los datos en la planilla
  for (i = 0; i < arregloCuentasPrincipales.length; i++){
    var cuentaPrimariaAMostrar = arregloCuentasPrincipales[i][0];
    var arregloDeHijos = [];
    var contadorHijos = "primero";
    $("."+String(cuentaPrimariaAMostrar)).children().each(function(){
      if (contadorHijos == "primero") {
        contadorHijos = "paso";
        return;
      }
      arregloDeHijos.push($(this));
    });
    // ahora que ya identificamos las casillas donde van los datos continuamos
    // notemos que el monto final no esta agregado, entonces
    //para el arreglo de la cuenta seleccionada agregamos el monto final usando el arreglo de hijos
    var k = 0;
    // definimos e contador del total de la cuenta secundaria
    var contadorMontoTotal = 0;
    while(k < 13){
      if (arregloCuentasPrincipales[i][k+1][1] != 0) {
        // incorporamos el dato de cada mes
        arregloDeHijos[k].text(String(arregloCuentasPrincipales[i][k+1][1]));
        // vamos sumando para cada mes
        contadorMontoTotal = contadorMontoTotal + arregloCuentasPrincipales[i][k+1][1];
      }
      k = k+1;
    }
    arregloDeHijos[12].text(String(contadorMontoTotal));
  // lo anterior va a mostrar los valores en las cuentas secundarias
  }

  //-------------------------------------------------------------------------------------------
  // 4)
  // ahora mostramos resultado operacional, utilidad antes de impuestos y utilidad neta
  // notemos que el arreglo cuentas principales puede ser usado, este es una rreglo 
  //que tiene arreglos de la siguiente forma:
  // es decir:
  // [cuenta-principal, [0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0],[10,0],[11,0],[12,0]]
  // al ser 5 cuentas principales podemos hacer una suma y no dejarlo automatico

  // Resultado operacional = "Ingresos-de-operación"+"Costos-de-operación"+"Costos-de-administración"
  // lo hacemos a continuacion

  arregloCuentasResultadoOperacional=[arregloCuentasPrincipales[0],arregloCuentasPrincipales[1],arregloCuentasPrincipales[2]];
  arregloResultadoOperacional=["Resultado-operacional",[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0],[10,0],[11,0],[12,0]];
  
  for (i = 0; i < arregloCuentasResultadoOperacional.length; i++){
    for (j = 1; j < arregloResultadoOperacional.length; j++) {
      arregloResultadoOperacional[j][1] = arregloResultadoOperacional[j][1] + arregloCuentasResultadoOperacional[i][j][1];
    }
  }
  // lo anterior nos da el arreglo arregloResultadoOperacional con todo lo que necesitamos
  //console.log(arregloResultadoOperacional);
  //ahora llenamos los datos en la planilla
  for (i = 0; i < arregloResultadoOperacional.length; i++){
    var cuentaPrimariaAMostrar = arregloResultadoOperacional[0];
    var arregloDeHijos = [];
    var contadorHijos = "primero";
    $("."+String(cuentaPrimariaAMostrar)).children().each(function(){
      if (contadorHijos == "primero") {
        contadorHijos = "paso";
        return;
      }
  //console.log(cuentaPrimariaAMostrar);
      arregloDeHijos.push($(this));
    });
    // ahora que ya identificamos las casillas donde van los datos continuamos
    // notemos que el monto final no esta agregado, entonces
    //para el arreglo de la cuenta seleccionada agregamos el monto final usando el arreglo de hijos
    var k = 0;
    // definimos e contador del total de la cuenta secundaria
    var contadorMontoTotal = 0;
    while(k < 13){  
        // incorporamos el dato de cada mes
        arregloDeHijos[k].text(String(arregloResultadoOperacional[k+1][1]));
        // vamos sumando para cada mes
        contadorMontoTotal = contadorMontoTotal + arregloResultadoOperacional[k+1][1];     
      k = k+1;
    }
    arregloDeHijos[12].text(String(contadorMontoTotal));
  }
  




  // Utilidad antes de impuestos = "Ingresos-de-operación"+"Costos-de-operación"+"Costos-de-administración"+"Otros-costos-e-ingresos"
  // lo hacemos a continuacion

  arregloCuentasUtilidadAntesDeImpuestos=[arregloCuentasPrincipales[0],arregloCuentasPrincipales[1],arregloCuentasPrincipales[2],arregloCuentasPrincipales[3]];
  arregloUtilidadAntesDeImpuestos=["Utilidad-antes-de-impuestos",[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0],[10,0],[11,0],[12,0]];
  
  for (i = 0; i <  arregloCuentasUtilidadAntesDeImpuestos.length; i++){
    for (j = 1; j < arregloUtilidadAntesDeImpuestos.length; j++) {
      arregloUtilidadAntesDeImpuestos[j][1] = arregloUtilidadAntesDeImpuestos[j][1] +  arregloCuentasUtilidadAntesDeImpuestos[i][j][1];
    }
  }
  // lo anterior nos da el arreglo arregloUtilidadAntesDeImpuestos con todo lo que necesitamos
  //ahora llenamos los datos en la planilla
  for (i = 0; i < arregloUtilidadAntesDeImpuestos.length; i++){
    var cuentaPrimariaAMostrar = arregloUtilidadAntesDeImpuestos[0];
    var arregloDeHijos = [];
    var contadorHijos = "primero";
    $("."+String(cuentaPrimariaAMostrar)).children().each(function(){
      if (contadorHijos == "primero") {
        contadorHijos = "paso";
        return;
      }
  //console.log(cuentaPrimariaAMostrar);
      arregloDeHijos.push($(this));
    });
    // ahora que ya identificamos las casillas donde van los datos continuamos
    // notemos que el monto final no esta agregado, entonces
    //para el arreglo de la cuenta seleccionada agregamos el monto final usando el arreglo de hijos
    var k = 0;
    // definimos e contador del total de la cuenta secundaria
    var contadorMontoTotal = 0;
    while(k < 13){  
        // incorporamos el dato de cada mes
        arregloDeHijos[k].text(String(arregloUtilidadAntesDeImpuestos[k+1][1]));
        // vamos sumando para cada mes
        contadorMontoTotal = contadorMontoTotal + arregloUtilidadAntesDeImpuestos[k+1][1];     
      k = k+1;
    }
    arregloDeHijos[12].text(String(contadorMontoTotal));
  }
  


  // Utilidad bruta = "Ingresos-de-operación"+"Costos-de-operación"+"Costos-de-administración"+"Otros-costos-e-ingresos"+"Impuestos"
  // lo hacemos a continuacion

  arregloCuentasUtilidadNeta=[arregloCuentasPrincipales[0],arregloCuentasPrincipales[1],arregloCuentasPrincipales[2],arregloCuentasPrincipales[3],arregloCuentasPrincipales[4]];
  arregloUtilidadNeta=["Utilidad-neta",[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0],[10,0],[11,0],[12,0]];
  
  for (i = 0; i <  arregloCuentasUtilidadNeta.length; i++){
    for (j = 1; j < arregloUtilidadNeta.length; j++) {
      arregloUtilidadNeta[j][1] = arregloUtilidadNeta[j][1] +  arregloCuentasUtilidadNeta[i][j][1];
    }
  }
  // lo anterior nos da el arreglo arregloUtilidadNeta con todo lo que necesitamos
  //ahora llenamos los datos en la planilla
  for (i = 0; i < arregloUtilidadNeta.length; i++){
    var cuentaPrimariaAMostrar = arregloUtilidadNeta[0];
    var arregloDeHijos = [];
    var contadorHijos = "primero";
    $("."+String(cuentaPrimariaAMostrar)).children().each(function(){
      if (contadorHijos == "primero") {
        contadorHijos = "paso";
        return;
      }
  //console.log(cuentaPrimariaAMostrar);
      arregloDeHijos.push($(this));
    });
    // ahora que ya identificamos las casillas donde van los datos coarregloUtilidadNetantinuamos
    // notemos que el monto final no esta agregado, entonces
    //para el arreglo de la cuenta seleccionada agregamos el monto final usando el arreglo de hijos
    var k = 0;
    // definimos e contador del total de la cuenta secundaria
    var contadorMontoTotal = 0;
    while(k < 13){  
        // incorporamos el dato de cada mes
        arregloDeHijos[k].text(String(arregloUtilidadNeta[k+1][1]));
        // vamos sumando para cada mes
        contadorMontoTotal = contadorMontoTotal + arregloUtilidadNeta[k+1][1];     
      k = k+1;
    }
    arregloDeHijos[12].text(String(contadorMontoTotal));
  }
  
//fin de la funcion mostrar elementos contables
}