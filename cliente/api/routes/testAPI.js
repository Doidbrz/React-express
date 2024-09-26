var Express = require('express');
var router = Express.Router();

router.get('/', function(req, res, next) {
    res.send('A API está funcionando');
});

module.exports = router;