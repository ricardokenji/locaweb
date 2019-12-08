import TweepsService from "../services/TweepsService"

export default class SupportController {
	constructor(getMostRelevantTweeps, getMostMentionedTweeps) {
		this.getMostRelevantTweeps = getMostRelevantTweeps
		this.getMostMentionedTweeps = getMostMentionedTweeps
	}

	mostRelevants = async (req, res) => {
		const tweeps = await this.getMostRelevantTweeps()
		res.end(JSON.stringify(tweeps))
	}

	mostMentions = async (req, res) => {
		const tweeps = await this.getMostMentionedTweeps()
		res.end(JSON.stringify(tweeps))
	}
}