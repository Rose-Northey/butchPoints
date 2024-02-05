import { Link } from "react-router-dom"
import { IfAuthenticated, IfNotAuthenticated } from "./Authenticated"

export default function Nav() {


  const handleSignOut=()=>{
    console.log('sign out')
  }

  const handleSignIn=()=>{
    console.log('sign in')
  }



  return (
  <>
  <nav className= 'hflex'>
    <IfAuthenticated>
      <button>
        Log Out
      </button>
    </IfAuthenticated>
    <IfNotAuthenticated>
      <button>
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