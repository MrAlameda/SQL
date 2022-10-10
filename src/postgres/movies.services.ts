import { MovieSchema } from "../model"
import { Response,Request } from "express";

const moviesControlles=require(`./services/movies.controlles`)

const getAllMovies=({_req,res}:any)=>{
    moviesControlles
      .getAllMovies()
      .then((data:MovieSchema) => {
        res.status(200).json(data);
      })
      .catch((err:Error) => {
        res.status(400).json({message:err.message});
      });
};

const postMovie=({req,res}:any)=>{
    const data:MovieSchema=req.body
    if(data.name&&data.duration&&data.genre&&data.releaseDate){
        moviesControlles.createMovie(data)
            .then((resp:any)=>res.status(201).json(resp))
            .catch((err:Error)=>{res.status(400).json({message:err.message})})
    }
    else{
        res.status(400).json({message:"Missing data"})
    }
}

const getMovieById = (req:Request, res:Response) => {
    const id = req.params.id;

    moviesControlles.getMovieById(id)
        .then((data:MovieSchema) => {
            res.status(200).json(data)
        })
        .catch((err:Error) => {
            res.status(404).json({message: err.message})
        })
}


module.exports={getAllMovies,postMovie,getMovieById}