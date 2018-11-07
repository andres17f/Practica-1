"use strict";

/* Page functions */
 var NUMBERS_QUEUE = create(); function cleanData(){
 	document.getElementById ("num").value = "" ;  
 }

function addNumber(num){
	var error = document.getElementById ("error");
	var queue = document.getElementById ("queue");
	error.innerHTML = "";  
 	try {
	 	add(NUMBERS_QUEUE,num);
	 	queue.innerHTML = toString(NUMBERS_QUEUE);
 	} catch (err) {
 		error.innerHTML = err;
	 }	
}

 function pollNumber (){
	var error = document.getElementById ("error");
	var queue = document.getElementById ("queue");
	error.innerHTML = "";  
 	try {
	 	poll(NUMBERS_QUEUE);
	 	queue.innerHTML = toString(NUMBERS_QUEUE);
 	} catch (err) {
 		error.innerHTML = err;
 	}		
}

/* queue Functions */
 var MAX_ELEM_QUEUE = 5; 
 function create(){
 	var queue = [];
 	for (var i=0; i<MAX_ELEM_QUEUE; i++){
 		queue[i] = Number.NaN;
 	}
 	return queue;
 } 

 function isEmpty(queue){
 	var isEmpty = false;
 	if (isNaN(queue[0])){
 		isEmpty = true;
 	}
 	return isEmpty;
 } 

 function isFull(queue){
 	var isFull = false;
 	if (!isNaN(queue[MAX_ELEM_QUEUE-1])){
 		isFull = true;
 	}
 	return isFull;
 } 

 function size(queue){
 	var length = 0;
 	while (length<MAX_ELEM_QUEUE && !isNaN(queue[length])){
 		length++;
 	}
 	return length;
 } 

 function add(queue,elem){
 	elem = parseInt(elem);
 	if (isNaN(elem)) {
 		throw "The element is not a number";
 	}
 	if (!isFull(queue)){
 		queue[size(queue)] = elem;
 	} else {
 		throw "The queue is Full. You can't put the element in it";
 	}
 	return size(queue);
 } 

 /*Añade un elemento en la posicion de la lista que especifiquemos,
 hace los controles especificados, despues controla si la posicion
 es mayor que el tamaño de la lista y lo añade en el ultimo sitio.
 En cambio si la posicion esta en medio desplaza los valores de por
ejemplo la posicion 3 a la 4 y añadimos el elemento en la poscion 3.*/
 function addAt(queue,elem,index){
	elem = parseInt(elem);
	var lengt = size(queue);
	if (isNaN(elem)) {
		throw "The element is not a number";
	}
	if (index>(size(queue))) {
		throw "The index is outside the limits of the list";
	}
	if (!isFull(queue)){
		queue[size(queue)] = elem;
	} else {
		throw "The queue is Full. You can't put the element in it";
	}
	if (index>length) {
		queue[size(queue)] = elem;
	} else { 	
		var length = size(queue);	
		for (var i=index; i<lengt ; i++) {
			queue[i+1]= queue[i];
		}
			queue[i] = elem;
	}
	return size(queue);
 } 

 function get(queue,index){
	var elem = queue[index];
	return elem;
 }

 function toString(queue){
	var str = "";
	if (!isEmpty(queue)){
		var length = size(queue);	
		for (var i=0; i<length-1;i++){
			str = str + queue[i] + " - ";
		} 		 		
		str = str + queue[i]; 		
	} 	
	return str;
 } 

 /*Hace las comprobaciones necesarias, obtiene el tamaño de la lista
 y la recorre empezando por el principio, cuando el valor de la lista
 es igual al que hemos pedido nos cambia el valor de position y nos
 lo devuelve.*/
 function indexOf(queue,elem){
	var position = -1;
	elem = parseInt(elem);
	if (!isNaN(elem)) {
		if (!isEmpty(queue)){
			var length = size(queue);	
			var i=0;
			while (i<length && position === -1){
				if (queue[i] === elem) {
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
 function lastindexOf(queue,elem){
	var position = -1;
	elem = parseInt(elem);
	if (!isNaN(elem)) {
		if (!isEmpty(queue)){
			var length = size(queue);	
			var i=(lentgh-1);
			while (i>=0 && position === -1){
				if (queue[i] === elem) {
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

 function capacity(queue){
	return MAX_ELEM_QUEUE;
 }  

 function clear(queue){
	var elem = Number.NaN;
	if (!isEmpty(queue)){
		var length = size(queue);	
		for (var i=0; i<length;i++){
			queue[i] = elem;
		} 		 		 		
	} 	
 } 

 function firstElement(queue){
	var first;
	if (!isEmpty(queue)){
		first = queue[0]; 		
	} else {
		throw "The queue is empty.";
	}
	return first;
 } 

 function lastElement(queue){
	var last;
	if (!isEmpty(queue)){
		last = queue[size(queue)-1]; 		
	} else {
		throw "The queue is empty.";
	}
	return last;
 } 

 /*Controla que la posicion que desea borrar no este fuera de la lista
 y nos quedamos con el elemento que se quiere borrar para mostrarlo,
 y despues se recorre el array desde esa posicion hasta el final
 machando el valor de la pos 3 por el de la 4 y asi sucesivamente.*/
 function remove(queue,index){
	var pos = index;
	var length = size(queue);
	var elem = 0;
	if (pos>length) { 
		var length = size(queue);	
		elem =queue[pos];
		for (var i=pos; i<lengt ; i++) {
			queue[pos]= queue[i+1];
		} 	 		
	} else {
		throw "The index is outside the limits of the list";
	} 	
	return elem;
 }

 /*Recorre el array, si encuentra el elemento que deseamos borrar,
 reescribe el array para machacarlo */
 function removeElement(queue,elem){
	elem = ParseInt(elem);
	var length = size(queue);
	var encontrado = FALSE;
	if (!isNaN(elem)) { 
		for (var i=0; i<length ; i++) {
			if (queue(i) === elem) {
				encontrado = TRUE;
				for (var j=i; j<length ; j++) {
					queue[j]= queue[j+1];
				} 
			}
		} 	 		
	} else {
		throw "The element is not a number";
	} 	
	return encontrado;
 }

/*VOY por esta linea el codigo de arriba pertenece al ejercicio
 lista lo de abajo esta por comprobar si es util aqui*/
 function poll(queue){
 	var elem = 0;
 	if (!isEmpty(queue)){ 			
 		var lastIndex = size(queue)-1;	
 		elem = queue[0]; 		 	 		
 		for (var i=0; i<lastIndex;i++){
 			queue[i] = queue[i+1];
 		} 		 		
 		queue[i] = Number.NaN;
 	} else {
 		throw "The queue is empty. You can't poll any element";
 	} 	
 	return elem;
 } 

function peek(queue){
 	var elem = 0;
 	if (!isEmpty(queue)){ 			
 		var lastIndex = size(queue)-1;	
 		elem = queue[0]; 		 	 		
 	} else {
 		throw "The queue is empty. You can't peek any element";
 	} 	
 	return elem;
 }

 function search(queue,elem){
 	var position = -1;
 	elem = parseInt(elem);
 	if (!isNaN(elem)) {
	 	if (!isEmpty(queue)){
	 		var length = size(queue);	
	 		var i=0;
	 		while (i<length && position === -1){
	 			if (queue[i] === elem) {
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

 function testqueue(){
 	//var queue = create (); 	
 	var queue=[]; 	
 	console.log ("Capacidad: " + capacity(queue));
 	console.log("Es vacía: " + isEmpty(queue));
 	console.log("Longitud: " + size(queue));

 	try {
	 	for (var i=0; i<MAX_ELEM_QUEUE; i++){
	 		console.log("Nº de elementos: " + add(queue,i*10));
	 	}
	 	add(queue,i); //It will generate an exception.
 	} catch (err) {
 		console.log(err);
 	}

 	console.log ("The full queue: " + toString(queue));	 	
 	console.log ("The first element queue: " + firstElement(queue));
 	console.log ("The last element queue: " + lastElement(queue));

 	console.log ("is 40 in queue: " + search(queue,40));	 	
 	console.log ("is -40 in queue: " + search(queue,-40));	 	
 	//clear(queue);

 	try {
	 	while (true){
	 		console.log ("Unnonsumed Element: " + peek(queue));
	 		console.log ("Consumed Element: " + poll(queue));
	 		console.log ("The queue: " + toString(queue));	 	 		 	
	 	}
 	} catch (err) {
 		console.log(err); //When the queue is empty, an exception will be catched.
 	}

 	console.log ("The queue: " + toString(queue));	 	
 } 
window.onload = testqueue;
