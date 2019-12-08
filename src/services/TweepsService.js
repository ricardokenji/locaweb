import Tweep from "../models/Tweep"

export default class TweepsService {
	constructor(getTweeps, locawebId) {
		this.getTweeps = getTweeps
		this.locawebId = locawebId
	}

	getMostRelevantTweeps = async () => {
		let allStatuses = await this.getTweeps().then(response => response.statuses)
		let locawebStatuses = this.filterStatusesForUserId(allStatuses, this.locawebId)
		let tweeps = locawebStatuses.map(this.buildTweepFromStatus)
		let sortedTweeps = this.sortTweepsByRelevance(tweeps)

		return sortedTweeps
	}

	getMostMentionedTweeps = async () => {
		let tweeps = await this.getMostRelevantTweeps()

		let groupedTweeps = this.groupTweepsBySreenName(tweeps)

		let sortedGroup = this.sortGroupByMostMentions(groupedTweeps)

		return sortedGroup
	}

	filterStatusesForUserId = (statuses, userId) => {
		return statuses.filter(status => {
			return status.in_reply_to_user_id != userId
					&& status.entities.user_mentions.filter(mention => mention.id == userId).length > 0
		})
	}

	sortTweepsByRelevance = (tweeps) => {
		return tweeps.sort((a, b) => {
			if (a.followers_count == b.followers_count) {
				if (a.retweet_count == b.retweet_count) {
					return a.favorite_count > b.favorite_count ? -1 : 1
				}
				return a.retweet_count > b.retweet_count ? -1 : 1
			}
			return a.followers_count > b.followers_count ? -1 : 1
		})
	}

	sortGroupByMostMentions = (group) => {
		return group.sort((a, b) => {
			const aKey = Object.keys(a)[0]
			const bKey = Object.keys(b)[0]
			if (a[aKey] == b[bKey])
				return 0
			return a[aKey] > b[bKey] ? -1 : 1
		})
	}

	buildTweepFromStatus = (status) => {
		return new Tweep(
			status.user.screen_name,
			`https://twitter.com/${status.user.screen_name}`,
			status.user.followers_count,
			status.retweet_count,
			status.favorite_count,
			`https://twitter.com/${status.user.screen_name}/status/${status.id}`, 
			status.text,
			status.created_at
			)
	}

	groupTweepsBySreenName = (array) => {
		return array.reduce((group, tweep) => {
			const screen_name = tweep['screen_name']
			let existing = group.find((t) => Object.keys(t)[0] == screen_name)
			
			if (existing) {
				existing[screen_name].push(tweep)
			} else {
				let add = {}
				add[screen_name] = [tweep]
				group.push((add))
			}
		
			return group
		}, [])
	}
}
