import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import './SignUp.css';

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  licenseNumber: yup.string().required("Driver’s license number is required"),
  phone: yup.string().matches(/^[0-9]{10}$/, "Phone number must be 10 digits").required("Phone number is required"),
  otp: yup.string().matches(/^[0-9]{6}$/, "OTP must be 6 digits").required("OTP is required"),
});

const SignUp = ({ onToggle }) => {
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const sendOtp = () => {
    alert("OTP sent to your phone number!");
    setOtpSent(true);
  };

  const onSubmit = async (data) => {
    console.log("Form Data:", data);

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      console.log(result);
      alert("Signup successful");
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <h2 className="form-title">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <div className="form-group">
            <label>First Name</label>
            <input {...register("fullName")} className="input" placeholder="Introduceti numele" />
            <p className="error-message">{errors.firstName?.message}</p>
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input {...register("fullName")} className="input" placeholder="Introduceti prenumele" />
            <p className="error-message">{errors.lastName?.message}</p>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" {...register("email")} className="input" placeholder="Introduceti emailul" />
            <p className="error-message">{errors.email?.message}</p>
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" {...register("password")} className="input" placeholder="Introduceti parola" />
            <p className="error-message">{errors.password?.message}</p>
          </div>

          <div className="form-group">
            <label>Driver License</label>
            <input type="file" {...register("licenseImage")} className="input" accept="image/*" />
            <p className="error-message">{errors.licenseImage?.message}</p>
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input type="text" {...register("phone")} className="input" placeholder="Introduceti numarul de telefon" />
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

        <button className="toggle-button" onClick={onToggle}>
          Ai deja un cont?
        </button>
      </div>
    </div>
  );
};

export default SignUp;
