import LogEntry from "./LogEntry"

export default function Log() {


  return (
  <>
  <h2>Points log</h2>
  <div className='hflex sort'>
    <button> Liz Points</button>
    <button>Rose Points</button>
  </div>
  
  <div className='vflex'>
   <LogEntry />
   <LogEntry />
   <LogEntry />
  </div>
  </>
  )
}