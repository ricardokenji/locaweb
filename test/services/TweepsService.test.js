import TweepsService from '../../src/services/TweepsService'
import 'babel-polyfill'
import mockedResult from './tweepsMock'

test('getMostRelevantTweeps should order tweeps by relevance', async () => {
    let mockGetTweeps = async () => {
        return mockedResult
    }

    let tweepsService = new TweepsService(mockGetTweeps, 42)

    let result = await tweepsService.getMostRelevantTweeps()

    expect(result[0].followers_count > result[1].followers_count).toBe(true)
    expect(result[1].retweet_count > result[2].retweet_count).toBe(true)
});

test('getMostRelevantTweeps should filter only mentions for locaweb user', async () => {
    let mockGetTweeps = async () => {
        return mockedResult
    }

    let tweepsService = new TweepsService(mockGetTweeps, 42)

    let result = await tweepsService.getMostRelevantTweeps()

    expect(result.length).toBe(4)
});

test('getMostMentionedTweeps should group by user and sort by most mentions', async () => {
    let mockGetTweeps = async () => {
        return mockedResult
    }

    let tweepsService = new TweepsService(mockGetTweeps, 42)

    let result = await tweepsService.getMostMentionedTweeps()

    let firstElement = Object.keys(result[0])[0]
    let secondElement = Object.keys(result[1])[0]

    expect(firstElement).toBe('Foobar2')
    expect(result[0][firstElement].length > result[1][secondElement].length).toBe(true)
});

