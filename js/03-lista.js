// let lista = [1,2,3,4,5];
// let lista2 = ["carro", true, 99, [1,2,3]];

// console.log(lista);
// console.log(lista2);
// console.log(lista[4]);
// console.log(lista2[3]);
// console.log(lista2[3][1]); //para imprimir el elemento en la posicion 1 de lista dentro de la lista, hence, el elemento en la posicion 3 de la lista general.


// let notasAlumno = [90,85,65];

let listaNombres = [];
console.log(listaNombres);
listaNombres.push("Pedro");
console.log(listaNombres);
listaNombres.push("Pablo");
console.log(listaNombres);
console.log(typeof(listaNombres));

let listaOtrosNombres = ['Luis', 'Ricardo', 'Diego'];

//listaNombres = listaNombres+listaOtrosNombres; //forma erronea
//Pregunta a las 6:50

listaNombres.push(...listaOtrosNombres); //los 3 puntos agregan al final de la lista 
console.log(listaNombres);
console.log(typeof(listaNombres));

let masNombres = ['Tiziana', 'Anyel', 'Jose Mario', 'Isabel'];

// listaNombres.push(masNombres[0]);
// listaNombres.push(masNombres[1]);
// listaNombres.push(masNombres[2]);
listaNombres.push(...masNombres); 

console.log(listaNombres);

//BORRAR DATOS DE UNA LISTA
//1. pop() elimina el ultimo elemento de una lista

listaNombres.pop();
console.log(listaNombres);

//2. shift() elimina el primer elemento de una lista

listaNombres.shift();
console.log(listaNombres);

//3. delete este operador elimina un elemento de la lista, pero deja ese espacio vaxio. Se le puede indicar la posicion del arreglo que se desea eliminar

delete listaNombres[3];
console.log(listaNombres);
console.log(listaNombres)[3];
console.log(typeof(listaNombres[3]));

//4. splice() Este metodo permite eliminar elementos en cualquier posicion de la lista, indicando el indice de inicio y la cant de elementos a eliminar

listaNombres.splice(0,2);
console.log(listaNombres);
