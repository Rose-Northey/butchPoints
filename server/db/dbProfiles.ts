import connection from "./connection"
import { NewProfile } from "../../models/modelsProfiles"
import { convertToSnakeCase } from "../universalFunctions"


export async function addProfile(newProfile:NewProfile, db = connection){
  try{
    const newProfileID = db('profiles').insert({
    user_token: newProfile.userToken,
    first_name: newProfile.firstName,
    last_name: newProfile.lastName,
    email_address: newProfile.emailAddress 
    })
    return newProfileID;
  }catch(error){
    console.error('error adding artwork to db', error)
  }
}