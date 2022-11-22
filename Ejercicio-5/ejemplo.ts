
(()=>{
//EJERCICIO 1 -----------------------------------------------------------
//1.- Ejemplo de uso de let y const

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
    /*
      2.- Crear una interfaz que sirva para validar el siguiente objeto
      interface casa {
      area: number,
      ambientes: number,
      colorParedes: string
    }
    */
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

    console.log("RESULTADO EJ 2: " , {miCasa})
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

  console.log("RESULTADO EJ 3: ", calculoSumaCuadrado(10, 5))
  //EJERCICIO 4 --------------------------------------------------------
  /* 
  Crear una función con parametros obligatorios, opcionales y por defecto. Para ello usar estos parametros:
  - Nombre (obligatorio): string
  - Apellido (opcional): string
  - Edad (obligatorio): number
  - Es Peruano (opcional): boolean (default = true)
  Debe imprimir: El nombre del usuario es <nombre> <apellido> con edad de <edad> y con|sin nacionalidad peruana 
  
  */
  const miFunction = (nombre:string, edad:number, apellido?:string,  esPeruano?:boolean, hobby:string ="futbol" ) => {

    return `El nombre del usuario es ${nombre} ${apellido?apellido: "" }, de ${edad} años. ${esPeruano?"es Peruano":"No es Peruano"} ${hobby?`su hobby es${hobby}`:"" }`
  }

  console.log("RESULTADO EJ 4: ", miFunction("gabriel", 30, "antonietti", false, "leer" ) )
  //EJERCICIO 5 ----------------------------------------------------------------
/* 
Crear una clase que permita la siguiente estructura
  - La clase se debe de llamar rectangulo, con las siguientes propiedades: (base y altura)
  - La clase rectangulo debe calular el area y devolver un número
*/

  class Rectangulo {
    _base: number;
    _altura: number;

    constructor(base: number, altura: number) {
        this._base = base; 
        this._altura = altura;
    }

    getarea() {
        return this._base * this._altura;

    }
  }

  const miRectangulo = new Rectangulo(100, 14)
  console.log("RESULTADO EJ 5: ", miRectangulo)
  



  //EJERCICIO 6 ----------------------------------------------------------------
 /* 
 3 ejemplos de uso de template literal
  - Debe contener string, number
  - Debe contener function flecha
  - Debe contener string y usar boolean para cambiar un texto 
 */
  //a) 
  type vehiculo = {
    puertas: number;
    marca: string; 
    velMax: number;
    automatico: boolean; 
    cambios?: number; 
    saludo?: () => string; 
  }

  const miVehiculo = (mine:vehiculo ): string => {
    const {puertas, marca, velMax, automatico} = mine
    const cambios = mine.cambios ? mine.cambios : undefined ; 

    return `mi auto, tiene ${puertas} puertas, de marca ${marca}, con max-vel de ${velMax}km/h ${automatico? "es automatico": `con caja de ${cambios} cambios`}`

  }

  const tutu : vehiculo = {
    puertas: 100,
    marca: "gabriel",
    velMax: 100,
    automatico: true,
    cambios: 6,

  }


  console.log("EJ 6-a)", miVehiculo(tutu))
  //b)
  const nombre = "gabriel";
  const ciudad = "Buenos Aires"
  console.log(`Hola como estas ${nombre}. ¿Como esta el clima en ${ciudad}`)

  //c) 

  interface Jugador {
    nombre: string;
    goleador: boolean;
    saludo: (nombre:string, goleador: boolean) => string

  }

  const miJugador: Jugador = {
    nombre: "gabriel",
    goleador: true,
    saludo: (nombre:string, goleador: boolean) => goleador? `Felicidades ${nombre}` : "Sigue participando"
  }

  console.log(miJugador)
  
  //EJERCICIO 7 ------------------------------------------------------


  /*
  - Desestructuración de todas las variables de un objeto (funsionando interfaces). Las propiedades serian: 
    - usuario: string
    - clave: string
    - fecha: fecha actual
    - estado: boleano
  - Desestructuración de objecto (usando type). La estructura seria: nombre: string, precio: number
  - En una funcion flecha, realizar la desestructuración solo de los 2 ultimos elementos del array. El contenido del array es el siguiente:
  */ 
  //?a)
  interface loginData {
    usuario: string,
    clave: string
  }

  interface dataUser extends loginData{
    fecha: number,
    estado: boolean
  }

  const newUser : dataUser = {
    usuario: "admin",
    clave: "admin",
    fecha: Date.now(),
    estado: true

  }

  const startLogin = (user: dataUser): string => {
    const {usuario, clave, fecha, estado} = user

    return `${usuario}, ${clave}, ${fecha}, ${estado}`

  }
    console.log(startLogin(newUser))

  //?b)

  const datosMaestros = {
    empresa: "toyota",
    pais: "argentina",
    cantEmpleados: 2000,
    annualProfit: 45000000,

  }

  const {empresa, pais, cantEmpleados, annualProfit} = datosMaestros
  console.log(empresa, pais, cantEmpleados, annualProfit)
  
  type auto = {
    puertas: number;
    marca: string;

  }

  const miAuto : auto = {
    puertas: 100,
    marca: "marca",

  }

  const {puertas, marca} = miAuto;


  //?c ) 

  const miArray = ['Jhon','Luis','Mateo','Ana'] 

  const arrayDestruct = (unArray: string[]): string[] => {
    const [,,j1, j2 ] = unArray
    return [j1, j2]

  }
  console.log(arrayDestruct(miArray))



  
  

})()