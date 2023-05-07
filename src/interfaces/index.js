const router = require('express').Router();
const fs = require('fs');

const removeExtension = (fileName) => {
    return fileName.split('.').shift();
}

const FOLDER_ROUTES = "routes";

fs.readdirSync(`${__dirname}/${FOLDER_ROUTES}`).filter(file => {
    const fileWithOutExt = removeExtension(file);
    const pathRouter = `/${fileWithOutExt}`;
    router.use(pathRouter, require(`./${FOLDER_ROUTES}${pathRouter}`))
});

module.exports = router;