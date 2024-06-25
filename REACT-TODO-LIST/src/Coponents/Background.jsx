import React from 'react'
import Mainnotes from './Mainnotes'


function Background() {
  const data1=[
    {
     icon:true,
     title: "Note1",
     add:"+",
     text: "loream , hello dear how are you!!!!",
     day: "Monday",
     star: 2,
     footer: true,
     color:"gray",
  },
  {
  icon:true,
     title: "Note1",
     add:"+",
     text: "loream , hello dear how are you!!!!",
     day: "Monday",
     star: 2,
     footer: true,
     color:"gray",
    },
 {
  icon:true,
  title: "Note1",
  add:"+",
  text: "loream , hello dear how are you!!!!",
  day: "Monday",
  star: 2,
  footer: true,
  color:"black",
},
];
  return (
    <div className='body'>
      <div className='bg'>
      <h1 className='docs'>Doc's</h1>

      <div className='alignnotes'>
      {data1.map((items) =>(
        <Mainnotes data1={items}/>
      ))}
      </div>
      </div>
    </div>
  )
}

export default Background
