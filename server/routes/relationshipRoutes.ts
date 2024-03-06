import { Router } from 'express'
import * as db from '../db/dbRelationships'

const router = Router()


// /api/v1/relationships/new
router.post('/new', async (req, res) => {
  try {
    const newRelationship = req.body
    const newRelationshipId = await db.addRelationship(newRelationship)
    res.status(200).json(newRelationshipId)
  } catch (error) {
    console.error('error at server router', error)
  }
})

// /api/v1/relationships/new
router.post('/', async (req, res) =>{
  try{
    const userEmail = req.body
    res.status(200).json(incomingRequests)
  }catch(error){
    console.error('error at server router for getting relationship requests',error)
  }
})

export default router
