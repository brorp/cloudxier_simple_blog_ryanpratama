const {Blog} = require('../models/index')

class Controller {
    static async getBlog(req,res,next){
        try {
            const response = await Blog.findAll()
            res.status(200).json(response)
        } catch (err) {
            next(err)
        }
    }

    static async getById(req,res,next){
        try {
            const {id} = req.params
            const response = await Blog.findOne({where: {id}})
            res.status(200).json(response)
        } catch (err) {
            next(err)
        }
    }

    static async addBlog(req,res,next){
        try {
            const {author, title, description} = req.body
            const response = await Blog.create({author, title, description})
            res.status(201).json(response)
        } catch (err) {
            next(err)
        }
    }

    static async updateBlog(req,res,next){
        try {
            const {id} = req.params
            const {author, title, description} = req.body
            const response = await Blog.update({author, title, description}, {where: {id}})
            res.status(201).json(response)
        } catch (err) {
            next(err)
        }
    }

    static async deleteBlog(req,res,next){
        try {
            const {id} = req.params
            const response = await Blog.destroy({where: {id}})
            res.status(200).json(response)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = Controller