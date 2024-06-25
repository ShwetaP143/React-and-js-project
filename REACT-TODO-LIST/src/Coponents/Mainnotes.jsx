import React from 'react'
import { FaNoteSticky } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion"

function Mainnotes(props) {
  const { icon, title,add, text, day, star, color, footer} = props.data1; // Destructure data1 object

  const count = star;
  const stars = [];
  for (let i = 0; i < count; i++) {
    stars.push(<FaStar key={i} />);
  }
  return (
    < div className='bgmainnote'>
      < motion.div
      drag 
      whileDrag={{scale:1.2 , backgroundColor:"white",transition: { duration: 1 }}}  
      dragConstraints={{left:100 , right:800 , bottom:400 , top:100}}
       className='mainnote'>
      <div className='iconnote'>
      <motion.div
  drag
  dragDirectionLock
  onDirectionLock={axis => console.log(axis)}
/>
      <h3 className='icon'>{icon && <FaNoteSticky />}</h3>   {/* Access individual properties */}
      <h3>{title}</h3>
      <button type='+' id='mainnotebtn'>{add}</button>
      
      </div>
      <div>
      <p className='text'>{text}</p>
      </div>
       <div className='footercontent'>
      {footer && (<div className='foot' style={{backgroundColor :color}}>
        <h4>{day}</h4>
        <h4>{stars}</h4> 
    </div>
    )}
    </div>
    </motion.div>
    </div>
  )
}
export default Mainnotes;
