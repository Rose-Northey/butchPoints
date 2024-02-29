import React, { useState, useRef } from 'react'

export default function OutgoingRequestsForm() {
  const [email, setEmail] = useState<string>('')

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
    setEmail(event.target.value)
  }
  return (
    <>
      <h3>Outgoing Requests</h3>
      <form>
        <label>
          Type your lover's email to request a relationship (so romantic)
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </label>
        <br />
        <button type="submit" onClick={submitRequest}>
          GRAND ROMANTIC GESTURE AWAY!!
        </button>
      </form>
    </>
  )
}
