(()=>{

let dineroDisponible = 1000; 

const retirarDinero = (monto:number) => {
    return new Promise( (resolve, rejected) => {
        if(monto> dineroDisponible){
            rejected(`No hay suficiente dinero. Disponible: ${dineroDisponible}`)
        }else{
            resolve(`monto disponible a retirar ${dineroDisponible - monto}`)
        }

    })
}
const montoARetirar = 500; 
retirarDinero(montoARetirar)
.then(resp => console.log( resp))
.catch(err => console.log( err)); 


})()