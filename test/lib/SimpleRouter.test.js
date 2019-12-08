import SimpleRouter from '../../src/lib/SimpleRouter'

test('GET request should work only for GET', () => {
    let simpleRouter = new SimpleRouter()

    simpleRouter.get('/get_request', () => 'response')

    expect(() => { simpleRouter.findMatch('POST', '/get_request') }).toThrow()
});

test('GET request should if path is registered', () => {
    let simpleRouter = new SimpleRouter()

    simpleRouter.get('/get_request', () => 'response')
    let result = simpleRouter.findMatch('GET', '/get_request')

    expect(typeof result === typeof(Function)).toBe(true)
});