export default class IndexController {
	index(req, res) {
		res.end('Welcome to tweeps API, available endpoints: /most_relevants and /most_mentions')
	}
}