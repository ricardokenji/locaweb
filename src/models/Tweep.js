export default class Tweep {
	constructor(screen_name, profile_link, followers_count, retweet_count, favorite_count, link, text, created_at) {
		this.screen_name = screen_name
		this.profile_link = profile_link
		this.followers_count = followers_count
		this.retweet_count = retweet_count
		this.favorite_count = favorite_count
		this.link = link
		this.text = text
		this.created_at = created_at
	}
}