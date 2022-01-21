const express = require('express')
const dotenv = require ('dotenv')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const passport = require('passport')
const cors = require('cors')

const users = require('./routes/users')
const posts = require('./routes/posts')





//Setup de las variables de entorno
dotenv.config()


//Conexion
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true },{ useUnifiedTopology: true })

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use(passport.initialize())
require('./config/passport')(passport)

app.use('/api/users', users)
app.use('/api/posts', posts)



const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log (`El servidor esta corriendo en el puerto ${PORT}`))