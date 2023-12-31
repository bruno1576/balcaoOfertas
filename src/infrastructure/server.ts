import express, { Request, Response, NextFunction} from 'express'
import { router } from '../interface/routes';
import cors from 'cors'

const app = express();

app.use(express.json());

app.use(cors());

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof Error){
        return res.status(400).json({
            error: err.message
        })
    }
    return res.status(500).json({
        status: 'error',
        message: 'intenal server error'
    })

})

app.listen(3001, ()=> console.log('servidor'))