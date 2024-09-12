import React from 'react'
import '../featured/Featured.scss'
const Featured = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img className='featuredImg'  src="https://images.pexels.com/photos/2291624/pexels-photo-2291624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="No Img" />
            <div className="featuredTitles">
                <h1>Dublin</h1>
                <h1>122 properties</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="No Img" className='featuredImg' />
            <div className="featuredTitles">
                <h1>Austin</h1>
                <h1>533 properties</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="No Img" className='featuredImg' />
            <div className="featuredTitles">
                <h1>Reno</h1>
                <h1>560 properties</h1>
            </div>
        </div>
    </div>
  )
}

export default Featured