import { Router } from 'express'
import * as puppiesCtrl from '../controllers/puppies.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
const router = Router()

/*---------- Public Routes ----------*/
router.get('/', puppiesCtrl.index)


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, puppiesCtrl.create)

export {
  router
}