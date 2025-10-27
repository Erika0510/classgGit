const comicsController={}

comicsController.getComics=(req,res)=>{
    res.json({message:"Lista de comic"});
}
module.exports=comicsController;
