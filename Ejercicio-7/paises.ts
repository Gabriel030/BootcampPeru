import axios from "axios";
//con este mapeo que realizo en la pagina  https://app.quicktype.io/ , puedo mapear un resp json, 
//de esa forma puedo tener el intelligence en la respuesta
import {mapPaises} from "./mapPaises"

(()=>{

     //EJERCICIO PAISES


     const searchByCodeCountry = async (codigo:string) => {
        
        try {
            const resp = await axios.get(`https://restcountries.com/v3.1/alpha/${codigo}`)

           //console.log(resp)
           console.log(`Nombre pais: ${resp.data[0].name.common}`)
           console.log(`Nombre de moneda: ${resp.data[0].currencies.COP.name}`)
           console.log(`Simbolo de moneda: ${resp.data[0].currencies.COP.symbol}`)
           console.log(`Paises limitrofes: ${resp.data[0].borders}`)
           
           
            
            
        } catch (error) {
            console.log(error)
        }

    }
    searchByCodeCountry("col"); 

    /* searchByCodeCountry("col")
    .then(resp => console.log(resp))
    .catch(err => console.log(err)) */
})()