import { useState} from "react"
import Profile from "./Profile"
import Form from "./Form"
export default function HomePage() {




  return (
  <>
  <div className= 'hflex'>
    <Profile />
    <div className= 'reverse'>
      <Profile />
    </div>
  </div>
  <Form />
  </>
  )
}