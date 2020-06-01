const faker = require('faker')
const extractBody = require('../utils/utils')

function TemplateController(request, response) {
    extractBody(request, (body) => {
        const result = faker.fake(body.template);
        
        response.setHeader(
            'content-type', 'application/json; charset=UTF-8'
        )

        response.write(JSON.stringify(result));
        response.end();
    });
}


module.exports = TemplateController