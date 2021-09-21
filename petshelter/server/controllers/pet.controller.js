const { Pet } = require('../models/pet.model');


module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    });
}

module.exports.createPet = (req, res) => {
    const { name, type, description, skill1, skill2, skill3} = req.body;
    Pet.create({
        name,
        type,
        description,
        skill1,
        skill2,
        skill3,
    })
    .then(pet => res.json(pet))
    .catch(err => res.json(err));
}

module.exports.getAll = (request, response) => {
    Pet.find({}).sort("type").exec()
        .then(products => response.json(products))
        .catch(err => response.json(err))
}

module.exports.getOne = (request, response) => {
    Pet.findOne({ _id: request.params._id})
        .then(person => response.json(person))
        .catch(err => response.json(err))
}

module.exports.updateObject = (request, response) => {
    Pet.findOneAndUpdate({_id: request.params._id}, request.body, {runValidators: true})
        .then( () => response.json({msg: "Good Job JT, the update worked!"}))
        .catch(err => response.json(err));
}

module.exports.deleteObject = (request, response) => {
    Pet.deleteOne({_id: request.params._id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}


module.exports.likePet = (request, response) => {
    Pet.findOneAndUpdate(
        {_id: request.params._id},
        {$inc: {likes: 1}}

    )
        .then(() => response.json({msg: "big win"}))
        .catch(err => response.json(err));
    }