const express = require('express');
const { newTodo, getTodos } = require('../controllers/todoController');

const router = express.Router();

router.post('/', newTodo);
router.get('/', getTodos);

module.exports = router;
