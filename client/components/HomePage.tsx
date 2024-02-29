import RequestBox from './IncomingRequests'
import { useAuth0 } from '@auth0/auth0-react'

export default function HomePage() {
  const { isAuthenticated } = useAuth0()

  return (
    <>
      <div className={isAuthenticated?"":"hidden"}>
        <RequestBox />
      </div>
    </>
  )
}
