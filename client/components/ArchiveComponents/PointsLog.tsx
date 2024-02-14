export default function PointsLog(){
const userBP:number = 3
const partnerBP:number = 4

return(<>
<div className='points'>
<h2>My Points</h2>
<p>{userBP}</p>
</div>
<div className='points'>
<h2>My Partner's Points</h2>
<p>{partnerBP}</p>
</div>

</>)
}