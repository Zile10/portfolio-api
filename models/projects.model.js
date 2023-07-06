const {connection} = require('../imports');

// Exporting All Model Functions Directly
module.exports = {
    // 'get' Request Function
    getProjects(req, res) {
        connection.query('SELECT * FROM projects', 
            (error, results) => {
                if (error) console.error(error);
                res.status(200);
                res.send(results);
            },
        );
    },
    // 'post' Request Function
    createOrder(req, res) {
        connection.query('INSERT INTO projects SET ?', [req.body], 
            (error, results) => {
                if (error) console.error(error);
                res.send([results, {msg: "WORKED!"}]);
            },
        );
    },
    // 'update' Request Function
    updateOrder(req, res) {
        connection.query('UPDATE projects SET ? WHERE id = ?', [req.body, req.params.id], (error) => {
            if (error) console.error(error);
            res.send([req.body, {msg: "Projects Updated Successfully"}]);
        })
    },
    // 'delete' Request Function
    deleteOrder(req, res) {
        connection.query('DELETE FROM projects WHERE id = ?;', [req.params.id], (error) => {
            if (error) console.error(error);
            res.send([req.body, {msg: "Order Deleted Successfully"}]);
        })
    }
};