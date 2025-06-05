import express, { Application, Request, Response } from 'express'

// create express app
const app : Application = express()


// home route
app.get('/', (req : Request, res : Response)=>{
    res.send("Asalamualikum Brother!!")
})






export default app