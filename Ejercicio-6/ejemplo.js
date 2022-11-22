(function () {
    var dineroDisponible = 1000;
    var retirarDinero = function (monto) {
        return new Promise(function (resolve, rejected) {
            if (monto > dineroDisponible) {
                rejected("No hay suficiente dinero. Disponible: ".concat(dineroDisponible));
            }
            else {
                resolve("monto disponible a retirar ".concat(dineroDisponible - monto));
            }
        });
    };
    var montoARetirar = 500;
    retirarDinero(montoARetirar)
        .then(function (resp) { return console.log(resp); })["catch"](function (err) { return console.log(err); });
})();
