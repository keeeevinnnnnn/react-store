import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "commons/axios";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // let navigate = useNavigate();

  const onSubmit = async (data) => {
    // 1. 獲取表單數據
    // console.log(data);

    // 2. 處理登入邏輯
    try {
      const { email, password } = data;
      const res = await axios.post("/auth/login", { email, password });
      const jwToken = res.data;
      console.log("jwToken--------", jwToken);
    } catch (error) {}
  };

  return (
    <div className="login-wrapper">
      <form className="box login-box" onClick={handleSubmit(onSubmit)}>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              className={`input ${errors.email && "is-danger"}`}
              type="email"
              placeholder="Email"
              name="email"
              {...register("email", {
                required: "email is required",
                pattern: {
                  value: /[A-Za-z]{3}/,
                  message: "invalid email",
                },
              })}
            />
            {errors.email && (
              <p className="helper has-text-danger">{errors.email.message}</p>
            )}
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input"
              type="password"
              placeholder="Password"
              name="password"
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 6,
                  message: "camot be less than 6 digits ",
                },
              })}
            />
            {errors.password && (
              <p className="helper has-text-danger">
                {errors.password.message}
              </p>
            )}
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control">
            <button className="button is-success">Login</button>
          </p>
        </div>
      </form>
    </div>
  );
}
export default Login;
