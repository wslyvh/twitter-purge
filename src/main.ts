import { deleteTweets, getUserTimeline } from 'client/twitter'

run()

async function run() {
    const tweets = await getUserTimeline()
    console.log('Total amount of tweets', tweets.length)

    const result = await deleteTweets(tweets)
    const deleted = result.filter(i => i.status === 'fulfilled').length
    console.log('Deleted', deleted, 'tweet(s).')
}

export { } 