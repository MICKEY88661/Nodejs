const { StatusCodes } = require('http-status-codes');
const pool = require('../database/pool');

const newTodo = async (req, res) => {
    const { title, content } = req.body;

    const insert = 'INSERT INTO todos (title , content) VALUE ( ? , ? )';

    pool.execute(
        insert,
        [title, content],
        function (err, rows, fields) {
            if (err) throw err;
            res.status(StatusCodes.OK).json({ msg: 'new todo' });
        }
    );
};

const getTodos = async (req, res) => {
    const select = 'SELECT * FROM todos';

    pool.query(
        select,
        function (err, rows, fields) {
            if (err) throw err;
            res.status(StatusCodes.OK).json({ rows });
        }
    );
};

module.exports = { newTodo, getTodos, };
