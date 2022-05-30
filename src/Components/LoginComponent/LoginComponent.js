import { useMutation } from "@apollo/client";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { loginGQL } from "../../GraphQl/Mutations";

import { useForm } from "../../Utility/Hooks";
import "./LoginComponent.css";
export default function LoginComponent() {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const { onChange, onSubmit, values } = useForm(loginFunc, {
    userName: "",
    password: "",
  });

  const { userName, password } = values;

  const [loginUser, { loading }] = useMutation(loginGQL, {
    update(proxy, { data: { login: userData } }) {
      
      context.login(userData);
      navigate("/");
    },
    onError({ graphQLErrors }) {
      setErrors(graphQLErrors);
     
    },
    variables: { username: userName, password: password },
  });

  function loginFunc() {
    
    loginUser();
  }

  function errorPrint() {
  
    return errors.map((error, id) => (
      <div className="control">
        <div class="notification is-danger ">
          <button class="delete" onClick={errorClear}></button>
          {error.message}
        </div>
      </div>
    ));
  }
  const errorClear = (event) => {
    event.preventDefault();
    setErrors([]);
  };
  return (
    <Fragment>
      <div className="container">
        <div className="columns  is-multiline">
          <div className="column is-8  is-offset-2 has-text-centered">test</div>
          <div className="column is-6 is-offset-3 register has-text-centered">
            <div className="columns">
              <div className="column  is-multiline left has-text-centered">
                <div className="column is-full">
                  <p className="title is-3 colored has-text-centered">
                    همیشه بهترین خرید
                  </p>
                </div>
                <div className="column is-full">
                  <p className="subtitle is-4 colored has-text-centered">
                    مبلمان سوفاست همیشه در کنار شماست
                  </p>
                </div>
                <div className="column is-full">
                  <figure class="image is-256x256 is-1by1 has-text-centered">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/Products/p5a.png`}
                    ></img>
                  </figure>
                </div>
              </div>

              <div className="column right has-text-centered">
                <h1 className="title has-text-centered is-4">ورود کاربران</h1>
                <p className="description">
                  با ورود به وب سایت می توانید در تخفیف های مخصوص خود مطلع شوید
                </p>
                <form className="box " onSubmit={onSubmit}>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-normal"
                        type="text"
                        placeholder="نام کاربری"
                        name="userName"
                        onChange={onChange}
                      />
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-normal"
                        type="password"
                        placeholder="کلمه عبود"
                        name="password"
                        onChange={onChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <button className="button is-block  is-primary is-fullwidth is-medium">
                        ورود
                      </button>
                    </div>
                  </div>
                  <div className="field">{errorPrint()}</div>
                  <br />
                  <small>
                    <em>تمام حقوق این وب سایت محفوظ می باشد</em>
                  </small>
                </form>
              </div>
            </div>
          </div>
          <div className="column is-6 is-offset-3">
            <br />
            <nav className="level">
              <div className="level-left">
                <div className="level-item">
                  <span className="icon">
                    <i className="fa fa-twitter"></i>
                  </span>
                  &emsp;
                  <span className="icon">
                    <i className="fa fa-facebook"></i>
                  </span>
                  &emsp;
                  <span className="icon">
                    <i className="fa fa-instagram"></i>
                  </span>
                  &emsp;
                  <span className="icon">
                    <i className="fa fa-github"></i>
                  </span>
                  &emsp;
                  <span className="icon">
                    <i className="fa fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div className="level-right">
                <small
                  className="level-item"
                  style={{ color: "var(--dark-blue)" }}
                >
                  &copy; تمام حقوق محفوظ است
                </small>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* <section className="hero" dir="RTL">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                <form action="" className="box">
                  <div className="field">
                    <label for="" className="label">
                      نام کاربری
                    </label>
                    <div className="control has-icons-left">
                      <input
                        type="email"
                        placeholder="User Name"
                        className="input"
                        required
                      />
                      <span className="icon is-small is-left">
                        <i className="fa fa-user"></i>
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <label for="" className="label">
                      کلمه عبور
                    </label>
                    <div className="control has-icons-left">
                      <input
                        type="password"
                        placeholder="*******"
                        className="input"
                        required
                      />
                      <span className="icon is-small is-left">
                        <i className="fa fa-lock"></i>
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <label for="" className="checkbox">
                      <input type="checkbox"/>
                       من را به خاطر نگه دار  
                    </label>
                  </div>
                  <div className="field">
                    <button className="button is-success">ورود</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </Fragment>
  );
}
