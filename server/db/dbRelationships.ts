import connection from "./connection"
import { NewProfile } from "../../models/modelsProfiles"

export async function getRequestsByBottomEmail(newProfile:NewProfile, db = connection){
  try{
    const requests = db('relationships').({

    })
    return 
  }catch(error){
    console.error('error adding artwork to db', error)
  }
}