const {path, app, bodyParser, dotenv} = require('./imports')
dotenv.config();
let port = process.env.PORT || 6969;

let projectRoutes = require('./routes')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/projects", projectRoutes)
app.get("/", (req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.listen(
    port,
    () => {
        console.log('\x1b[33mListening for calls on port:', "\x1b[31m" + port, "\x1b[33m");
        console.log(`http://localhost:${port}`);
        console.log("Press Ctrl+C to exit server", "\x1b[0m");
    }
);