const express               = require('express');
const router                = express.Router();

// models
const Questions = require('./../models/Questions');

/**
 * GET /admin/administration/form
 * 
 * 
 */
router.route('/form')
    .get((req, res) => {
        let id = req.query.id;

        if ( id && id[id.length - 1] == "/" ) {
            id = id.slice(0, id.length - 1);
        }

        res.render('admin/add-form', {
            title: 'Add Form',
            formID: id
        });
    });

/**
 * API ENDPOINT: 
 * GET /admin/administration/add-form
 * POST /admin/administration/add-form
 * PUT /admin/administration/add-form
 * DELETE /admin/administration/add-form
 *
 * 
 * Retrieve add form format data.
 * Save add form page.
 * Update add form page.
 * Delete form page.
 */
router.route('/add-form?')
    .get((req, res) => {
        let id = req.query.id;

        if ( id && id[id.length - 1] == "/" ) {
            id = id.slice(0, id.length - 1);
        }

        Questions.findOne({_id: id}, (err, doc) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    error: true
                });
            }
            if (!doc) {
                return res.status(204).json({
                    error: true,
                    message: "No data was found."
                })
            }
            res.json({
                id: doc._id,
                title: doc.title,
                questions: doc.questions
            });
        });
    })
    .post(async (req, res) => {
        const { body } = req;

        const questions = new Questions({
            title: body.title,
            questions: body.questions
        });
        
        await questions.save((err, doc) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    error: true
                });
            }
            res.json({
                id: doc._id,
                title: doc.title,
                questions: doc.questions
            });
        });
    })
    .put((req, res) => {
        const { id, title, questions } = req.body;

        Questions.update({_id: id}, { $set: {
            title: title,
            questions: questions
        }}, {new: true, upsert: true}, (err, updated) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    error: true
                });
            }
            res.json({
                error: false
            });
        });
    })
    .delete((req, res) => {
        const { id } = req.body;

        Questions.remove({_id: id}, (err, removed) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    error: true
                });
            }
            res.json({
                error: false
            });
        });
    });

module.exports = router;