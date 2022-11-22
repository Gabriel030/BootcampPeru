
(()=>{
//EJERCICIO 1 -----------------------------------------------------------

    const nombreJugador = "Gabriel";
    let puntos = 0; 

    const calcularPuntos = (nombre: string, tiros: number):string => {

        for (let i = 0 ; i < tiros; i++){
            puntos+= Math.random()* (6 - 1) + 1;

            
        }

        return `${nombre} acumulo un total de ${puntos} puntos`; 
    }
    console.log("\n RESULTADO EJ 1\n"); 
    console.log(calcularPuntos(nombreJugador, 6));
    

    //EJERCICIO 2 ------------------------------------------------------

    interface casa {
        area: number,
        ambientes: number,
        colorParedes: string
      }

    const miCasa : casa = {
        area: 70,
        ambientes: 4, 
        colorParedes: "Blanco"
    }


    //Ejercicio 3  ----------------------------------------------------
   /*  Convertir esta funcion a una funcion de flecha
  function caluloSumaCuadadro(x, y) {
    const resultado = (x + y)^2;
    return 'El resultado es ' + resultado;
  } */

  const calculoSumaCuadrado = (x:number, y:number):string => {

    const resultado = (x+y)^2;
    return 'El resultado es ' + resultado;
  }

  //EJERCICIO 4 --------------------------------------------------------

  const miFunction = (nombre:string, edad:number, apellido?:string,  esPeruano?:boolean, hobby:string ="futbol" ) => {

    return `El nombre del usuario es ${nombre} ${apellido?apellido: "" }, de ${edad} años. ${esPeruano?"es Peruano":"No es Peruano"} ${hobby?`su hobby es${hobby}`:"" }`
  }

  //EJERCICIO 5 ----------------------------------------------------------------


  class Rectangulo {
    _base: number;
    _altura: number;

    constructor(base: number, altura: number) {
        this._base = base; 
        this._altura = altura;
    }

    get area() {
        return this._base * this._altura;

    }
  }

  const miRectangulo = new Rectangulo(100, 14)
  console.log(miRectangulo)



  //EJERCICIO 6 ----------------------------------------------------------------

  type vehiculo = {
    puertas: number;
    marca: string; 
    velMax: number;
    automatico: boolean; 
    cambios?: number; 
    saludo: () => string; 
  }

  const miVehiculo = (mine:vehiculo ): string => {
    const {puertas, marca, velMax, automatico} = mine
    const cambios = mine.cambios ? mine.cambios : undefined ; 

    return `mi auto, tiene ${puertas} puertas, de marca ${marca}, con max-vel de ${velMax}km/h ${automatico? "es automatico": `con caja de ${cambios} cambios`}`

  }


  



})()