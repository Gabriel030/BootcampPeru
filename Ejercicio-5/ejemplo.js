(function () {
    //EJERCICIO 1 -----------------------------------------------------------
    //1.- Ejemplo de uso de let y const
    var nombreJugador = "Gabriel";
    var puntos = 0;
    var calcularPuntos = function (nombre, tiros) {
        for (var i = 0; i < tiros; i++) {
            puntos += Math.random() * (6 - 1) + 1;
        }
        return "".concat(nombre, " acumulo un total de ").concat(puntos, " puntos");
    };
    console.log("\n RESULTADO EJ 1\n");
    console.log(calcularPuntos(nombreJugador, 6));
    var miCasa = {
        area: 70,
        ambientes: 4,
        colorParedes: "Blanco"
    };
    console.log("RESULTADO EJ 2: ", { miCasa: miCasa });
    //Ejercicio 3  ----------------------------------------------------
    /*  Convertir esta funcion a una funcion de flecha
   function caluloSumaCuadadro(x, y) {
     const resultado = (x + y)^2;
     return 'El resultado es ' + resultado;
   } */
    var calculoSumaCuadrado = function (x, y) {
        var resultado = (x + y) ^ 2;
        return 'El resultado es ' + resultado;
    };
    console.log("RESULTADO EJ 3: ", calculoSumaCuadrado(10, 5));
    //EJERCICIO 4 --------------------------------------------------------
    /*
    Crear una función con parametros obligatorios, opcionales y por defecto. Para ello usar estos parametros:
    - Nombre (obligatorio): string
    - Apellido (opcional): string
    - Edad (obligatorio): number
    - Es Peruano (opcional): boolean (default = true)
    Debe imprimir: El nombre del usuario es <nombre> <apellido> con edad de <edad> y con|sin nacionalidad peruana
    
    */
    var miFunction = function (nombre, edad, apellido, esPeruano, hobby) {
        if (hobby === void 0) { hobby = "futbol"; }
        return "El nombre del usuario es ".concat(nombre, " ").concat(apellido ? apellido : "", ", de ").concat(edad, " a\u00F1os. ").concat(esPeruano ? "es Peruano" : "No es Peruano", " ").concat(hobby ? "su hobby es".concat(hobby) : "");
    };
    console.log("RESULTADO EJ 4: ", miFunction("gabriel", 30, "antonietti", false, "leer"));
    //EJERCICIO 5 ----------------------------------------------------------------
    /*
    Crear una clase que permita la siguiente estructura
      - La clase se debe de llamar rectangulo, con las siguientes propiedades: (base y altura)
      - La clase rectangulo debe calular el area y devolver un número
    */
    var Rectangulo = /** @class */ (function () {
        function Rectangulo(base, altura) {
            this._base = base;
            this._altura = altura;
        }
        Rectangulo.prototype.getarea = function () {
            return this._base * this._altura;
        };
        return Rectangulo;
    }());
    var miRectangulo = new Rectangulo(100, 14);
    console.log("RESULTADO EJ 5: ", miRectangulo);
    var miVehiculo = function (mine) {
        var puertas = mine.puertas, marca = mine.marca, velMax = mine.velMax, automatico = mine.automatico;
        var cambios = mine.cambios ? mine.cambios : undefined;
        return "mi auto, tiene ".concat(puertas, " puertas, de marca ").concat(marca, ", con max-vel de ").concat(velMax, "km/h ").concat(automatico ? "es automatico" : "con caja de ".concat(cambios, " cambios"));
    };
    var tutu = {
        puertas: 100,
        marca: "gabriel",
        velMax: 100,
        automatico: true,
        cambios: 6
    };
    console.log("EJ 6-a)", miVehiculo(tutu));
    //b)
    var nombre = "gabriel";
    var ciudad = "Buenos Aires";
    console.log("Hola como estas ".concat(nombre, ". \u00BFComo esta el clima en ").concat(ciudad));
    var miJugador = {
        nombre: "gabriel",
        goleador: true,
        saludo: function (nombre, goleador) { return goleador ? "Felicidades ".concat(nombre) : "Sigue participando"; }
    };
    console.log(miJugador);
    var newUser = {
        usuario: "admin",
        clave: "admin",
        fecha: Date.now(),
        estado: true
    };
    var startLogin = function (user) {
        var usuario = user.usuario, clave = user.clave, fecha = user.fecha, estado = user.estado;
        return "".concat(usuario, ", ").concat(clave, ", ").concat(fecha, ", ").concat(estado);
    };
    console.log(startLogin(newUser));
    //?b)
    var datosMaestros = {
        empresa: "toyota",
        pais: "argentina",
        cantEmpleados: 2000,
        annualProfit: 45000000
    };
    var empresa = datosMaestros.empresa, pais = datosMaestros.pais, cantEmpleados = datosMaestros.cantEmpleados, annualProfit = datosMaestros.annualProfit;
    console.log(empresa, pais, cantEmpleados, annualProfit);
    var miAuto = {
        puertas: 100,
        marca: "marca"
    };
    var puertas = miAuto.puertas, marca = miAuto.marca;
    //?c ) 
    var miArray = ['Jhon', 'Luis', 'Mateo', 'Ana'];
    var arrayDestruct = function (unArray) {
        var j1 = unArray[2], j2 = unArray[3];
        return [j1, j2];
    };
    console.log(arrayDestruct(miArray));
})();
