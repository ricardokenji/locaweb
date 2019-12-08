import axios from 'axios'

export default class TweepsClient {
	#username

	constructor(username) {
		this.url = 'http://tweeps.locaweb.com.br/tweeps'
		this.setAuth(username)
	}
	
	setAuth = (username) => {
		this.#username = username
	}

	getTweeps = () => {
		const config = this.getDefaultConfigs()
		const response = axios.get(this.url, config)
			.then(response => response.data)
			.catch(error => {throw 'Could not connect to tweeps service'})
		return response
	}

	getDefaultConfigs = () => {
		return { 
			headers: { 
				'Username' : this.#username 
			}
		}
	}
}
