import React, { useState, useRef } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import * as apis from '../apis/relationships'

export default function OutgoingRequestsForm() {
  const [email, setEmail] = useState<string>('')
  
  const queryClient = useQueryClient()

  const submitRequestMutation = useMutation({
    mutationFn: apis.submitRequest,
    onSuccess: async()=>{
      setEmail('')
    }
  })

  const submitRequest = async(event:React.FormEvent<Element>)=>{
    event.preventDefault()
    try{
      submitRequestMutation.mutate(email)
    }catch(error){
      console.error('could not submit your request for some reason')
    }
  }

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
