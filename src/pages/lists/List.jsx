import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import '../lists/List.scss'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/searchItem/SearchItem'
const List = () => {



  const location=useLocation()

  const [destination,setDestination]=useState(location.state.destination)
  const [date,setDate]=useState(location.state.date)
  const [openDate,setOpenDate]=useState(false)
  const [options,setOptions]=useState(location.state.options)


  const handleDate=()=>{
    setOpenDate(!openDate)
  }
 



  return (
    <div>
      <Navbar />
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className='lsTitle'>Search</h1>
            <div className="isItem">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="isItem">
              <label>Check-in Date</label>
              <span onClick={handleDate}> {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}
             </span>
             {openDate &&  <DateRange
             onChange={(item)=>setDate([item.selection])}
             minDate={new Date()}
             ranges={date}
             />}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
              <div className="isOptionItem">
                <span className="isOptionText">Min price <small>per night</small></span>
                <input type="number" className='isOptionInput' />
              </div>
              <div className="isOptionItem">
                <span className="isOptionText">Max price <small>per night</small></span>
                <input type="number" className='isOptionInput' />
              </div>
              <div className="isOptionItem">
                <span className="isOptionText">Adult</span>
                <input type="number" className='isOptionInput'  min={1}  placeholder={options.adult} />
              </div>
              <div className="isOptionItem">
                <span className="isOptionText">Children</span>
                <input type="number" className='isOptionInput' min={0}  placeholder={options.children} />
              </div>
              <div className="isOptionItem">
                <span className="isOptionText">Room</span>
                <input type="number" className='isOptionInput' placeholder={options.room} min={1}   />
              </div>
              </div>
            </div>
            <button className='listSearchBtn'>Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  )
}

export default List