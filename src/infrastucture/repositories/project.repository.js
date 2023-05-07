let projects = require('../../domain/project');

const projectRepository = {
    save: (project) => {
        projects.push(project);
        return project;
    },
    findAll: () => projects,
    findById: (projectId) => projects.find(project => project.id === projectId),
    deleteById: (projectId) =>
    {
        const filterProjects = projects.filter(project => project.id !== projectId);
        projects = filterProjects;
    }
}

module.exports = projectRepository;