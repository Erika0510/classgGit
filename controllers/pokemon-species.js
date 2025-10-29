const comicsController={}
const axios=require('axios');

comicsController.getPokemonSpecies= async (req,res)=>{

    const POKEMON_API=process.env.POKEMON_API;
    
    await axios.get(`${POKEMON_API}/pokemon-species`)
        .then(response=>{
            res.json(response.data);
        })
        .catch(error=>{
            console.error(error);
        });
        console.log=("obteniendo especies de pokemon...")

}
module.exports=comicsController;
