import React from 'react';
import Notes from './Notes';


function Background() {
  const data =[
    {
      icon : true,
      title : "Note 1",
      text : "Hello World , Welcome to Testing Shastra",
      day : "Monday",
      star : 1,
      color: "Pink",
      bottom : true,
    },
    {
      icon:true,
      title:"Note 1",
      text: "Hello World , Welcome to Testing Shastra",
      day:"Monday",
      star: 1,
      color:"blue",
      bottom:true,
    },
  ];
  return( 
    <>
   <div className="bg"> 
   <h1 className='bgtext'>Docs</h1>
   <div className='aligenNotes'>
    {data.map((item,index) => (
        <Notes data={item}/>
   ))}
  </div>
   </div>
   </>
  );
}

export default Background
