import React from 'react'
import { GiSave,GiBookmark } from "react-icons/gi";
import {RiFileDownloadFill} from "react-icons/ri";


function Cards() {
  return (
    <div className='cardsCon'>
      <div className='cards'>
        <h3><GiSave size={20}/> Save Files</h3>
      </div>
      <div className='cards'>
      <h3><span><GiBookmark size={20}/></span>Bookmark Work</h3>
        </div>
        <div className='cards'>
        <h3><RiFileDownloadFill size={20}/>Download Notes</h3>
        </div>
    </div>
  )
}

export default Cards
