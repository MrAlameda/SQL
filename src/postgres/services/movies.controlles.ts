const uuid=require("uuid")
const Movi=require("../dataType")

export const getAllMovies=()=>{
    const data=Movi.findAll()
    return data
}

export const createMovie=async(data:any)=>{
    const newMovie=await Movi.create({
        id:uuid.v4(),
        name:data.name,
        genre:data.genre,
        duration:data.duration,
        releaseDate:data.releaseDate
    })

    return newMovie
}

const getMovieById = async (id:string) => {
    const data = await Movi.findOne({
        where: {
            id
        },
    });
    return data
}

module.exports={createMovie,getAllMovies,getMovieById}