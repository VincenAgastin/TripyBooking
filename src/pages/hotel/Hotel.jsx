import React, { useState } from 'react'
import '../hotel/Hotel.scss'
import { IoLocationSharp } from "react-icons/io5";
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import MailList from '../../components/mailList/MailList'
import "../../components/footer/Footer.scss"
const Hotel = () => {


  const photos=[
    {
      src:"https://images.pexels.com/photos/261395/pexels-photo-261395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      src:"https://images.pexels.com/photos/707581/pexels-photo-707581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      src:"https://images.pexels.com/photos/2291624/pexels-photo-2291624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      src:"https://images.pexels.com/photos/2844474/pexels-photo-2844474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      src:"https://images.pexels.com/photos/751266/pexels-photo-751266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
  ]

  const [slideNumber,setSlideNumber]=useState(0)

  const [open,setOpen]=useState(false)

 const  handleImg=(i)=>{
  setSlideNumber(i)
  setOpen(true)
 }

 const handlemove=(direction)=>{
  let newSlideNumber;
  if(direction==='l'){
    newSlideNumber=slideNumber===0?5:slideNumber-1;
  }else{
    newSlideNumber=slideNumber===5?0:slideNumber+1;
  }

  setSlideNumber(newSlideNumber)

 }


  return (
    <div>
      <Navbar />
      <Header type="list"/>
      <div className="hotelContainer">
        {open && <div className="sliderContainer">
        <MdCancel className='close' onClick={()=>setOpen(false )} />
        <FaArrowAltCircleLeft className='arrow' onClick={()=>{handlemove('l')}} />
        <div className="sliderWrapper">
          <img src={photos[slideNumber].src} alt="No Img" className='sliderImg' />
        </div>
        <FaArrowAltCircleRight className='arrow' onClick={()=>{handlemove('r')}} />
        

        </div>}
        <div className="hotelWrapper">
          <button className='bookNow'>Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
          <IoLocationSharp />
          <span>Elton St 125 New york</span>
          </div>
          <span className="hotelDistance">
            Excellent location  - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {
              photos.map((photo,i)=>(
                <div className="hotelImgWrapper">
                  <img onClick={()=>handleImg(i)} src={photo.src} alt="No Img" className='hotelImg'/>
                </div>
              ))
            }
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
              "Welcome to The Grand Horizon Hotel, a luxurious retreat in the heart of the city. Nestled amidst stunning landscapes and vibrant urban life, our hotel offers an exquisite blend of modern elegance and timeless comfort. Indulge in our spacious rooms and suites, designed with contemporary decor and equipped with state-of-the-art amenities. Whether you're here for business or leisure, enjoy world-class dining at our gourmet restaurants, unwind at our rooftop pool with panoramic views, or rejuvenate at our serene spa. At The Grand Horizon Hotel, your experience is our passion. Discover the perfect balance of luxury and tranquility."
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!
              </h1>
              <span>Located in the real heart of Krakow , this property has an excellent location score of 9.8!</span>
              <h2><b>$945</b> (9  nights)</h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      </div>
      <MailList />
     
    <div className='footer'>
        <div className="fLists" style={{display:"flex",flexDirection:"row"}}>
            <ul className="fList">
                <li className="fListItem">Countries</li>
                <li className="fListItem">Region</li>
                <li className="fListItem">Cities</li>
                <li className="fListItem">Districts</li>
                <li className="fListItem">Airports</li>
                <li className="fListItem">Hotels</li>
            </ul>
            <ul className="fList">
                <li className="fListItem">Countries</li>
                <li className="fListItem">Region</li>
                <li className="fListItem">Cities</li>
                <li className="fListItem">Districts</li>
                <li className="fListItem">Airports</li>
                <li className="fListItem">Hotels</li>
            </ul>
            <ul className="fList">
                <li className="fListItem">Countries</li>
                <li className="fListItem">Region</li>
                <li className="fListItem">Cities</li>
                <li className="fListItem">Districts</li>
                <li className="fListItem">Airports</li>
                <li className="fListItem">Hotels</li>
            </ul>
            <ul className="fList">
                <li className="fListItem">Countries</li>
                <li className="fListItem">Region</li>
                <li className="fListItem">Cities</li>
                <li className="fListItem">Districts</li>
                <li className="fListItem">Airports</li>
                <li className="fListItem">Hotels</li>
            </ul>
            <ul className="fList">
                <li className="fListItem">Countries</li>
                <li className="fListItem">Region</li>
                <li className="fListItem">Cities</li>
                <li className="fListItem">Districts</li>
                <li className="fListItem">Airports</li>
                <li className="fListItem">Hotels</li>
            </ul>
        </div>
        <div className="fText">Copyright © 2024 TripyBooking</div>
    </div>
    </div>
  )
}

export default Hotel