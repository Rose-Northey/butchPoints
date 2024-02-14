import connection from "./connection"
import { NewProfile } from "../../models/modelsProfiles"

export async function getRequestsByBottomEmail(bottomEmail:string){
  try{
    const requests = await connection('relationships')
      .where('bottom_email', bottomEmail)
      .select('*')
      .first()
    return requests
  }catch(error){
    console.error('error adding artwork to db', error)
  }
}