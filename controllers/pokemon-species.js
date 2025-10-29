const comicsController={}
const axios=require('axios');

comicsController.getComics= async (req,res)=>{

    
    const POKEMON_API=process.env.MARVEL_API;
    await axios.get(`${POKEMON_API}/pokemon`)
        .then(response=>{
            res.json(response.data);
        })
        .catch(error=>{
            console.error(error);
        });
        console.exports=pokemonController;

}
module.exports=pokemonController;
