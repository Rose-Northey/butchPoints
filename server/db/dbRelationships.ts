import connection from "./connection"
import { NewRelationship, IncomingRequests } from "../../models/modelsRelationships"

export async function addRelationship(newRelationship:NewRelationship, db = connection){
  try{
    const newRelationshipId = db('relationships').insert({
      bottom_email: newRelationship.bottomEmail,
      top_email: newRelationship.topEmail,
      top_name: newRelationship.topName,
      top_access_token: newRelationship.topAccessToken,
      status: "pending",
      top_points: 1,
      bottom_points: 0
    })
    return newRelationshipId
  }catch(error){
    console.error('error adding new relationship', error)
  }
}

export async function displayIncomingRequests(userEmail:string, db=connection):IncomingRequests{
  try{
    const incomingRequests = db('relationships').where('bottom_email', userEmail).select('*').first()
  }
}