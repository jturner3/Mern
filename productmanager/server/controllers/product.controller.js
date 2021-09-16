const Product = require("../models/product.model");

module.exports.findAllProducts = (req, res) => {
    Product.find({}).sort({title:1})
        .then(allProducts => res.json({ products: allProducts}))
        .catch(err => res.json({ message: "something went wrong", error: err}));
};

module.exports.createNewProduct = (req, res) => {
    console.log(req.body)
    Product.create(req.body)
        .then(newlyCreatedProduct => res.json({ product: newlyCreatedProduct}))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id})
        .then(oneProduct => res.json({ product: oneProduct }))
        .catch(err => res.json({ message: "something went wrong", error: err}));
};

module.exports.updateExistingProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedProduct => res.json({ product: updatedProduct}))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
}

module.exports.deleteExistingProduct = (req, res) => {
    Product.findByIdAndDelete({ _id: req.params.id })
    .then(deletedProduct => res.json({ product: deletedProduct }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};