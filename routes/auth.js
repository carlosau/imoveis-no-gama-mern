import express from 'express'

const router = express.Router()

import * as authCtrl from '../controllers/auth.js'

router.get('/', authCtrl.welcome)
router.post('/pre-register', authCtrl.preRegister)
router.post('/register', authCtrl.register)

export default router