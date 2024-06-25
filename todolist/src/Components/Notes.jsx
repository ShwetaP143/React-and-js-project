import React from 'react'
import { CiStickyNote } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";


function Notes(data) {
  const count = data.star;
  const stars = [];
  for (let i = 0; i < count; i++) {
    stars.push(<FaStar key={i} />);
  }

  return (
    <div className='mainNote'>
       <div className='icondiv'> 
       <h3 className='icon'>{data.icon && <CiStickyNote />}</h3>
        <h3>{data.title}</h3>
        </div>
      <p className='para'>{data.text}</p>
      {data.bottom && (
      <div className='footer' style={{backgroundColor : data.colour}}>
        <h4>{data.day}</h4>
        <h4>{stars}</h4>
      </div>
      )}
    </div> 
  )
}
 
export default Notes
