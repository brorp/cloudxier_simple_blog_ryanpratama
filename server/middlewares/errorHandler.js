let errorHandler = (err, req, res, next) => {
    console.log(err); 
    if(err.name === 'SequelizeValidationError'){
        res.status(400).json({
            error: `Input cannot be empty!`
        })
    }

    else if(err.name === 'notFound'){
        res.status(404).json({ error: "Page not found"})
    }

    else{
        res.status(500).json({error: 'Internal server error'})
    }
}

module.exports = errorHandler