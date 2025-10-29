const comicsController={}
const axios=require('axios');

comicsController.getComics= async (req,res)=>{

    const APIKEY=process.env.APIKEY;
    const TS=process.env.TS;
    const HASH=process.env.HASH;
    const MARVEL_API=process.env.MARVEL_API;
    await axios.get(`${MARVEL_API}?ts=${TS}&apikey=${APIKEY}&hash=${HASH}`)
        .then(response=>{
            res.json(response.data);
        })
        .catch(error=>{
            console.error(error);
        });
        console.exports=comicsController;

}
module.exports=comicsController;