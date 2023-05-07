const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Api for test",
            version: "1.0.0",
            description:
                "This is the documentation for API REST made with Node Js (Express)",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "Andrés Puello Osorio",
                email: "andrespuello53@gmail.com",
            },
        },
        servers: [
            {
                url: "http://localhost:3000/api",
            },
        ],
    },
    apis: ["../interfaces/routes/*.js"],
};
const specs = swaggerJsdoc(options);
const SWAGGER_PATH = "/api-docs";

module.exports = {
    initSwagger: (app) =>
        app.use(SWAGGER_PATH, swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }))
}