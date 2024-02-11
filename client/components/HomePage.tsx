import { useState} from "react"
import Profile from "./Profile"
import Form from "./Form"
import PointsLog from "./PointsLog"
import { convertToSnakeCase } from "../../server/universalFunctions"
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