import { useState} from "react"
import Profile from "./Profile"
import Form from "./Form"
import PointsLog from "./PointsLog"
import { addProfile } from "../apis/profile"
export default function HomePage() {
  addProfile()

  return (
  <>
  <div className= 'hflex'>
  <h2>This app excludes single people.</h2>
  <h3>This app is the online version of a wine and cheese night. Single people don't get butch points.</h3>
  </div>
  </>
  )
}