import request from 'superagent'

export async function addProfile(){
  const postObject = {
    "userToken": "auth0|123",
    "firstName": "Samira",
    "lastName": "Wiley",
    "emailAddress": "samirawiley56@gmail.com"
  }
  const profileId = await request.post('/api/v1/profiles/newUser').send(postObject)
  console.log(profileId)
  return profileId
}

