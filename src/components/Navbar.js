import { bgcolor } from '@mui/system';
import React from 'react'
import { Link } from 'react-router-dom';

export default function index(props) {
  const removeBodyClasses = () => { // Function to  Delete all other background classes
    document.body.classList.remove("bg-white");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-primary");
  };

  let i = 1; // Global i for 
  const toggleMode = () => { // Togglemode function for onclick toggle background colour
    removeBodyClasses();
    let cls = ['bg-white', 'bg-warning', 'bg-success', 'bg-danger', 'bg-dark', 'bg-primary']; // background color
    document.body.classList.add(cls[i]); // Adding class name to classList which colour's background want to make
    i = (i + 1) % 6;
  };

  const handleLogout = () => {
    localStorage.setItem("email","")
    window.location.reload()
  }
  return (
    <>

      <header>

        <nav className={`navbar navbar-expand-lg  `} style={{ height: '4.5em',color:'white',backgroundColor:'orange' }}>
          <Link className="nav-item" to="/" style={{marginInline:'0.5em', color:"Black"}}>Bulls and Bears</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item" style={{marginInline:'6em', color:'white'}}>
                <Link to="/resources" className={`nav-link`}>Resources</Link>
              </li>
              {/* <li className="nav-item navcenter navmarginRight">
              {/* <i className="fa-solid fa-user-secret"></i> */}
              {/* </li> */}
              <li className="nav-item"style={{marginInline:'6em', color:'white'}}>
                <Link to="/journal" className={`nav-link`}>Journal</Link>
              </li>
              <li className="nav-item"style={{marginInline:'6em', color:'white'}}>
                <Link to="/market" className={`nav-link`}>Market</Link>
              </li>
              {!props.useremail && <li className="nav-item"style={{marginInline:'6em', color:'white'}}>
                <Link to="/login" className={`nav-link`}>Login</Link>
              </li>}
              {props.useremail && <li className="nav-item"style={{marginInline:'6em', color:'white'}}>
                <Link to="" onClick={handleLogout} className={`nav-link`}>Logout</Link>
              </li>}
              {/* <li className="nav-item">
                <Link to="/signup" className={`nav-link`}>Sign Up</Link>

              </li> */}
              {/* <li className="nav-item navcenter">
              <i className="fa-solid fa-user-plus"></i>
              </li> */}
            </ul>
            {/* <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/station" className="nav-link">station</Link>
            </li>
            <li className="nav-item">
              <Link to="/newitem" className="nav-link">new item</Link>
            </li>
          </ul> */}

            <div className="d-flex">
              {/* <div className="bg-primary rounded mx-2 toggleBtn BorderPrimary" onClick={() => { props.toggleMode('primary') }}></div>
              <div className="bg-danger rounded mx-2 toggleBtn BorderDanger" onClick={() => { props.toggleMode('danger') }} ></div>
              <div className="bg-success rounded mx-2 toggleBtn BorderSucess" onClick={() => { props.toggleMode('success') }}></div>
              <div className="bg-warning rounded mx-2 toggleBtn BorderWarning" onClick={() => { props.toggleMode('warning') }}></div>
              <div className="bg-dark rounded mx-2 toggleBtn BorderDark" onClick={() => { props.toggleMode('dark') }}></div> */}
              {/* <div className="bg-white rounded mx-2 toggleBtn BorderWhite" onClick={() => { props.toggleMode('white') }}></div> */}
              <i className="fa-solid fa-brush d-flex align-items-center" onClick={() => { toggleMode() }}></i>
            </div>

            {/* <form className="form-inline my-2 my-lg-0"action="/search" method="POST" autoComplete="off">
            <input className="form-control mr-sm-2" type="search" placeholder="Search..." name="query" id="query" aria-label="Search"/>
            <input type="hidden" id="station" name="station" value=""/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> */}

          </div>
        </nav>
      </header>
    </>
  )
}
