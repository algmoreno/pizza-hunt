const router = require('express').Router();
const commentRoutes = require('./comment-routes')
const pizzaRoutes = require('./pizza-routes');

router.use('/pizzas', pizzaRoutes);
router.use('/comments', commentRoutes)

module.exports = router;