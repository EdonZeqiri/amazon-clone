import React from 'react'
import Product from './Product'
import './Home.css'


function Home() {
    return (
        <div className="home">
           <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
           />

           <div className="home__row">
            <Product
                id="12321341"
                title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                price={11.96}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            />
             <Product
                id="49538094"
                title="KitchenAid KP26M9XCER 6 quart Bowl-Lift Professional Stand Mixer, Empire Red"
                price={239.0}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/41iVZgAmcbL._AC_.jpg"
            />
           </div>

           <div className="home__row">
            <Product
                id="23445930"
                title="Echo Studio (Charcoal) with Amazon Smart Plug"
                price={224.98}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/612TnHGeiQL._AC_SL1000_.jpg"
            />
             <Product
                id="72521341"
                title="Samsung Galaxy Watch Active 2 (40mm, GPS, Bluetooth) Smart Watch with Advanced Health monitoring, Fitness Tracking , and Long lasting Battery - Silver (US Version)"
                price={249.99}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51bSW9gjoaL._AC_SL1024_.jpg"
            />
            <Product
                id="98321341"
                title="New Apple iPad Pro (12.9-inch, Wi-Fi, 512GB) - Space Gray (4th Generation)"
                price={1.299}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SL1500_.jpg"
            />
           </div>
           <div className="home__row">
            <Product
                id="97241341"
                title="Samsung CF390 Series 27 inch FHD 1920x1080 Curved Desktop Monitor for Business, HDMI, VGA, VESA mountable, 3-Year Warranty, TAA (C27F390FHN), Black"
                price={193.97}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/91mL-OSb40L._AC_SL1500_.jpg"
            />
            </div>
           
        </div>
    )
}

export default Home
