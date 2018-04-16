const express               = require('express');
const router                = express.Router();

/**
 * GET /test
 *
 * 
 * Test Page 1
 */
router.get('/test', (req, res) => {
    res.render('pages/index.hbs', {
        title: 'Test Page 1'
    });
});

/**
 * GET /test-two
 *
 * 
 * Test Page 2
 */
router.get('/test-two', (req, res) => {
    res.render('pages/secondpage.hbs', {
        title: 'Test Page 2'
    });
});


module.exports = router;