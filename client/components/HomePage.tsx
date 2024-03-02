import OutgoingRequestsForm from './OutgoingRequestForm'
import { useAuth0 } from '@auth0/auth0-react'
import * as api from '../apis/relationships'
import IncomingRequests from './IncomingRequests'

export default function HomePage() {

  const { isAuthenticated } = useAuth0()

  return (
    <>
      <div className={isAuthenticated?"":"hidden"}>
        <OutgoingRequestsForm />
        <IncomingRequests />
      </div>
    </>
  )
}
