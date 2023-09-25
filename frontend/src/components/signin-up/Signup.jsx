// Importing required components
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import SignupService from "../../services/signin-up/SignupService";
import logo from "../../assets/images/login_bg.png";
import image2 from "../../assets/images/image2.png";
import "../../App.css";
import { toast } from "react-toastify";

// Creating signup component
const Signup = () => {
  // Usesate hooks which initializs state value as an empty string
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [dob, setDob] = useState("");
  const [isOver18, setIsOver18] = useState(true);
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const navigate = useNavigate();

  function checkBreakpoint() {
    if (window.matchMedia("(max-width: 600px)").matches) {
      document
        .getElementById("my-div")
        .classList.remove("login-image-container2");
      document.getElementById("my-div").classList.add("new");
    } else {
      document.getElementById("my-div").classList.remove("new");
      document.getElementById("my-div").classList.add("login-image-container2");
    }
  }

  window.addEventListener("resize", checkBreakpoint);

  const validateEmail = (inputEmail) => {
    console.log(inputEmail);
    const jmanRegex = /^[a-zA-Z0-9._%+-]+@jmangroup\.com$/;
    if (jmanRegex.test(inputEmail) || inputEmail === "") {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    validateEmail(inputEmail);
  };

  const checkDateValidity = (inputDate) => {
    const dateParts = inputDate.split("-");
    if (dateParts.length === 3) {
      const day = parseInt(dateParts[2], 10);
      const month = parseInt(dateParts[1], 10);
      const year = parseInt(dateParts[0], 10);

      const inputDateObj = new Date(year, month - 1, day);
      const currentDate = new Date();
      const eighteenYearsAgo = new Date(
        currentDate.getFullYear() - 18,
        currentDate.getMonth(),
        currentDate.getDate()
      );

      if (inputDateObj < eighteenYearsAgo || inputDateObj === "") {
        setIsOver18(true);
      } else {
        setIsOver18(false);
      }
    } else {
      setIsOver18(false); // Invalid date format
    }
  };

  const handleDobChange = (e) => {
    const inputDob = e.target.value;
    console.log(inputDob);
    setDob(inputDob);
    checkDateValidity(inputDob);
  };

  // Handlesignup function which performs some validations and calls backend server for storing data in database
  const handleSignUp = async (e) => {
    e.preventDefault();
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&!])[A-Za-z\d@#$%^&!]{8,}$/;

    if (password.length > 7) {
      if (passwordRegex.test(password)) {
        if (password !== confirmpassword) {
          setPasswordsMatch(false);
        } else {
          SignupService.userRegistration(
            firstname,
            lastname,
            email,
            dob,
            password
          )
            .then((res) => {
              if (res.status === 201) {
                toast.success("Registered success", {
                  position: "top-right",
                  autoClose: 900,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });

                navigate("/");
              } else if (res.status === 200) {
                toast.warning("Email is already existed..", {
                  position: "top-right",
                  autoClose: 800,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
              }
            })
            .catch((error) => {
              console.error("Fetch error:", error);
              toast.error("An error occurred during registration.");
            });
        }
      } else {
        toast.warning(
          "Password must contain Capital, Small, Special Character and Number",
          {
            position: "top-right",
            autoClose: 800,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined, 
            theme: "light",
          }
        );
      }
    } else {
      toast.warning("Password should be atleast 8 characters", {
        position: "top-right",
        autoClose: 800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="login-container">
      <div className="login-image-container2" id="my-div">
        <img src={logo} alt="" />
      </div>
      <div className="login-form2">
        <div className="my-image">
          <img src={image2} alt="" />
        </div>
        <form className="login-form-container2" onSubmit={handleSignUp}>
          <h2>Sign Up</h2>
          <input
            type="text"
            className="input-field"
            placeholder="Firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />
          <input
            type="text"
            className="input-field"
            placeholder="Lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
          />
          <input
            type="email"
            className={isValidEmail ? "input-field" : "red-border"}
            placeholder="xyz@jmangroup.com"
            value={email}
            onChange={handleEmailChange}
            required
          />

          <input
            type="date"
            className={isOver18 ? "input-field" : "red-border"}
            placeholder="date of birth"
            value={dob}
            onChange={handleDobChange}
            required
          />
          {/* {!isOver18 && <p style={{ color: "red",width:"100px" }}>DOB Invalid </p>} */}

          <input
            type="password"
            className="input-field"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />

          <input
            type="password"
            className={passwordsMatch ? "input-field" : "red-border"}
            placeholder=" confirm Password"
            value={confirmpassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setPasswordsMatch(e.target.value === password);
            }}
            required
          />

          <button type="submit" class="login-btn">
            Sign Up
          </button>
          <br />
          <p>
            Already have an account  <Link to="/">Click here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
