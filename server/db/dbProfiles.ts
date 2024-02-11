import connection from "./connection"
import { NewProfile } from "../../models/modelsProfiles"


// export interface NewProfile{
//   userToken: string
//   firstName: string
//   lastName: string
//   emailAddress: string
// }

// convert cammelCase to Snake Case
console.log(convertToSnakeCase("happyDays"))
const hey = convertToSnakeCase("happyDays")
console.log("anything")
export async function addProfile(newProfile:NewProfile, db = connection){
  

  return db('profiles')
  .insert(newProfile)
}