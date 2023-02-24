import React from 'react'
import Navbar from './Navbar'
import data from '../DATA/PostData'
import '../CSS/Friends.css'

const Friends = () => {

  return (
    <>
      <Navbar/>

      <div className='friends-div'>
         <h1>~:MY FRIENDS LIST:~</h1>
          {
            data.map((val)=>{
              return(
                <>
                 <div className='friend'>
                    <h1>{val.name}</h1>
                    
                 </div>
                 
                </>
              )
            })
          }
      </div>

    
      
    </>
  )
}

export default Friends
