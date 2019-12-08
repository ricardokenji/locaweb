import http from 'http'
import routes from './routes'
import NotFoundException from "./exceptions/NotFoundException"

http.createServer(function (request, response) {
	try {
		const action = routes.findMatch(request.method, request.url)
		action(request, response)
	} catch (error) {
		if (error instanceof NotFoundException) {
        	response.writeHead(404, {'Content-type':'text/plain'})
    	} else {
    		response.writeHead(500, {'Content-type':'text/plain'})
    		console.log(error)
    	}
        response.end()
	}
}).listen(3000)
