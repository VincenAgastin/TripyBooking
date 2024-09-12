import React from 'react'
import '../propertyList/PropertyList.scss'
const PropertyList = () => {
  return (
    <div className='pList'>
        <div className="pListItem">
            <img className='pListImg' src="https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="No img" />
            <div className="pListTitles">
                <h1>
                    Hotels
                </h1>
                <h2>233 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img className='pListImg' src="https://img.freepik.com/free-photo/3d-house-model-with-modern-architecture_23-2151004030.jpg?t=st=1725336459~exp=1725340059~hmac=f41b9514ecfc92050c0757f26854592dfe456829eb4893d131ff7787039dd4fc&w=900" alt="No img" />
            <div className="pListTitles">
                <h1>
                    Villas
                </h1>
                <h2>320 Villas</h2>
            </div>
        </div>
        <div className="pListItem">
            <img className='pListImg' src="https://img.freepik.com/free-photo/luxurious-villa-with-modern-architectural-design_23-2151694093.jpg?t=st=1725336577~exp=1725340177~hmac=6850e7f0262658ba2cea0ef93a40c980ffa07a64512b537fb0d49659543969ed&w=900" alt="No img" />
            <div className="pListTitles">
                <h1>
                Farmhouses
                </h1>
                <h2>200 Farmhouses</h2>
            </div>
        </div>
        <div className="pListItem">
            <img className='pListImg' src="https://img.freepik.com/free-photo/house-boat_1353-176.jpg?t=st=1725336656~exp=1725340256~hmac=1e52cf8521f3669efd8844e2982b88cb60fa06a89166bd2c1459e6a49aa9ba7c&w=900" alt="No img" />
            <div className="pListTitles">
                <h1>
                Houseboats
                </h1>
                <h2>150 Houseboats</h2>
            </div>
        </div>
        <div className="pListItem">
            <img className='pListImg' src="https://img.freepik.com/free-photo/luxurious-villa-with-modern-architectural-design_23-2151694124.jpg?t=st=1725336746~exp=1725340346~hmac=38fbf4f849d03b5216816fccbc92dc41196cd410d0ca00d09f6cba87b7e73515&w=900" alt="No img" />
            <div className="pListTitles">
                <h1>
                Bungalows
                </h1>
                <h2>210 Bungalows</h2>
            </div>
        </div>
       
    </div>
  )
}

export default PropertyList