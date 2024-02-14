import {useQuery} from '@tanstack/react-query'
import {getRequestsForUser} from '../apis/relationships'
import {useAuth0} from '@auth0/auth0-react'

export default function RequestBox(){
  const {user}=useAuth0()
  const userEmail = user?.email
  const {data: requests, isLoading, isError}=useQuery({queryKey:['pendingRequests'], queryFn: ()=>{
    getRequestsForUser(userEmail)
  }})

  if (isLoading){
    return(
      <div className="requestBox">
      <h2>Requests</h2>
      <p>fetching your suitors</p>
    </div>
    )
  }

  if(isError){
    return(
      <p>something went wrong</p>
    )
  }

  return(
    <div className="requestBox">
      <h2>Requests</h2>


    </div>
  )

}