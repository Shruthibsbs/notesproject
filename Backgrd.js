import React from 'react'
import pic from '../picnotes.jpg'

function Backgrd() {
  return (
    <div className='backgrd'>
      <img className='pic' src={pic} alt="" height={'500rem'} width={'100%'}/>
      <div className='textarea'>
            <h3>Grab your Notes here...</h3>
            <p>
                We provide you all subject Notes that you are looking for.We have arranged all notes according to your respective institutes.
            </p>
            <div className='btns'>
                <button className='btns_btn green' type="">Get Started</button>
                <button className='btns_btn blue' type="">Sign in</button>
                
            </div>

      </div>
    </div>
  )
}

export default Backgrd
