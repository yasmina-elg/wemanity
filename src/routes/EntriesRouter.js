import expressPromiseRouter from 'express-promise-router'
import {EntryController} from '../controller/EntryController'

export const EntriesRouter = () => {
    const router = expressPromiseRouter()

    router.get ('/', EntryController.getAll)

    return router
}