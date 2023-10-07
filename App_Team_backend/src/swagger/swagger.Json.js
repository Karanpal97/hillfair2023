const swaggerJsDoc = require("swagger-jsdoc");


const options  ={
    definition:{
        openapi: '3.0.0',
        info:{
            title: "Hillfair App",
            version: "1.0.0",
        },
        servers: [
            {
                url: `http://localhost:4007/`
            }
        ]
    },
    apis: ["./swagger/*"]
}

const spec = swaggerJsDoc(options);

module.exports = spec;