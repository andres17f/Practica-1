"use strict";

/* Page functions */
 var NUMBERS_QUEUE = create(); function cleanData(){
 	document.getElementById ("num").value = "" ;  
 }

function addNumber(num){
	var error = document.getElementById ("error");
	var listOr = document.getElementById ("listOr");
	error.innerHTML = "";  
 	try {
	 	add(NUMBERS_QUEUE,num);
	 	listOr.innerHTML = toString(NUMBERS_QUEUE);
 	} catch (err) {
 		error.innerHTML = err;
	 }	
}

 function pollNumber (){
	var error = document.getElementById ("error");
	var listOr = document.getElementById ("listOr");
	error.innerHTML = "";  
 	try {
	 	poll(NUMBERS_QUEUE);
	 	listOr.innerHTML = toString(NUMBERS_QUEUE);
 	} catch (err) {
 		error.innerHTML = err;
 	}		
}

/* ordered list Functions */
 var MAX_ELEM_QUEUE = 5; 
 function create(){
 	var listOr = [];
 	for (var i=0; i<MAX_ELEM_QUEUE; i++){
 		listOr[i] = Number.NaN;
 	}
 	return listOr;
 } 

 function isEmpty(listOr){
 	var isEmpty = false;
 	if (isNaN(listOr[0])){
 		isEmpty = true;
 	}
 	return isEmpty;
 } 

 function isFull(listOr){
 	var isFull = false;
 	if (!isNaN(listOr[MAX_ELEM_QUEUE-1])){
 		isFull = true;
 	}
 	return isFull;
 } 

 function size(listOr){
 	var length = 0;
 	while (length<MAX_ELEM_QUEUE && !isNaN(listOr[length])){
 		length++;
 	}
 	return length;
 } 

 /*añadimos el valor al final de la lista si esta no esta completa
 y despues ordenamos sus valores recorriendo el array entero si el valor
 de lista[i] es mayor que lista[j] que va por encima es mayor se intercambian
 y asi nos ordenaria todo el array siempre */
 function add(listOr,elem){
	var cont=0;
	elem = parseInt(elem);
    var length = (size(listOr));
     if (isNaN(elem)) {
 		throw "The element is not a number";
 	}
 	if (!isFull(listOr)){
		var length2 = (size(listOr));
		listOr[length2] = elem;
		for(var i=0; i<=length2 ; i++){
            for(var  j=i+1; j<=length2 ;j++){
                if(listOr[i]>listOr[j]){
                    //Intercambiamos valores
                    var aux=listOr[j];
                    listOr[j]=listOr[i];
                    listOr[i]=aux;
                }
            }
        }
 	} else {
 		throw "The list is Full. You can't put the element in it";
 	}
 	return size(listOr);
 } 

 function get(listOr,index){
	var elem = listOr[index];
	return elem;
 }

 function toString(listOr){
	var str = "";
	if (!isEmpty(listOr)){
		var length = size(listOr);	
		for (var i=0; i<length-1;i++){
			str = str + listOr[i] + " - ";
		} 		 		
		str = str + listOr[i]; 		
	} 	
	return str;
 } 

 /*Hace las comprobaciones necesarias, obtiene el tamaño de la lista
 y la recorre empezando por el principio, cuando el valor de la lista
 es igual al que hemos pedido nos cambia el valor de position y nos
 lo devuelve.*/
 function indexOf(listOr,elem){
	var position = -1;
	elem = parseInt(elem);
	if (!isNaN(elem)) {
		if (!isEmpty(listOr)){
			var length = size(listOr);	
			var i=0;
			while (i<length && position === -1){
				if (listOr[i] === elem) {
					position = i;
				}
				i++;
			} 		 		
		} 	
	} else{
		throw "The element is not a number";
	}
	return position;
 }

/*Tiene un funcionamiento parecido a la funcion anterior solo que aqui
comienza a buscar por el final, lo hacemo asignando el valor final
que seria el length-1 y recorremos a la inversa hasta el 0.*/
 function lastindexOf(listOr,elem){
	var position = -1;
	elem = parseInt(elem);
	if (!isNaN(elem)) {
		if (!isEmpty(listOr)){
			var length = size(listOr);	
			var i = (length-1);
			while (i>=0 && position === -1){
				if (listOr[i] === elem) {
					position = i;
				}
				i--;
			} 		 		
		} 	
	} else{
		throw "The element is not a number";
	}
	return position;
 }

 function capacity(listOr){
	return MAX_ELEM_QUEUE;
 }  

 function clear(listOr){
	var elem = Number.NaN;
	if (!isEmpty(listOr)){
		var length = size(listOr);	
		for (var i=0; i<length;i++){
			listOr[i] = elem;
		} 		 		 		
	} 	
 } 

 function firstElement(listOr){
	var first;
	if (!isEmpty(listOr)){
		first = listOr[0]; 		
	} else {
		throw "The list is empty.";
	}
	return first;
 } 

 function lastElement(listOr){
	var last;
	if (!isEmpty(listOr)){
		last = listOr[size(listOr)-1]; 		
	} else {
		throw "The list is empty.";
	}
	return last;
 } 

 /*Controla que la posicion que desea borrar no este fuera de la lista
 y nos quedamos con el elemento que se quiere borrar para mostrarlo,
 y despues se recorre el array desde esa posicion hasta el final
 machando el valor de la pos 3 por el de la 4 y asi sucesivamente.*/
 function remove(listOr,index){
	var pos = index;
	var length = size(listOr);
	var elem = 0;
	if (pos<length) { 
		var length = size(listOr);	
		elem =listOr[pos];
		for (var i=pos; i<length ; i++) {
			listOr[i]= listOr[i+1];
		} 	 		
	} else {
		throw "The index is outside the limits of the list";
	} 	
	return elem;
 }

 /*Recorre el array, si encuentra el elemento que deseamos borrar,
 reescribe el array para machacarlo */
 function removeElement(listOr,elem) {
	var elemento = parseInt(elem); 
	var length = size(listOr);
	var enco = false;
	if (!isNaN(elemento)) { 
		for (var i=0; i<length ; i++) {
			if (listOr[i] === elemento) {
				enco = true;
				for (var j=i; j<length ; j++) {
					listOr[j]= listOr[j+1];
				} 
			}
		} 	 		
	} else {
		throw "The element is not a number";
	} 	
	return enco;
 }


/*function de testeo*/

 function testlistOr(){
 	//var listOr = create (); 	
 	var listOr=[]; 	
 	console.log ("Capacidad: " + capacity(listOr));
 	console.log("Es vacía: " + isEmpty(listOr));
 	console.log("Longitud: " + size(listOr));

 	try { //Creamos un array de numeros aleatorios y despues lo ordenamos.
	 	for (var i=0; i<MAX_ELEM_QUEUE; i++){
			listOr[i] = Math.floor(Math.random() * 100);
			console.log("Nº de elementos: " + i);	
		}
		for(var i=0; i<=MAX_ELEM_QUEUE ; i++){
            for(var  j=i+1; j<=MAX_ELEM_QUEUE ;j++){
                if(listOr[i]>listOr[j]){
                    //Intercambiamos valores
                    var aux=listOr[j];
                    listOr[j]=listOr[i];
                    listOr[i]=aux;
                }
            }
        }
		
 	} catch (err) {
 		console.log(err);
 	}

 	console.log ("The full listOr: " + toString(listOr));	 	
 	console.log ("The first element listOr: " + firstElement(listOr));
 	console.log ("The last element listOr: " + lastElement(listOr));
	 		 	
 	//clear(list);

	 console.log ("Prueba de remove1: " + remove(listOr,2));
	 console.log ("Prueba de remove2: " + remove(listOr,0));
	 console.log ("Despues de remove List: " + toString(listOr));	 
	 console.log ("Prueba de removeElement: " + removeElement(listOr,30));
	 console.log ("Lista despues: " + toString(listOr));
	 console.log ("Prueba de indexOf: " + indexOf(listOr,10));
	 console.log ("Prueba de lastindexoF: " + lastindexOf(listOr,30));
	 console.log ("Prueba de Add " + add(listOr,25));
	 console.log ("Prueba de Add " + add(listOr,65));
	 console.log ("Despues de Add: " + toString(listOr));
	 console.log ("Prueba de removeElement: " + removeElement(listOr,65));
	 console.log ("Despues de removeElement: " + toString(listOr));
 } 
window.onload = testlistOr;
