const express = require('express');
const router = express.Router();
const accountingController = require('./controllers/accounting-controller');



router.get('/posts', (req, res) => {

  accountingController.get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

module.exports = router;
