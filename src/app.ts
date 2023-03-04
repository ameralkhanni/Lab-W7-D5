import  express ,{Application} from "express";
const app:Application= express();
import userRoutes from './routes/movie.routes'
let port:number=3003;
app.use(express.json());

app.use('/movie',userRoutes);



app.listen(port,() => console.log(`express server started on port ${port}`));

