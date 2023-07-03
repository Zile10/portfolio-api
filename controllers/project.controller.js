const {projectModel} = require('../models');

module.exports = {
  getProjects(req, res)  {
    try {
      projectModel.getProjects(req, res)
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
  createProject(req, res) {
    try {
      projectModel.createProject(req, res)
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
  updateProject(req, res) {
    try {
      projectModel.updateProject(req, res)
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
  deleteProject(req, res) {
    try {
      projectModel.deleteProject(req, res)
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
}