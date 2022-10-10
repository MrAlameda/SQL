import { Express } from "express"
import { createMovie } from "./services/movies.controlles"

const exprees=require("express")
const router:Express=exprees.Router()
const moviesServices=require("./movies.services")

router.get('/',moviesServices.getAllMovies)
router.post('/',moviesServices.postMovie)

router.get('/:id',moviesServices.getMovieById)

router.post("/",(req,_res)=>{
    const info:any = {
        name:req.body.name,
        genre:req.body.genre,
        duration:req.body.duration,
        releaseDate:req.body.release_date,
    }

    if(info){
        const data=createMovie(info)
        _res.status(201).json(data)
    }else{
        _res.status(400).json({msagge:"no acepted value"})
    }
})


module.exports=router