import { useState} from "react"
export default function Profile() {
  const images = [
    '/client/public/femme.PNG',
    '/client/public/plaid.PNG',
    '/client/public/pixie.PNG',
    '/client/public/hench.PNG',
  ];

  const [imageIndex, setImageIndex] = useState(0)

  function handleClick(){
    const newIndex = (imageIndex + 1) % images.length;
    setImageIndex(newIndex);
  }




  return (
  <>
  <div className= 'vflex points'>
    <h3>Points</h3>
    <p>{imageIndex}</p>
    <img src = {images[imageIndex]}/>
    <button className='pointButton' onClick = {handleClick}>
      Award Point
    </button>
  </div>
  </>
  )
}