import { Link } from "react-router-dom"
import { IfAuthenticated, IfNotAuthenticated } from "./Authenticated"
import {useAuth0} from '@auth0/auth0-react'

export default function Nav() {

  const {logout, loginWithRedirect} = useAuth0()
  const user = {
    nickname: 'john.doe',
  }
  console.log(useAuth0())

  const handleSignOut=()=>{
    logout()
  }

  const handleSignIn=()=>{
    loginWithRedirect()
  }



  return (
  <>
  <nav className= 'hflex'>
    <IfAuthenticated>
      <button onClick={handleSignOut}>
        Log Out
      </button>
      {user && <p>Signed in as: {user?.nickname}</p>}
    </IfAuthenticated>
    <IfNotAuthenticated>
      <button onClick={handleSignIn}>
        Log In
      </button>
    </IfNotAuthenticated>

    <button>
      Butch Book
    </button>
  </nav>
  </>
  )
}