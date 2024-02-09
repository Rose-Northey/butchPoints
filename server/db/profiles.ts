import connection from "./connection"

export async function addProfile(profileData, db = connection){
  

  return db('profiles')
  .insert(profileData)
  .returning 
}