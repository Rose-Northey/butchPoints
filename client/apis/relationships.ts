import {useAuth0} from '@auth0/auth0-react'
import request from 'superagent'
import { NewRelationship } from '../../models/modelsRelationships'



export async function submitRequest(newRelationship:NewRelationship){
  const requests = await request.post('/api/v1/relationships/new').send(newRelationship)
  return requests.body
}