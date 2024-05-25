const ProductController = require('../controllers/PM_controller');
module.exports = (app) => {
    app.get('/api', ProductController.index);
    app.post('/api/product', ProductController.createProduct);  
}

