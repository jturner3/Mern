const Author = require('../models/author.model');

module.exports.index = (request, response) => {
    response.json({
        message: "You've reached the Author's API"
    });
}

module.exports.createAuthor = (req, res) => {
    const { name } = req.body;
    Author.create({
        name
    })
        .then(author => res.json(author))
        .catch((err) => {
            console.log("Create author failed");
            res.status(400).json(err)
        });
}

module.exports.getAllAuthor = (req, res) => {
    Author.find({}).sort({ name: 'asc' })
        .then(authors => res.json(authors))
        .catch((err) => {
            console.log("Get all author failed");
            res.status(400).json(err)
        });
}

module.exports.getAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(author => res.json(author))
        .catch((err) => {
            console.log("Get one author failed");
            res.status(400).json(err)
        });
}

module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch((err) => {
            console.log("Update author failed");
            res.status(400).json(err)
        });
}

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(deletedAuthor => res.json(deletedAuthor))
        .catch((err) => {
            console.log("Delete author failed");
            res.status(400).json(err)
        });
}