import {useAuth0} from '@auth0/auth0-react'

const {user, getAccessTokenSilently} = useAuth0()
const topName= user?.given_name
const emailAddress= user?.email



export function submitRequest(email:string){
  console.log(email)
}