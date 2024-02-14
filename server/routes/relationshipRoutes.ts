import { Router } from 'express'
import * as db from '../db/dbRelationships'

const router = Router()


// /api/v1/relationships
router.post('/', async (req, res) => {
  try {
    const userEmail = req.body.bottomEmail
    const requests = await db.getRequestsByBottomEmail(userEmail)
    console.log(userEmail)
    res.status(200).json(requests)
  } catch (error) {
    console.error('could not get requests at server router', error)
  }
})

export default router
