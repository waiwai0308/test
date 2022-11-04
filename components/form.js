import { useEffect } from 'react'


export default function Form({ children, home }) {

  useEffect(()=>{
    console.log("useEffect")
  },[])

  return (
    <div>
      <div id="recapcha" />
    </div>
  )
}
