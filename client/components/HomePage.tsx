import RequestBox from "./RequestBox"
import {useAuth0} from "@auth0/auth0-react"

export default function HomePage() {

  const {isAuthenticated}= useAuth0()

  return (
  <>


    <RequestBox />
  </>
  )
}