(()=> {

    const sumar = (numero1: number , numero2:number):number  =>  {
        const resultado = numero1 + numero2;
        return resultado; 
        
    }

    console.log( "EL RESULTADO ES: ",sumar(1,2));



    const golesDeJugador = (nombre:string, apellido:string, goles:number):string =>{
        
       
        const resultado = `${nombre} ${apellido} realizó ${goles} goles`;
        return resultado;
    }
    
    interface Jugador {
        nombre:string;
        apellido:string;
        goles: number;
    }

    const j1:Jugador = {
        nombre: "Leo",
        apellido: "Messi",
        goles: 5
    }

    console.log( "RESULTADO: ",golesDeJugador(j1.nombre, j1.apellido, j1.goles) )



})()
