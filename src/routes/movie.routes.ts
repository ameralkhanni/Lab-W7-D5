import { createMovie, getAllMovies, getMovieRating, getMoviesByName, getMoviesBygenre } from "../controller/movie.controller";
import express  from "express";
import validate from "../middleware/validate";
import{createMovietype}from "../zod.schema/zod.movie"
let router=express.Router();



router.get('/',getAllMovies);


router.post('/', validate(createMovietype), createMovie );


router.get('/SearshN',getMoviesByName);
router.get('/SearshG',getMoviesBygenre);


router.put('/:id',); 

router.delete('/:id',);

router.get("/riting",getMovieRating)

export default router;