import React from 'react'
import '../searchItem/SearchItem.scss'
const SearchItem = () => {
  return (
    <div className='searchItem'>
        <img src="https://images.pexels.com/photos/97083/pexels-photo-97083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="No Img" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">Tower Street Apartments</h1>
            <span className='siDistance'>500m form center</span>
            <span className='siTaxiOp'>Free airport taxi</span>
            <span className='siSubtitle'>
                Studio Apartment with Air conditioning
            </span>
            <span className="siFeatures">
                Entire studio · 1 bathroom · 21m² 1 full bed
            </span>
            <span className='siCancelOp'>Free cancellation</span>
            <span className='siCancelOpSubtitle'>
                You can cancel later, so lock in this great price today!
            </span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="isDetailTexts">
                <span className="siPrice">$5343</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button className='siCheckButton'>see availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem