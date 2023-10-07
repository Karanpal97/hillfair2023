const swaggerJsDoc = require("swagger-jsdoc");


const options  ={
    definition:{
        openapi: '3.0.0',
        info:{
            title: "Hilffair App",
            version: "1.0.0",
        },
        servers: [
            {
                url: `http://localhost:5000/`
            }
        ]
    },
    apis: ["./swagger/*"]
}

const spec = swaggerJsDoc(options);

module.exports = spec;