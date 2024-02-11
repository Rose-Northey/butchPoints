import { Router } from 'express'

import * as db from '../db/dbProfiles'

const router = Router()


// /api/v1/profiles/newUser
router.post('/newUser', async (req, res) => {
  try {
    const newProfile = req.body
    const newUserId = await db.addProfile(newProfile)
    res.status(200).json(newUserId)
  } catch (error) {
    console.error('error at server router', error)
  }
})

export default router
