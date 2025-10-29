const typesController={}
const axios=require('axios');

typesController.getTypes= async (req,res)=>{

   
    const POKEMON_API=process.env.POKEMON_API;
    await axios.get(`${POKEMON_API}/type`)
        .then(response=>{
            res.json(response.data);
        })
        .catch(error=>{
            console.error(error);
        });
        console.exports=typesController;

}
module.exports=typesController;
