const projectRepository = require('../infrastucture/repositories/project.repository');
const httpError = require('../application/utils/http-error');
const { httpStatusKey } = require('../application/utils/http-status')
const functions = require('../application/utils/functions');
const GENERAL = require('../application/utils/general');


const projectService = {
    save: (req, res) => {
        const project = req.body;
        project.id = functions.findLastId(projectRepository.findAll()) + GENERAL.PLUS;
        const projectSave = projectRepository.save(project);
        res.send(projectSave);
    },
    findAll: (req, res) => res.send(projectRepository.findAll()),
    deleteById: (req, res) => {
        const projectId = req.params?.projectId;
        if(!projectId) httpError(res, httpStatusKey.NOT_FOUND);
        const project = projectRepository.findById(projectId);
        projectRepository.deleteById(projectId);
        res.send(project);
    }
};

module.exports = projectService;