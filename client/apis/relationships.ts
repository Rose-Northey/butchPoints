import request from 'superagent'

export async function getRequestsForUser(userEmail:string){
  const bottomEmail = {bottomEmail:userEmail}
  const requests = await request.post('/api/v1/relationships').send(bottomEmail)
  console.log('requests', requests.body)
  return requests.body
}