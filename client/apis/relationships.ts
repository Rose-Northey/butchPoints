import {useAuth0} from '@auth0/auth0-react'
import request from 'superagent'
import { NewRelationship } from '../../models/modelsRelationships'



export async function submitRequest(bottomEmail:string){
const {user, getAccessTokenSilently} = useAuth0()
const topName= user?.given_name
const emailAddress= user?.email

  // const newRelationship:NewRelationship = {
  //   topName: user?.given_name,
  //   topAccessToken: getAccessTokenSilently(),
  //   bottomEmail:bottomEmail,
  //   topEmail:user?.email
  // }

  const requests = await request.post('/api/v1/relationships/new').send(bottomEmail)
  return requests.body
}