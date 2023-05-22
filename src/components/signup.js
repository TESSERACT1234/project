import React, {useEffect, useRef } from 'react'
// import { useNavigate } from 'react-router-dom';
import "../signup.css";
import { useFormik } from "formik";
import { signUpSchema } from "../schema/signUpSchema";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app, database, provider } from "../config";
import { doc,setDoc } from "firebase/firestore";
import { useNavigate } from 'react-router';

import { signInWithRedirect,getRedirectResult,signInWithPopup, GoogleAuthProvider } from "firebase/auth";


// const auth = getAuth();



// import { useDispatch } from "react-redux";
// import { initializeUser } from "../features/user/userSlice";

const initialValues = {
    firstName:"",
    lastName:"",
    email: "",
    password: ""
};

const Signup = () => {
    const auth = getAuth(app)
    const navigate = useNavigate()

    const signUpWithGoogle = (e) => {
        signInWithRedirect(auth, provider);
        getRedirectResult(auth)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            
            // const token = credential.accessToken;
            
            // The signed-in user info.
            const user = result.user;
            localStorage.setItem("email",user.email);
            // IdP data available using getAdditionalUserInfo(result)
            navigate("/")
            // ...
        }).catch((error) => {
            console.log("called error")
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }

    // const dispatch = useDispatch();
    // const initialInputRef = useRef(); // Used for initial input focus on email input tag
    // const navigate = useNavigate()

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit:async (values, action) => {
        createUserWithEmailAndPassword(auth,values.email,values.password)
        .then((userCredentials) => {
            console.log(userCredentials.user)
        })
        const userDataForFirebase = {
            firstname:values.firstName,
            lastname:values.lastName,
            email:values.email,
            }


        // await setDoc(doc(database, "user", values.email), userDataForFirebase);
        // dispatch(initializeUser(userDataForStore))
        
        toast.success("User created successfully",{"position":"top-right"})
        
        console.log(values)

        localStorage.setItem("email",values.email)
        window.location.reload()
        action.resetForm();
        navigate("/")    
    },
    });

    const openLogIn = () => {
        navigate("/login")
    }

  // Used for initial input focus on email input tag
//   useEffect(() => {
//     initialInputRef.current.focus();
//   }, []);

//   const openLogIn = () => {
//     navigate("/login")
//   }

  return (
    <>
    <div>
            <form onSubmit={handleSubmit} autoComplete="off">
                <div className="login-container margin-auto-big flex-container align-items-center flex-direction-column flex-none">
                    <div>
                        <p className="margin-big text-center font-bold font-big">Bulls & Bears SignUp Page </p>

                        <div className="flex-container padding-small-mid flex-direction-column">
                            <div className='flex-container justify-content-center align-items-center height-70p'>
                                <p className="input-label width-20">
                                    {" "}
                                    <label>FirstName: </label>{" "}
                                </p>
                                <div>
                                    <p className="input-p">
                                        {" "}
                                        <input type="text" className="input" onChange={handleChange} onBlur={handleBlur} placeholder="aniket" name="firstName" id="firstName" value={values.firstName}/>
                                        {" "}
                                    </p>
                                    {touched.firstName && errors.firstName ? ( <p className="font-red tiny-font absolute"> &nbsp;* Enter First Name </p> ) : ( <p></p> )}
                                </div>
                            </div>
                            <div className='flex-container justify-content-center align-items-center height-70p'>
                                <p className="input-label width-20">
                                    {" "}
                                    <label>LastName: </label>{" "}
                                </p>
                                <div>
                                    <p className="input-p">
                                        {" "}
                                        <input type="text" className="input" onChange={handleChange} onBlur={handleBlur} placeholder="Chakravarti" name="lastName" id="lastName" value={values.lastName}/>
                                        {" "}
                                    </p>
                                    {touched.lastName && errors.lastName ? ( <p className="font-red tiny-font absolute"> &nbsp;* Enter valid Last Name </p> ) : ( <p></p> )}
                                </div>
                            </div>
                            <div className='flex-container justify-content-center align-items-center height-70p'>
                                <p className="input-label width-20">
                                    {" "}
                                    <label>Email: </label>{" "}
                                </p>
                                <div>
                                    <p className="input-p">
                                        {" "}
                                        <input type="text" className="input" onChange={handleChange} onBlur={handleBlur} placeholder="vnc@gmail.com" name="email" id="email" value={values.email}/>
                                        {" "}
                                    </p>
                                    {touched.email && errors.email ? ( <p className="font-red tiny-font absolute"> &nbsp;* Enter valid email </p> ) : ( <p></p> )}
                                </div>
                            </div>
                            <div className='flex-container justify-content-center align-items-center height-70p'>
                                <p className="input-label width-20">
                                    {" "}
                                    <label>Password: </label>{" "}
                                </p>
                                <div>
                                    <p className="input-p">
                                        {" "}
                                        <input type="password" className="input" onChange={handleChange} onBlur={handleBlur} placeholder="password" name="password" id="password" value={values.password} />
                                        {" "}
                                    </p>
                                    {touched.password && errors.password ? ( <p className="font-red tiny-font absolute"> &nbsp;* Enter valid password </p> ) : ( <p></p> )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div> <button type="button" onClick={signUpWithGoogle}>Google signup</button> </div>
                    <div className="flex-container flex-direction-row width-80 margin-auto">
                        <div style={{width:"50%"}}>
                            <button type="button" className="button-outline" onClick={openLogIn}> ACCOUNT EXISTS </button>
                        </div>
                        <div style={{width:"50%"}}>
                            {errors.email || errors.password ? ( <button type="submit" className="button-primary disabled" name="submit" id="submit" disabled={true} > SUBMIT </button> ) : ( <button type="submit" className="button-primary" value="send" name="submit" id="submit" > SUBMIT </button> )}
                        </div>
                    </div>
                </div>
            </form>
        <ToastContainer />
        </div>
    </>
  )
}

export default Signup