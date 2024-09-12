import React from 'react'
import '../featuredProperties/FeaturesProperties.scss'
const FeaturesProperties = () => {
  return (
    <div className='fp'>
      <div className="fpItem">
  <img
    src="https://img.freepik.com/free-photo/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table_105762-1783.jpg"
    alt="No Img"
    className="fpImg"
  />
  <span className="fpName">Aparthotel Stare Miasto</span>
  <span className="fpCity">Madrid</span>
  <span className="fpPrice">Starting from $120</span>
  <div className="fpRating">
    <button>9.9</button>
    <span>Excellent</span>
  </div>
</div>

<div className="fpItem">
  <img
    src="https://plus.unsplash.com/premium_photo-1661963890332-64aca322d1e9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="No Img"
    className="fpImg"
  />
  <span className="fpName">Grand Luxury Suite</span>
  <span className="fpCity">Paris</span>
  <span className="fpPrice">Starting from $150</span>
  <div className="fpRating">
    <button>9.7</button>
    <span>Superb</span>
  </div>
</div>

<div className="fpItem">
  <img
    src="https://img.freepik.com/premium-photo/hotel-with-palm-tree-pool-front-it_406811-88324.jpg?w=826"
    alt="No Img"
    className="fpImg"
  />
  <span className="fpName">Urban Boutique Hotel</span>
  <span className="fpCity">New York</span>
  <span className="fpPrice">Starting from $200</span>
  <div className="fpRating">
    <button>9.5</button>
    <span>Wonderful</span>
  </div>
</div>

<div className="fpItem">
  <img
    src="https://images.pexels.com/photos/14749879/pexels-photo-14749879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    alt="No Img"
    className="fpImg"
  />
  <span className="fpName">The Royal Palace Hotel</span>
  <span className="fpCity">Dubai</span>
  <span className="fpPrice">Starting from $350</span>
  <div className="fpRating">
    <button>9.8</button>
    <span>Exceptional</span>
  </div>
</div>

<div className="fpItem">
  <img
    src="https://plus.unsplash.com/premium_photo-1661962739798-0af59dc30d14?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="No Img"
    className="fpImg"
  />
  <span className="fpName">Serene Vista Resort</span>
  <span className="fpCity">Tokyo</span>
  <span className="fpPrice">Starting from $180</span>
  <div className="fpRating">
    <button>9.6</button>
    <span>Outstanding</span>
  </div>
</div>

    </div>
  )
}

export default FeaturesProperties