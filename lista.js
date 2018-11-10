"use strict";

/* Page functions */
 var NUMBERS_QUEUE = create(); function cleanData(){
 	document.getElementById ("num").value = "" ;  
 }

function addNumber(num){
	var error = document.getElementById ("error");
	var list = document.getElementById ("list");
	error.innerHTML = "";  
 	try {
	 	add(NUMBERS_QUEUE,num);
	 	list.innerHTML = toString(NUMBERS_QUEUE);
 	} catch (err) {
 		error.innerHTML = err;
	 }	
}

 function pollNumber (){
	var error = document.getElementById ("error");
	var list = document.getElementById ("list");
	error.innerHTML = "";  
 	try {
	 	poll(NUMBERS_QUEUE);
	 	list.innerHTML = toString(NUMBERS_QUEUE);
 	} catch (err) {
 		error.innerHTML = err;
 	}		
}

/* list Functions */
 var MAX_ELEM_QUEUE = 5; 
 function create(){
 	var list = [];
 	for (var i=0; i<MAX_ELEM_QUEUE; i++){
 		list[i] = Number.NaN;
 	}
 	return list;
 } 

 function isEmpty(list){
 	var isEmpty = false;
 	if (isNaN(list[0])){
 		isEmpty = true;
 	}
 	return isEmpty;
 } 

 function isFull(list){
 	var isFull = false;
 	if (!isNaN(list[MAX_ELEM_QUEUE-1])){
 		isFull = true;
 	}
 	return isFull;
 } 

 function size(list){
 	var length = 0;
 	while (length<MAX_ELEM_QUEUE && !isNaN(list[length])){
 		length++;
 	}
 	return length;
 } 

 function add(list,elem){
 	elem = parseInt(elem);
 	if (isNaN(elem)) {
 		throw "The element is not a number";
 	}
 	if (!isFull(list)){
 		list[size(list)] = elem;
 	} else {
 		throw "The list is Full. You can't put the element in it";
 	}
 	return size(list);
 } 

 /*Añade un elemento en la posicion de la lista que especifiquemos,
 hace los controles especificados, despues controla si la posicion
 es mayor que el tamaño de la lista y lo añade en el ultimo sitio.
 En cambio si la posicion esta en medio desplaza los valores de por
ejemplo la posicion 3 a la 4 y añadimos el elemento en la poscion 3.*/
 function addAt(list,elem,index){
	elem = parseInt(elem);
	var lengt = size(list);
	if (isNaN(elem)) {
		throw "The element is not a number";
	}
	if (index>(size(list))) {
		throw "The index is outside the limits of the list";
	}
	if (isFull(list)){
		throw "The list is Full. You can't put the element in it";
	} else {
		list[index]=elem;
		for (var i=index; i<length ; i++) {
			list[i]= list[i+1];
		} 
		
	}
	return size(list);
 } 

 function get(list,index){
	var elem = list[index];
	return elem;
 }

 function toString(list){
	var str = "";
	if (!isEmpty(list)){
		var length = size(list);	
		for (var i=0; i<length-1;i++){
			str = str + list[i] + " - ";
		} 		 		
		str = str + list[i]; 		
	} 	
	return str;
 } 

 /*Hace las comprobaciones necesarias, obtiene el tamaño de la lista
 y la recorre empezando por el principio, cuando el valor de la lista
 es igual al que hemos pedido nos cambia el valor de position y nos
 lo devuelve.*/
 function indexOf(list,elem){
	var position = -1;
	elem = parseInt(elem);
	if (!isNaN(elem)) {
		if (!isEmpty(list)){
			var length = size(list);	
			var i=0;
			while (i<length && position === -1){
				if (list[i] === elem) {
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
 function lastindexOf(list,elem){
	var position = -1;
	elem = parseInt(elem);
	if (!isNaN(elem)) {
		if (!isEmpty(list)){
			var length = size(list);	
			var i = (length-1);
			while (i>=0 && position === -1){
				if (list[i] === elem) {
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

 function capacity(list){
	return MAX_ELEM_QUEUE;
 }  

 function clear(list){
	var elem = Number.NaN;
	if (!isEmpty(list)){
		var length = size(list);	
		for (var i=0; i<length;i++){
			list[i] = elem;
		} 		 		 		
	} 	
 } 

 function firstElement(list){
	var first;
	if (!isEmpty(list)){
		first = list[0]; 		
	} else {
		throw "The list is empty.";
	}
	return first;
 } 

 function lastElement(list){
	var last;
	if (!isEmpty(list)){
		last = list[size(list)-1]; 		
	} else {
		throw "The list is empty.";
	}
	return last;
 } 

 /*Controla que la posicion que desea borrar no este fuera de la lista
 y nos quedamos con el elemento que se quiere borrar para mostrarlo,
 y despues se recorre el array desde esa posicion hasta el final
 machando el valor de la pos 3 por el de la 4 y asi sucesivamente.*/
 function remove(list,index){
	var pos = index;
	var length = size(list);
	var elem = 0;
	if (pos<length) { 
		var length = size(list);	
		elem =list[pos];
		for (var i=pos; i<length ; i++) {
			list[i]= list[i+1];
		} 	 		
	} else {
		throw "The index is outside the limits of the list";
	} 	
	return elem;
 }

 /*Recorre el array, si encuentra el elemento que deseamos borrar,
 reescribe el array para machacarlo */
 function removeElement(list,elem) {
	var elemento = parseInt(elem); 
	var length = size(list);
	var enco = false;
	if (!isNaN(elemento)) { 
		for (var i=0; i<length ; i++) {
			if (list[i] === elemento) {
				enco = true;
				for (var j=i; j<length ; j++) {
					list[j]= list[j+1];
				} 
			}
		} 	 		
	} else {
		throw "The element is not a number";
	} 	
	return enco;
 }

 function set(list,elem,index){
	elem = parseInt(elem);
	var susti = 0;
	if (isNaN(elem)) {
		throw "The element is not a number";
	}
	if (index>(size(list))) {
		throw "The index is outside the limits of the list";
	}
	susti = list[index];
	list[index] = elem;
	return susti;
 } 

/*function de testeo*/

 function testqueue(){
 	//var list = create (); 	
 	var list=[]; 	
 	console.log ("Capacidad: " + capacity(list));
 	console.log("Es vacía: " + isEmpty(list));
 	console.log("Longitud: " + size(list));

 	try {
	 	for (var i=0; i<MAX_ELEM_QUEUE; i++){
	 		console.log("Nº de elementos: " + add(list,i*10));
	 	}
	 	add(list,i); //It will generate an exception.
 	} catch (err) {
 		console.log(err);
 	}

 	console.log ("The full queue: " + toString(list));	 	
 	console.log ("The first element queue: " + firstElement(list));
 	console.log ("The last element queue: " + lastElement(list));
	 		 	
 	//clear(list);

	 console.log ("Prueba de remove: " + remove(list,2));
	 console.log ("Lista antes: " + toString(list));
	 console.log ("Prueba de removeElement: " + removeElement(list,30));
	 console.log ("Lista despues: " + toString(list));
	 console.log ("Prueba de set: " + set(list,100,3));
	 console.log ("Prueba de indexOf: " + indexOf(list,10));
	 console.log ("Prueba de lastindexoF: " + lastindexOf(list,30));
	 console.log ("Prueba de addAt: " + addAt(list,19,2));

 	 console.log ("The List: " + toString(list));	 	
 } 
window.onload = testqueue;
