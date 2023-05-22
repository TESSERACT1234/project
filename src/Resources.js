import React from 'react'
import "./mix.css";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

function Resources() {
  return (
    <>
    <div>
      <center style={{marginTop:'1em'}}>
        <div className="heading1" style={{padding:'0.5em', color:'white',backgroundColor:'orangered',marginTop:'0.5em'}}>
          <h3>The Perfect Mentors On Youtube </h3>
        </div>

      </center>

      <div className="yresource" style={{ color: "orangered", padding: '1em' }}>

        <div className="youtube1">

          <div className="segment  justify-content-center">
            <a href="https://www.youtube.com/c/rachanaphadke">
              <div className="card ">

                <img src="./images/carachana.jpg" className="card-img" alt="..." style={{width:'16em'}}/>
                <div class="card-body">
                  <p class="card-text"> CA Rachana Ranade.</p>
                  {/* <a href="https://www.investopedia.com/terms/e/equitymarket.asp" class="btn btn-primary">Read more</a> */}
                </div>
              </div>
            </a>

            <a href="https://www.youtube.com/c/BoomingBulls">
              <div className="card ">
                <img src="./images/booming bulls.jpg" className="card-img" alt="..." style={{width:'16em'}}/>
                <div class="card-body">
                  <p class="card-text"> Booming Bulls.</p>
                </div>
              </div>
            </a>

            <a href="https://www.youtube.com/c/POWEROFSTOCKSBySubasish">
              <div className="card ">
                <img src="./images/powerofstocks.png" className="card-img" alt="..." style={{width:'16em'}}/>
                <div class="card-body">
                  <p class="card-text"> Power Of Stocks.</p>
                </div>
              </div>
            </a>


          </div>
        </div>



        <div className="youtube2">
          <div className="segment  justify-content-center">
            <a href="https://www.youtube.com/c/BaapofChart">
              <div className="card mx-4">

                <img src="./images/boc.png" className="card-img" alt="..." style={{width:'16em'}}/>
                <div class="card-body">
                  <p class="card-text"> Baap Of Chart.</p>
                  {/* <a href="https://www.investopedia.com/terms/e/equitymarket.asp" class="btn btn-primary">Read more</a> */}
                </div>
              </div>
            </a>

            <a href="https://www.youtube.com/c/PRSundar64"style={{marginInline:'7em'}}>
              <div className="card mx-4" >
                <img src="./images/prsundar.jpg" className="card-img" alt="..." style={{width:'16em'}}/>
                <div class="card-body">
                  <p class="card-text"> P.R Sundar Sir.</p>
                </div>
              </div>
            </a>

            <a href="https://www.youtube.com/c/Elearnmarkets">
              <div className="card mx-4">
                <img src="./images/elm.png" className="card-img" alt="..." style={{width:'16em'}}/>
                <div class="card-body">
                  <p class="card-text"> E-learn Markets.</p>
                </div>
              </div>
            </a>


          </div>
        </div>
      </div>


    </div>

    <div>
      <center style={{marginTop:'1em'}}>
        <div className="heading1" style={{padding:'0.5em', color:'white',backgroundColor:'orangered',marginTop:'0.5em'}}>
          <h3>The best books Recommended by Trading Experts</h3>
        </div>

      </center>

      <div className="yresource" style={{ color: "orangered", padding: '1em' }}>

        <div className="youtube1">

          <div className="segment  justify-content-center">
            <a href="https://www.youtube.com/c/rachanaphadke">
              <div className="card ">

                <img src="./images/book1.png" className="card-img" alt="..." style={{width:'16em',height:'20em'}}/>
                <div class="card-body">
                  <p class="card-text"> Coffee Can Investing.</p>
                  {/* <a href="https://www.investopedia.com/terms/e/equitymarket.asp" class="btn btn-primary">Read more</a> */}
                </div>
              </div>
            </a>

            <a href="https://www.youtube.com/c/BoomingBulls">
              <div className="card ">
                <img src="./images/book2.png" className="card-img" alt="..." style={{width:'16em',height:'20em'}}/>
                <div class="card-body">
                  <p class="card-text">Value Investing.</p>
                </div>
              </div>
            </a>

            <a href="https://www.youtube.com/c/POWEROFSTOCKSBySubasish">
              <div className="card ">
                <img src="./images/book3.png" className="card-img" alt="..." style={{width:'16em',height:'20em'}}/>
                <div class="card-body">
                  <p class="card-text"> The Intelligent Investor.</p>
                </div>
              </div>
            </a>


          </div>
        </div>



        <div className="youtube2">
          <div className="segment  justify-content-center">
            <a href="https://www.youtube.com/c/BaapofChart">
              <div className="card mx-4">

                <img src="./images/book4.png" className="card-img" alt="..." style={{width:'16em',height:'20em'}}/>
                <div class="card-body">
                  <p class="card-text">Darwin Stratagies.</p>
                  {/* <a href="https://www.investopedia.com/terms/e/equitymarket.asp" class="btn btn-primary">Read more</a> */}
                </div>
              </div>
            </a>

            <a href="https://www.youtube.com/c/PRSundar64"style={{marginInline:'7em'}}>
              <div className="card mx-4" >
                <img src="./images/book5.png" className="card-img" alt="..." style={{width:'16em',height:'20em'}}/>
                <div class="card-body">
                  <p class="card-text"> Value Investing 2.</p>
                </div>
              </div>
            </a>

            <a href="https://www.youtube.com/c/Elearnmarkets">
              <div className="card mx-4">
                <img src="./images/book6.png" className="card-img" alt="..." style={{width:'16em',height:'20em'}}/>
                <div class="card-body">
                  <p class="card-text"> Investing.</p>
                </div>
              </div>
            </a>


          </div>
        </div>
      </div>


    </div>
    </>
  )
}

export default Resources