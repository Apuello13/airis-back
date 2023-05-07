const router = require('express').Router();
const projectService = require('../../services/project.service');
const authorization = require('../../application/middleware/authorization');

router.post('/', authorization.validateToken, projectService.save);
/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get('/', authorization.validateToken, projectService.findAll);
router.delete('/:projectId', authorization.validateToken, projectService.deleteById)

module.exports = router;