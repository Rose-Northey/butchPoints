import connection from "./connection"
import { NewRelationship } from "../../models/modelsRelationships"

export async function addRelationShip(newRelationship:NewRelationship, db = connection){
  try{
    const newProfileID = db('relationships').insert({
      bottom_email_address: newRelationship.bottom_email
    })
  }catch(error){
    console.error('error adding artwork to db', error)
  }
}