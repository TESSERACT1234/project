import React from 'react'
import '../mix.css';



export default function home(props) {
  return (

    <main className='homepage'>
      <h3 className="data" style={{ color: "white", backgroundColor: 'orangered', padding: '0.5em' }}>Welcome to Bulls and Bears :: {props.useremail}</h3>
      <div className="doimage">
        <img src="./images/bullsandbears.png" className='dogreatimage' alt="" />
      </div>
      {/* ................................About Us Begin................................................. */}
      <div className='description'>
        <h1 className="data" style={{ color: "white", backgroundColor: 'orangered', padding: '0.2em' }}>-------  About Bulls & Bears  -------</h1>
        <div className='aboutus '>
          <center>
            <p style={{ textAlign: 'justify', textJustify: 'inter-word', marginInline: '5em' }}>Some trading assistants are designed for individual investors, while others are used by professional traders and investment firms. Trading assistants can help traders save time by automating routine tasks and allowing them to focus on making strategic decisions. They can also help traders identify trading opportunities and manage risk.</p>
          </center>
          <div className='aboutd'>
            <div className='aboutimg' style={{ marginLeft: '5em' }} >
              <img src="./images/circular-modified.png" />
            </div>
            <div className='aboutdd mx-auto'>
              <p style={{ textAlign: 'justify', textJustify: 'inter-word', marginInline: '5em' }}>
              Trading assistants perform a range of support responsibilities to assist a financial trader. They handle various types of paper, input and analyse data, and perform simple accounting processes. Bulls and Bears can thus completely replace any helpers and save money while still protecting a trader's personal information in order to support them.


              </p>
            </div>
          </div>
        </div>
      </div>






      <div className='description mx-auto'>
        <h1 className="data" style={{ color: "white", backgroundColor: 'orangered' }}>-------  Our Services  -------</h1>
        <div className='functionalities'>

          <div className='fresources' >
            <h3 style={{ color: "orangered", textAlign: 'center', padding: '1em' }}>Resources</h3>
            <p style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
              Bulls & Bears provides all various types of trading resources that are required to a trader to detect various factors that are required to identify any particular data into any type of market.
            </p>
          </div>

          <div className='fjournal' style={{ marginLeft: '11em', textAlign: 'justify', textJustify: 'inter-word' }}>
            <h3 style={{ color: "orangered", textAlign: 'center', padding: '1em' }}>Journal</h3>
            <p>
              Bulls & Bears provides all various types of trading resources that are required to a trader to detect various factors that are required to identify any particular data into any type of market.
            </p>
          </div>

          <div className='fmarket' style={{ marginLeft: '11em', textAlign: 'justify', textJustify: 'inter-word' }}>
            <h3 style={{ color: "orangered", textAlign: 'center', padding: '1em' }}>Market</h3>
            <p>
              Bulls & Bears provides all various types of trading resources that are required to a trader to detect various factors that are required to identify any particular data into any type of market.
            </p>
          </div>

        </div>

      </div>
      {/* .............................................OUR SERVICES End................................................ */}

      {/* ...................................................Segments Begin.............................................. */}

      <center> <h1 className="data" style={{ color: "white", backgroundColor: 'orangered' }}>-------  Segments  -------</h1></center>
      <div className="segment py-4 justify-content-center">
        <a href="https://www.investopedia.com/terms/e/equitymarket.asp">
          <div className="card mx-4" style={{ width: '70%' }}>

            <img src="./images/equity.jpg" className="card-img" alt="..." />
            <div class="card-body">
              <p class="card-text">In Equity segment we prefer to trade or Invest the heavy volume Stocks from each sectors.</p>
              {/* <a href="https://www.investopedia.com/terms/e/equitymarket.asp" class="btn btn-primary">Read more</a> */}
            </div>
          </div>
        </a>

        <a href="https://corporatefinanceinstitute.com/resources/knowledge/trading-investing/derivatives-market/">
          <div className="card mx-4" style={{ width: '70%' }}>
            <img src="./images/derivatives.jpg" className="card-img" alt="..." />
            <div class="card-body">
              <p class="card-text">In Derivatives market we give priority to Index Derivatives as Nifty and BankNifty NFO.</p>
            </div>
          </div>
        </a>

        <a href="https://www.investopedia.com/terms/c/commodity-market.asp#:~:text=A%20commodity%20market%20involves%20buying,are%20livestock%20or%20agricultural%20goods.">
          <div className="card mx-4" style={{ width: '70%' }}>
            <img src="./images/commodities.jpg" className="card-img" alt="..." />
            <div class="card-body">
              <p class="card-text">In commodities market we mostly trade in MCX the silver futures and gold futures.</p>
            </div>
          </div>
        </a>


      </div>

      <div className="segment py-4 justify-content-center">

        <a href="https://www.investopedia.com/terms/c/cryptocurrency.asp">
          <div className="card mx-4" style={{ width: '70%' }}>
            <img src="./images/crypto.jpg" className="card-img" alt="..." />
            <div class="card-body">
              <p class="card-text">The crypto market fully follows the technical analysis patterns and the leverage is also far more than any market.</p>
            </div>
          </div>
        </a>

        <a href="https://www.investopedia.com/terms/forex/f/forex-market.asp">
          <div className="card mx-4" style={{ width: '75%' }}>
            <img src="./images/forex.jpg" className="card-img" alt="..." />
            <div class="card-body">
              <p class="card-text">In forex market we mostly trade the exotic pairs such as Euro-USD and USD-JPY and many more.....</p>
            </div>
          </div>
        </a>

        <a href="https://www.cfainstitute.org/en/advocacy/issues/high-frequency-trading#:~:text=HFT%20is%20a%20type%20of,data%20and%20electronic%20trading%20tools.">
          <div className="card mx-4" style={{ width: '70%' }}>
            <img src="./images/algo.jpg" className="card-img" alt="..." />
            <div class="card-body">
              <p class="card-text">HFT is a type of algorithmic trading characterized by high speeds,high turnover rates,and high order-to-trade .</p>
            </div>
          </div>
        </a>




      </div>
      {/* ...................................................Segments End.............................................. */}



    </main>

  )
}
