const express               = require('express');
const router                = express.Router();

// // models
// const Questions = require('./../models/Questions');

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

// /**
//  * GET /fill-form
//  * POST /fill-form
//  *
//  * 
//  * Show filling form page.
//  * Submit filling form page.
//  */
// router.route('/fill-form')
//     .get((req, res) => {
//         const messages = req.flash('error');
//         res.render('index/form', {
//             title: 'Fill Form',
//             messages: messages,
//             hasErrors: messages.length > 0
//         });
//     })
//     .post((req, res) => {
//         res.json(req.body);
//     });

// /**
//  * GET /form-preview
//  *
//  * 
//  * Preview form page.
//  */
// router.route('/preview-form?')
//     .get((req, res) => {
//         const { id } = req.query;
//         res.render('index/preview-form', {
//             title: 'Preview Form',
//             formID: id
//         });
//     });

// /**
//  * GET /form-data-format
//  *
//  * 
//  * Endpoint API for form data format.
//  */
// router.route('/form-data-format?')
//     .get((req, res) => {
//         let id = req.query.id;
//         if ( id[id.length - 1] == "/" ) {
//             id = id.slice(0, id.length - 1);
//         }
//         Questions.findOne({_id: id}, (err, form) => {
//             if (err) {
//                 console.log(err);
//                 return res.status(500).json({
//                     error: true
//                 });
//             }
//             res.json({
//                 id: form._id,
//                 title: form.title,
//                 questions: form.questions
//             });
//         });
//     });


module.exports = router;