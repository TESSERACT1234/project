import React , {useState} from "react";
import '../loginStyles.css';
import axios from "axios";
import { Link } from "react-router-dom";
import { app,database } from "../config"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import './Signup'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [email, setEmail] = useState('');
  const handleEmail = event => setEmail(event.target.value);
  const [password, setpassword] = useState('');
  const handlepassword = event => setpassword(event.target.value);
  // const handlesubmit = async (e)=>{
  //   e.preventDefault();
  //   const result = await axios.post('http://localhost:3001/api/auth/login',{email,password},{headers:{"Content-Type":"application.json"}});
  //   console.log(result);

  // }


  const handlesubmit = (e) => {
    console.log("here inside login: ", email, " password:  ", password);
    e.preventDefault();
    const auth = getAuth(app)
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log("inside then");
        const userEmail = response.user.email;
        localStorage.setItem("email", userEmail)
        toast.success(`Logged In as ${userEmail}`, {
          position: "top-right",
        });
        window.location.reload()
        // updateUserDataInStore(userEmail);
        // updateSightingInStore(userEmail);
      })
      .catch((error) => {
        console.log("inside catch");
        console.log(error);
        toast.error("Wrong email or password", { position: "top-right" });
      });

  }
  
  return (
    <>
      <main>
        <div class="form-login" style={{margin: '3em auto 2em auto'}}>
          <div class="contact-info-login">
            <h3 class="title-login black-login">Let's get in touch</h3>
            <p class="text-login">
              {" "}
              Contact us with the following details. and fillup the form with
              the details.{" "}
            </p>
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
            <div class="social-media-login">
              <p>Connect with us on Social Media:</p>
              <div class="social-icons-login">
                <a href="">
                  {" "}
                  <img src="/logo/linkedin.png" alt="" />{" "}
                  <i class="fa fa-linkedin-f"></i>{" "}
                </a>
                <a href="">
                  {" "}
                  <img src="/logo/twitter.png" alt="" />{" "}
                  <i class="fa fa-twitter"></i>{" "}
                </a>
                <a href="">
                  {" "}
                  <img src="/logo/instagram (1).png" alt="" />{" "}
                  {/* <i class="fa fa-instagram"></i>{" "} */}
                </a>
                <a href="">
                  {" "}
                  <img src="/logo/telegram.png" alt="" />{" "}
                  {/* <i class="fa fa-linkedin"></i> */}
                </a>{" "}
              </div>
            </div>
          </div>
          <div class="contact-info-form-login">
            {" "}
            <span class="circle-login one-login"></span>{" "}
            <span class="circle-login two-login"></span>
            <form action="/login" autoComplete="off" />
            <h3 class="title-login" style={{padding: '0em 2em'}}>Login</h3>
            <div class="social-input-containers-login" style={{padding: '0em 2em'}}>
              {" "}
              <input
                type="email"
                name="email"
                class="input-login"
                placeholder="Email"
                value={email}
                onChange={handleEmail}
              />{" "}
            </div>
            <div class="social-input-containers-login" style={{padding: '0em 2em'}}>
              {" "}
              <input
                type="password"
                name="password"
                class="input-login"
                placeholder="Password"
                autoComplete="off"
                value={password}
                onChange={handlepassword}
              />{" "}
            </div>
            <a href="/">
              <input type="submit" onClick={handlesubmit} value="Send" class="btn-login" style={{margin: '0em 2em'}}/>{" "}
            </a>

            <h4 style={{margin: '0em 0.5em' , padding: '1em 1em', color: 'white'}}>New Trader ?<Link to="/signup">Sign Up</Link></h4>
          </div>
        </div>
      </main>
      <ToastContainer />
    </>
  );
}
