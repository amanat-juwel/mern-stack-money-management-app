const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const userRouter = require('./routers/userRoute')

const app = express()
app.use(morgan('dev'))
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('api/users/', userRouter)

app.get('/', (req, res) => {
	res.json({
		message: 'Welcome To Our Application'
	})
})

const PORT = process.env.PORT || 4000
app.listen(PORT, ()=> {
	console.log(`SERVER is RUNNING ON PORT ${PORT}`)
	mongoose.connect('mongodb://localhost/money-management-app',
		{ userNewUlrParser: true},
		() =>{
			console.log('Database Connected...')
		})
})