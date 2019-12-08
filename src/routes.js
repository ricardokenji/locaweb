import SimpleRouter from './lib/SimpleRouter'
import IndexController from './controllers/IndexController'
import SupportController from './controllers/SupportController'
import TweepsClient from "./lib/TweepsClient"
import TweepsService from './services/TweepsService';

//Handle dependencies
//TODO: process.env.HTTP_USERNAME
let simpleRouter = new SimpleRouter()

let tweepsClient = new TweepsClient("test")
let tweepsService = new TweepsService(tweepsClient.getTweeps, 42)
let indexController = new IndexController()
let supportController = new SupportController(tweepsService.getMostRelevantTweeps, tweepsService.getMostMentionedTweeps)

simpleRouter.get("/", indexController.index)
simpleRouter.get("/most_relevants", supportController.mostRelevants)
simpleRouter.get("/most_mentions", supportController.mostMentions)  

export default simpleRouter