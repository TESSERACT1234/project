import React from 'react'
import '../footer.css';
import { Link } from 'react-router-dom';
import "../Journal";


export default function Footer() {
  return (
    <div className='singhamfooter' style={{ backgroundColor: 'orangered', }}>
      <div className='mainfooter'>

        <div className='logofooter'>
          <div className='aboutimg' style={{ marginLeft: '5em' }} >
            <img src="./images/circular-modified.png" style={{ height: '11em' }} />
          </div>
        </div>

        <div className='linksfooter' style={{ marginInline: '5em' }}>
          <h4>Explore</h4>
          <p><Link to="/" style={{ color: 'white' }}>Home</Link></p>
          <p><Link to="/resources" style={{ color: 'white' }}>Resources</Link></p>
          <p><Link to="/journal" style={{ color: 'white' }}>Journal</Link></p>
          <p><Link to="/market" style={{ color: 'white' }}>Market</Link></p>

        </div>

        <div className='followfooter'>

          <img src="./images/dsg.png.jpg" style={{ height: '11em' }} />
        </div>

        <div className='linksfooter' style={{ marginInline: '5em' }}>
          <h4>Contact us</h4>
          <div class="info">
              <div class="social-information-login">
                {" "}
                <i class="fa fa-map-marker"></i>
                <p>ANAND, GUJARAT, INDIA</p>
              </div>
              <div class="social-information-login">
                {" "}
                <i class="fa fa-envelope-o"></i>
                <p>tradingbot555@gmail.com</p>
              </div>
              <div class="social-information-login">
                {" "}
                <i class="fa fa-mobile-phone"></i>
                <p>+91 63558 59040 </p>
              </div>
            </div>
          
        </div>





      </div>
      <center><h5 style={{ color: 'white', padding: '0.5em' }}>© 2021 Bulls & Bears. All Rights Reserved</h5></center>
    </div>
  )
}
