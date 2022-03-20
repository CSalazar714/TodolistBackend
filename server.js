const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const mongooseConnect = require('./config')
const todoRouter = require('./routes/todoRoutes')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

dotenv.config()


app.use(cors({
    origin: "*"
}))
app.use(bodyParser.json())
app.use(morgan('dev'))


app.use('/todo', todoRouter)

// CREATE THE PORT
const PORT = process.env.PORT || 4040

// CREATE BASE ROUTE
app.use('/', (req, res)=>{
    res.status(200).json({message: "API UP!"})
})

// LISTEN
app.listen(PORT, ()=>{
    console.log(PORT)
    mongooseConnect()
})