import { Link } from "react-router-dom"
import { IfAuthenticated, IfNotAuthenticated } from "./Authenticated"
import {useAuth0} from '@auth0/auth0-react'

export default function Nav() {

  const {user, logout, loginWithRedirect} = useAuth0()

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
        {user && <p>{user?.nickname}</p>}
        <p>Log Out</p>
      </button>
      
    </IfAuthenticated>
    <IfNotAuthenticated>
      <button onClick={handleSignIn}>
        <p>Log In</p>
      </button>
    </IfNotAuthenticated>

    <button>
      Butch Book
    </button>
  </nav>
  </>
  )
}