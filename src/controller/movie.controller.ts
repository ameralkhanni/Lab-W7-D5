import {prisma} from "../config/db";

import {Request,Response} from "express";


// getAllMovies
export const getAllMovies = async(req: Request, res: Response)=>{
    const movies = await prisma.movie.findMany();
    res.json(movies);

}
export const createMovie=async(req: Request, res: Response)=>{
    try {
        const movie=req.body;
await prisma.movie.create({

    data: movie,
})
res.json({
    message:"movie created successfully"
})
    } catch (error) {
        console.log(error);
        
        
    }
};
export const updateMovie=async(req: Request, res: Response)=>{
    try {
        const movie=req.body
        const {id} = req.params  
     const moviesUpdate = await prisma.movie.update({
where:{
    id,
},

data:movie
          
        
        });
        res.json({"Updated done":{moviesUpdate}})

        
    }
   catch (error) {
    console.log(error);
  }

};

export const deleteMovie=async(req: Request, res: Response)=>{
    try {
        const {id} = req.params  
      await prisma.movie.delete({
where:{
    id,
},
          
        
        });
        res.json({message:"Delete Movie done"})

        
    }
   catch (error) {
    console.log(error);
  }

};
export const getMoviesByName = async(req: Request, res: Response)=>{
    const movies = await prisma.movie.findMany({

        where:{
            name:req.body.name,
        }
    });
    res.json({"message":movies});

};
export const getMoviesBygenre = async(req: Request, res: Response)=>{
    const movies = await prisma.movie.findMany({

        where:{
            genre:req.body.genre,
        }
    });
    res.json({"message":movies});

};
    export const getMovieRating = async (req: Request, res: Response) => {
        try {
            const  {rating}  = req.body;
            const movie = await prisma.movie.findMany({
              where:{
                rating:{
                  gt:rating
                },
              }
            });
            res.json(movie);
          } catch (error) {
            console.log(error);
          }
        };






