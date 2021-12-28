const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require("cors")
if(process.env.NODE_ENV !== "production"){
    require('dotenv').config()
}
const Controller = require('./controllers/controller')
const errorHandler = require('./middlewares/errorHandler')

app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get('/blogs', Controller.getBlog)
app.get('/blogs/:id', Controller.getById)
app.post('/add', Controller.addBlog)
app.post('/edit/:id', Controller.updateBlog)
app.delete('/delete/:id', Controller.deleteBlog)

app.use(errorHandler)

app.listen(port, () => console.log(`App running.. port: ${port}`));