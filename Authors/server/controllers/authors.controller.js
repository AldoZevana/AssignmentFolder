const Author = require("../models/authors.model");

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(newAuthor => res.json(newAuthor))
        .catch((err) => {
            res.status(400).json(err);
        });
}

module.exports.findAllAuthors = (req, res) => {
    Author.find({})
        .then((allAuthors) => {
            res.json(allAuthors);
        })
        .catch((err) => {
            console.log('Error in find all authors', err);
        });
}

module.exports.findOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then((singleAuthor) => {
            res.json(singleAuthor);
        })
        .catch((err) => {
            console.log('Error in find one', err);
        });
}

module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true
    })
        .then((updatedAuthor) => {
            res.json(updatedAuthor);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
}

module.exports.deleteAuthor = (req, res) => {
    Author.findByIdAndDelete(req.params.id)
        .then((confirmation) => {
            res.json(confirmation);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
}
