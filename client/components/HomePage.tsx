import RequestBox from './RequestBox'
import { useAuth0 } from '@auth0/auth0-react'
import * as api from '../apis/relationships'

export default function HomePage() {

  const { isAuthenticated, user } = useAuth0()
  console.log(user?.email)
  api.getRequestsForUser(user?.email)

  return (
    <>
      <div className={isAuthenticated?"":"hidden"}>
        <RequestBox />
      </div>
    </>
  )
}
