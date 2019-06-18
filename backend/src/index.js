//import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = express.Router();
const PORT = 4000;

let Product = require('./models/product.model');

// define the Express app
const app = express();

// use bodyParser to parse application/json content-type
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/restaurant', {
  useNewUrlParser:true
})
const connection = mongoose.connection;

connection.once('open', function(){
  console.log("MongoDB database connection established successfully");
})

routes.route('/').get(function(req, res) {
    let limit = parseInt(req.query.limit);
    console.log(limit);
    Product.find().limit(limit).exec(function(err, products) {
        if (err) {
            console.log(err);
        } else {
            res.json(products);
        }
    });
});

routes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Product.findById(id, function(err, products) {
        res.json(products);
    });
});

routes.route('/update/:id').post(function(req, res) {
    Product.findById(req.params.id, function(err, product) {
        if (!product)
            res.status(404).send("data is not found");
        else
            product.description = req.body.description;
            product.name = req.body.name;
            product.price = req.body.price;
            product.quantity = req.body.quantity;
            product.detail = req.body.detail;
            product.save().then(product => {
                res.json('Product updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

routes.route('/add').post(function(req, res) {
    let product = new Product(req.body);
    product.save()
        .then(product => {
            res.status(200).json({'product': 'product added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new product failed');
        });
});

routes.route('/delete/:id').post(function(req, res) {
  Product.deleteOne({ _id: req.params.id }, function (err) {
  if (err) 
    res.status(400).send('deleting product failed');
  else
    res.status(200).json({'product': 'product deleted successfully'});
    // deleted at most one tank document
  });
});

app.use('/products', routes);
// start the server
app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
});