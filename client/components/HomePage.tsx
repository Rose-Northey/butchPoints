import RequestBox from './IncomingRequests'
import OutgoingRequestsForm from './OutgoingRequestForm'
import { useAuth0 } from '@auth0/auth0-react'
import * as api from '../apis/relationships'

export default function HomePage() {

  const { isAuthenticated, user } = useAuth0()

  return (
    <>
      <div className={isAuthenticated?"":"hidden"}>
        <OutgoingRequestsForm />
        <RequestBox />
      </div>
    </>
  )
}
