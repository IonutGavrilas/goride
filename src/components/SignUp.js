import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import './SignUp.css';

const schema = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  licenseNumber: yup.string().required("Driver’s license number is required"),
  phone: yup.string().matches(/^[0-9]{10}$/, "Phone number must be 10 digits").required("Phone number is required"),
  otp: yup.string().matches(/^[0-9]{6}$/, "OTP must be 6 digits").required("OTP is required"),
});

const AuthForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [otpSent, setOtpSent] = useState(false);

  const sendOtp = () => {
    alert("OTP sent to your phone number!");
    setOtpSent(true);
  };

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Sign-up successful!");
  };

  const toggleForm = () => {
    navigate("/signup");
  };

  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="form-wrapper">
        <h2 className="form-title">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <div className="form-group">
            <label>First Name</label>
            <input {...register("fullName")} className="input" placeholder="Introduceti numele" required/>
            <p className="error-message">{errors.fullName?.message}</p>
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input {...register("fullName")} className="input" placeholder="Introduceti prenumele" required/>
            <p className="error-message">{errors.fullName?.message}</p>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" {...register("email")} className="input" placeholder="Introduceti emailul" required />
            <p className="error-message">{errors.email?.message}</p>
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" {...register("password")} className="input" placeholder="Introduceti parola" required/>
            <p className="error-message">{errors.password?.message}</p>
          </div>

          <div className="form-group">
          <label>Driver License</label>
            <input type="file" {...register("licenseImage")} className="input" placeholder="Incarcati permisul de conducere" required accept="image/*" />
            <p className="error-message">{errors.licenseImage?.message}</p>
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input type="text" {...register("phone")} className="input" placeholder="Introduceti numarul de telefon" required/>
            <p className="error-message">{errors.phone?.message}</p>
            {!otpSent && (
              <button type="button" onClick={sendOtp} className="otp-button">
                Send OTP
              </button>
            )}
          </div>

          {otpSent && (
            <div className="form-group">
              <label>OTP</label>
              <input type="text" {...register("otp")} className="input" />
              <p className="error-message">{errors.otp?.message}</p>
            </div>
          )}

          <button type="submit" className="submit-button">
            Sign Up
          </button>
        </form>
        <button className="toggle-button" onClick={toggleForm}>
          Already have an account? Login here!
      </button>
      </div>
    </div>
  );
};

export default AuthForm;