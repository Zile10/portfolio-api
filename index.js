// Imports
const {path, express, bodyParser, dotenv} = require('./imports');
const {projectsRoutes} = require('./routers');

// File Setup/Config
const app = express()
dotenv.config();
const port = process.env.PORT || 6969;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routing
app.get("/", (req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname, '/views/index.html')); // Send HTML File to Root Requests
});
app.use("/projects", projectsRoutes) // Set '/projects' to use the projectRoutes file/module

// Server
app.listen(
    port,
    () => {
        console.log('\x1b[33mListening for calls on port:', "\x1b[31m" + port, "\x1b[33m");
        console.log(`http://localhost:${port}`);
        console.log("Press Ctrl+C to exit server", "\x1b[0m");
    }
);