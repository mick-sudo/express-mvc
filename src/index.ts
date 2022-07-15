import express, { Router } from 'express'
import 'dotenv/config'
import { init } from './middleware/init'


const app = express()
const port = process.env.Port

new init(app)

app.listen(port, () => {
  console.log('serveur lancé sur port 3001');

})