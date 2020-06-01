function NotFoundController(request, response) {
    response.statusCode = 404
    response.write('not found')
    response.end()
}

module.exports = NotFoundController;