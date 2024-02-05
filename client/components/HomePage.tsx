import { useState} from "react"
import Profile from "./Profile"
import Form from "./Form"
import PointsLog from "./PointsLog"
export default function HomePage() {




  return (
  <>
  <div className= 'hflex'>
    <PointsLog />
  </div>
  <Form />
  </>
  )
}