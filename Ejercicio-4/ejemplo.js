(function () {
    var sumar = function (numero1, numero2) {
        var resultado = numero1 + numero2;
        return resultado;
    };
    console.log("EL RESULTADO ES: ", sumar(1, 2));
    var golesDeJugador = function (nombre, apellido, goles) {
        var resultado = "".concat(nombre, " ").concat(apellido, " realiz\u00F3 ").concat(goles, " goles");
        return resultado;
    };
    console.log("RESULTADO: ", golesDeJugador("Leo", "Messi", 5));
})();
