import React from 'react'
import '../home/Home.scss'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Featured from '../../components/featured/Featured'
import PropertyList from '../../components/propertyList/PropertyList'
import FeaturesProperties from '../../components/featuredProperties/FeaturesProperties'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
const Home = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <div className="homeContainer">
          <Featured />
          <h1 className="homeTitle">
            Browse by property type
          </h1>
          <PropertyList />
          <h1 className="homeTitle">Homes guests love</h1>
          <FeaturesProperties />
          <MailList />
          <Footer />
        
        </div>
    </div>
  )
}

export default Home