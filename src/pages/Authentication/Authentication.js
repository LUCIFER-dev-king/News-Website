import React, { useRef, useState } from "react";
import "./authentication.css";
import firebase from "firebase/app";
import "firebase/auth";
import Toast from "../../components/Toast";

const SignIn = ({ history: { push } }) => {
  const signupForm = useRef();
  const signinForm = useRef();

  const [toastMsg, setToastMsg] = useState("");
  const [toastClasName, settoastClasName] = useState("");

  const changeSignUpFormState = () => {
    signinForm.current.className = "right-signin";
    signupForm.current.style.display = "none";
  };

  const changeSignInFormState = () => {
    signinForm.current.className = "right-signin active";
    setTimeout(() => {
      signupForm.current.style.display = "block";
    }, 1500);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSignUpSubmit = (event) => {
    event.preventDefault();

    if (email && password && name) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          console.log(res);
          //context.setUser({ email: res.user.email, uid: res.user.uid });
          setToastMsg("SignUp completed");
          settoastClasName("toast active");
          changeSignUpFormState();
        })
        .catch((err) => {
          console.log(err);
          //toast(err.message, { type: "error" });
        });
    }
  };

  const handleSignInSubmit = (event) => {
    event.preventDefault();

    if (email && password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
          setToastMsg("Signed In is successfully");
          settoastClasName("toast active");
          console.log(res);
          //context.setUser({ email: res.user.email, uid: res.user.uid });
          var user = {
            email: res.user.email,
            uid: res.user.uid,
          };
          localStorage.setItem("user", JSON.stringify(user));

          setTimeout(() => {
            push("/");
          }, 3000);
        })
        .catch((err) => {
          console.log(err);
          //toast(err.message, { type: "error" });
        });
    }

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        //context.setUser({ email: res.user.email, uid: res.user.uid });
      })
      .catch((err) => {
        console.log(err);
        //toast(err.message, { type: "error" });
      });
  };

  return (
    <div className='split-screen'>
      {toastMsg && <Toast toastTitle={toastMsg} className={toastClasName} />}
      <div className='left'></div>
      <div className='right'>
        <div ref={signupForm} className='right-signup'>
          <form onSubmit={handleSignUpSubmit}>
            <section className='right-content'>
              <h2>Sign Up</h2>
              <div className='signup-container'>
                <p>
                  Don't have an accout,{" "}
                  <a href='#' onClick={() => changeSignUpFormState()}>
                    Sign In
                  </a>
                </p>
              </div>
            </section>
            <div className='input-container name'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                name='name'
                id='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='input-container email'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='input-container password'>
              <label htmlFor='password'>Paaswrod</label>
              <input
                type='password'
                name='password'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className='signup-btn' type='submit'>
              Sign Up
            </button>
          </form>
        </div>
        <div ref={signinForm} className='right-signin'>
          <form onSubmit={handleSignInSubmit}>
            <section className='right-content'>
              <h2>Sign In</h2>
              <div className='signup-container'>
                <p>
                  Don't have an accout,{" "}
                  <a href='#' onClick={() => changeSignInFormState()}>
                    Sign Up
                  </a>
                </p>
              </div>
            </section>
            <div className='input-container email'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='input-container password'>
              <label htmlFor='password'>Paaswrod</label>
              <input
                type='password'
                name='password'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className='signin-btn' type='submit'>
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
