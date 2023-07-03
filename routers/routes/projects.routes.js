const { express } = require("../../imports");
const router = express.Router();
const { projectController } = require("../../controllers");

router.get("/", (req, res) => {
    projectController.getProjects(req, res);
});
router.post("/", (req, res) => {
    projectController.createProject(req, res);
});
router.patch("/:id", (req, res) => {
    projectController.updateProject(req, res);
});
router.delete("/:id", (req, res) => {
    projectController.deleteProject(req, res);
});

module.exports = router;
