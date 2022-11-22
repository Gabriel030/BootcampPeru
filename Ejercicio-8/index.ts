(async ()=>{

    const precalentarHorno = async () => {

        console.log("Inicio Precalentado")
         setTimeout(()=>{
            console.log("Bep Bep Beeep! Horno Calentado!!!")
        }, 5000)
        await prepararPizza()
        await calentarPizza()
                
    }

    const prepararPizza = async () => {

        console.log("preparo pizza")

        setTimeout(()=>{
            console.log("Pizza preparada")
        }, 3000)
        

    }

    const calentarPizza = async () => {
        console.log("comienzo a calentar la pizza")
        setTimeout(()=>{
            console.log("Bep Bep Beeep! PIZZA LISTA!!!")
        },10000 )
        await mirandoTV()
        
    }

    const mirandoTV = async () => {
        console.log("Mirando TV")
        setTimeout(()=>{
            console.log("termine de mirar la tv, para comer pizza")
        },12000)
    }


    await precalentarHorno()
})()