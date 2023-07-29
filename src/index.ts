import axios from 'axios';
import express, {Request, Response} from 'express';

export interface User {
    name: string
}

const options = {method: 'GET', url: 'https://api.github.com/users/AndrianBalanescu'};

let resData = {};

axios.request(options).then(function (response) {
  console.log(response.data);
    resData = response.data;
}).catch(function (error) {
  console.error(error);
});

const app = express();
const port = process?.env?.PORT ?? 8000

app.get('/', async (req: Request, res: Response) => {
    return res.json(resData);
});


app.listen(port, () => {
    console.log(`⚡️[server]: Server is 123 at http://localhost:${port}`);
});
