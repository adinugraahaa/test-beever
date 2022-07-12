const model = require('../model/index');
const controller = {};
const axios = require('axios');


controller.getAll = async function(req, res) {
    try {
        await model.quotes.findAll()
        .then((result) => {
            if (result.length > 0) {
                let quotesData = [];
                let favoritesData = [];
                
                result.forEach(data => {
                    if (data.favorites) {
                        favoritesData.push(data);
                    } else {
                        quotesData.push(data);
                    }
                })
                res.status(200).json({
                    quotes: quotesData,
                    favorites: favoritesData
                });
            } else {
                res.status(200).json({
                    message: 'Empty Data',
                    data: []
                });
            }
        })
    } catch (error) {
        res.status(404).json({
            message: error
        });
    }
}

controller.getOne = async function(req, res) {
    try {
        let findQoutes = await model.quotes.findAll({
            where: {
                qoute: req.params.qoute
            }
        });

        if (findQoutes.length > 0) {
            res.status(200).json({
                message: 'Find method Qoutes',
                data: findQoutes
            });
        }
    } catch (error) {
        res.status(404).json({
            message: error
        });
    }
}

controller.getApi = async function(req, res) {
    try {
        const response = await axios.get(`https://api.kanye.rest`);
        const data = await response.data;
        
        const findDuplicate = await model.quotes.findAll({
            where: {
                quote: data.quote
            }
        });

        if (findDuplicate.length > 0) {
            res.status(200).json({
                message: 'qoute already exist'
            });
        }

        const newQoute = await model.quotes.create({
            quote: data.quote,
            favorites: 0
        });
        res.status(200).json({
            message: 'successfully create qoute!!'
        });

    } catch (error) {
        res.status(404).json({
            message: error
        });
    }
}

controller.post = async function(req, res) {
    try {
        let newQuote = await model.quotes.create({
            quote: req.body.quote,
            favorites: req.body.favorites
        });
        res.json({
            data: newQuote,
            message: 'successfully create own qoute!'
        });

    } catch (error) {
        res.status(404).json({
            message: error
        });
    }
}

controller.put = async function(req, res) {
    try {
        let updateQuote = await model.quotes.update({
            favorites: req.body.favorites
        }, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({
            data: updateQuote,
            message: 'successfully update qoute!'
        })
    } catch (error) {
        res.status(404).json({
            message: error
        });
    }
}

controller.delete = async function(req, res) {
    try {
        await model.quotes.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({
            message: 'successfully delete qoute!'
        })
    } catch (error) {
        res.status(404).json({
            message: error
        });
    }
}

module.exports = controller;