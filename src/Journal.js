import React, { useState } from "react";
// import '/loginStyles.css';
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./journaldata";





export default function Journal(props) {

  const userEmail = props.useremail


  const [time, settime] = useState('');
  const handletime = event => settime(event.target.value);

  const [strikeprice, setstrikeprice] = useState('');
  const handlestrikeprice = event => setstrikeprice(event.target.value);

  const [dollarindex, setdollarindex] = useState('');
  const handledollarindex = event => setdollarindex(event.target.value);

  const [profit, setprofit] = useState('');
  const handleprofit = event => setprofit(event.target.value);

  const [date, setdate] = useState('');
  const handledate = event => setdate(event.target.value);

  const [vix, setvix] = useState('');
  const handlevix = event => setvix(event.target.value);

  const [globalsentiment, setglobalsentiment] = useState('');
  const handleglobalsentiment = event => setglobalsentiment(event.target.value);

  const [day, setday] = useState('');
  const handleday = event => setday(event.target.value);

  const handlesubmit = async (e) => {
    toast.success("Data added successfully")
    e.preventDefault();
    const result = await axios.post('https://bullsbears2502-default-rtdb.firebaseio.com/journal.json', { dollarindex, time,email:userEmail, profit, strikeprice, date, day, globalsentiment, vix }, { method: 'POST', headers: { "Content-Type": "application/json" } });
    console.log(result);
  
   
  }
  // *********************************************************************************************






  /////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <>
      <main>
        <div class="form-login" style={{ margin: '3em auto 2em auto' }}>

          <div class="contact-info-form-login">
            {" "}
            <span class="circle-login one-login"></span>{" "}
            <span class="circle-login two-login"></span>
            <form action="#" onclick="return false;" autoComplete="off" />
            <h3 class="title-login" style={{ padding: '0em 2em' }}>Bulls & Bears</h3>
            <div class="social-input-containers-login" style={{ padding: '0em 2em' }}>
              {" "}
              {/* ////////////////////////////////////////////////////////////////////////////////Date */}
              <input
                type="date"
                name="date"
                class="input-login"
                placeholder="date"
                autoComplete="on"
                value={Date}
                onChange={handledate}
              />{" "}
              {/* ////////////////////////////////////////////////////////////////////////////////////// */}
            </div>
            <div class="social-input-containers-login" style={{ padding: '0em 2em' }}>
              {/* ////////////////////////////////////////////////////////////////////////////////////////time */}
              {" "}
              <input
                type="time"
                name="time"
                class="input-login"
                placeholder="time"
                autoComplete="on"
                value={time}
                onChange={handletime}
              />{" "}
              {/* ///////////////////////////////////////////////////////////////////////////////////////// */}
            </div>
            <div class="social-input-containers-login" style={{ padding: '0em 2em' }}>
              {/* ///////////////////////////////////////////////////////////////////////////////////////////vix */}
              {" "}
              <input
                type="text"
                name="vix"
                class="input-login"
                placeholder="Voltality Index"
                autoComplete="off"
                value={vix}
                onChange={handlevix}
              />{" "}
              {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            </div>
            <div class="social-input-containers-login" style={{ padding: '0em 2em' }}>
              {/* /////////////////////////////////////////////////////////////////////////////////////////////////////pnl */}
              {" "}
              <input
                type="number"
                name="profit"
                class="input-login"
                placeholder="Profit or Loss"
                autoComplete="on"
                value={profit}
                onChange={handleprofit}
              />{" "}
              {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
            </div>

            {/* <a href="/">
              <input type="submit" onClick={handlesubmit} value="Send" class="btn-login" style={{ margin: '0em 2em' }} />{" "}
            </a>
            <h4 style={{ margin: '0em 0.5em', padding: '1em 1em', color: 'white' }}>Already have account ?<Link to="/login">Login</Link></h4> */}
          </div>

          {/*....................................................................................... */}
          {/*....................................................................................... */}
          {/* ...................................................................................... */}
          <div class="contact-info-form-login">
            {" "}
            <span class="circle-login one-login"></span>{" "}
            <span class="circle-login two-login"></span>
            <form action="#" onclick="return false;" autoComplete="off" />
            <h3 class="title-login" style={{ padding: '0em 2em' }}>Trading Journal</h3>
            <div class="social-input-containers-login" style={{ padding: '0em 2em' }}>
              {/* /////////////////////////////////////////////////////////////////////////// day */}
              {" "}
              <input
                type="text"
                name="day"
                class="input-login"
                placeholder="day"
                autoComplete="on"
                value={day}
                onChange={handleday}
              />{" "}
              {/* //////////////////////////////////////////////////////////////////////////////// */}
            </div>
            <div class="social-input-containers-login" style={{ padding: '0em 2em' }}>
              {/* /////////////////////////////////////////////////////////////////////////////////StrikePrice */}
              {" "}
              <input
                type="number"
                name="strikeprice"
                class="input-login"
                placeholder="Strike Price"
                autoComplete="on"
                value={strikeprice}
                onChange={handlestrikeprice}
              />{" "}
              {/* //////////////////////////////////////////////////////////////////////////////////// */}
            </div>
            <div class="social-input-containers-login" style={{ padding: '0em 2em' }}>
              {/* ////////////////////////////////////////////////////////////////////////////////////Global Sentiments */}
              {" "}
              <input
                type="text"
                name="globalsentiment"
                class="input-login"
                placeholder="Global Sentiment"
                autoComplete="on"
                value={globalsentiment}
                onChange={handleglobalsentiment}
              />{" "}
              {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            </div>
            <div class="social-input-containers-login" style={{ padding: '0em 2em' }}>
              {" "}
              <input
                type="text"
                name="dollarindex"
                class="input-login"
                placeholder="Dollar Index"
                autoComplete="on"
                value={dollarindex}
                onChange={handledollarindex}
              />{" "}
            </div>

            <div style={{ padding: '1em' }}>
              <a href="/">
                <input type="submit" onClick={handlesubmit} value="Submit" class="btn-login" style={{ margin: '0em 3em' }} />{" "}
              </a>
            </div>


          </div>

        </div>
      </main>


      {/* ///////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ///////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ///////////////////////////////////////////////////////////////////////////////////////////// */}

      <div className="Visualised Data mx-auto">
        <h1 style={{ color: 'orangered' }}>
          <center>

            --------- Summarised Data ---------
          </center>
        </h1>


        <div style={{ padding: '1em' }}>
          <center>
            <a href="/market">
              <Link to={"/journaldata"}><input type="submit" value="Get Summarised Data" class="btn-login" style={{ margin: '0em 3em' }} />{" "}</Link>
            </a>

          </center>
          <ToastContainer />
        </div>

      </div>
    </>
  );
}
