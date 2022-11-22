** Ejercicio 07

Solucionar el sgte problema, mediante promesas: Mi amiga Kayo promete hacer una torta para mi cumpleaños en dos semanas. Si todo va bien, y Kayo no se enferma, tendremos una cierta cantidad de tortas. (Las tortas son contables en este tutorial 😆). De lo contrario, si Kayo se enferma, no tendremos tortas. De cualquier manera, todavía vamos a tener una fiesta.

HU: Yo siendo usuario deseo realizar una aplicacion de adivinanzas. ESTIMACIÓN: 8 CA: * Se ingresa un numero. * Se genera aleatoriamente un numero del 1 al 5. * Si el número de ingresado es igual al numero aleratorio, se obtiene 5 puntos. * Si el numero de ingresado es mayor o menor por 1 al numero aleatorio, se obtiene 2 puntos. * Se puede repetir el juego las veces que se quiera.

TRABAJO EN CLASE

HU: Yo siendo usuario deseo buscar el pais segun lo que se ingrese
const searchByCodeCountry = async (alpha3Code) => { try { const res = await fetch( https://restcountries.com/v3.1/alpha/${alpha3Code} );

const data = await res.json();

return data;
} catch (error) { console.log(error); } };
CA: * Se debe usar la function searchByCodeCountry para realizar una busqueda de paises (codigo abreviado: col,pe,at)
    * Se debe mostrar en la consola el nombre del país, nombre y simbolo de moneda y el idioma del país.
    * Se debe mostrar el nombre de los pais vecinos (propiedad borders del response), usando la funcion searchByCodeCountry.
HU: Yo siendo usuario requiero hornear una pizza congelada. Cada actividad se debe realizar mediantes funciones flecha. CA: * Primero se debe precalentar el horno durante 5 segundos. Al terminar debe sonar la alerta del horno (ej. 'Bep Bep Beeep! Horno Calentado!') * Mientras se precalienta el horno, sacas la pizza y abres la caja y la pones en el sarten de pizzas (duración de actividad 3seg). * Como el horno aun sigue caliente, te tomas un refresco. * Con el Horno precalentado. Se procede a meter la pizza al horno y calentarla por 10 segundos. Al terminar debe sonar la alerta del horno (ej. 'Bep Bep Beeep! Pizza lista!') * Mientras la pizza se calienta, miras la TV.