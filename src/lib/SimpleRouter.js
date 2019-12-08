import NotFoundException from "../exceptions/NotFoundException"

export default class SimpleRouter {
	constructor() {
		this.routes = { 
			'GET' : {}, 
			'POST' : {}
		}
	}

	get(path, action) {
		this.routes['GET'][path] = action
	}

	post(path, action) {
		this.routes['POST'][path] = action
	}

	findMatch(method, path) {
		if (path in this.routes[method])
			return this.routes[method][path]
		throw new NotFoundException()
	}
}