import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
const port = process.env.PORT || 8008;

app.get('/', (req, res) => {
    res.send('Hello World! NodeJs Server')
}
)

app.post('/api', (req, res) => {
    console.log(req.body)
    res.send(req.body)
}
)

app.listen(port, () => {
    console.log(`Hello World Server listening at http://localhost:${port}`)
}
)