const {express, connection} = require('../imports');
const router = express.Router();

router.get("/", (req, res) => {
    connection.query('SELECT * FROM projects', function (error, results, fields) {
        res.status(200);
        res.send(results);
        if (error) throw error;
    });
});

router.post("/", (req, res) => {
    connection.query('INSERT INTO projects SET ?', [req.body], (error, results) => {
    res.json({
        msg: "WORKED!",
        results: results
    });
        if (error) throw error;
    });
});

module.exports = router