import React, { Fragment, useContext, useState } from "react";
import "./AnmeldungKomponente.css";
import { useForm } from "../../Utility/Hooks";
import { useMutation } from "@apollo/client";
import { REGISTER_MUTATION } from "../../GraphQl/Mutations";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function AnmeldungKomponente() {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState([]);

  let navigate = useNavigate();
  function registerUserCallback() {
    console.log("test");
    console.log(values);
    registerUser();
  }

  const { onChange, onSubmit, values } = useForm(registerUserCallback, {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [registerUser, { loading }] = useMutation(REGISTER_MUTATION, {
    update(proxy, { data: { register: userData } }) {
      console.log("test")
      console.log(userData);
      context.login(userData);
      console.log("Data Inserted 2");
      navigate("/");
    },
    onError({ graphQLErrors }) {
      console.log(graphQLErrors);
      setErrors(graphQLErrors);
    },
    variables: { registerInput: values },
  });

  return (
    <Fragment>
      <div className="container">
        <div className="columns  is-multiline">
          <div className="column is-8  is-offset-2 has-text-centered">test</div>
          <div className="column is-8 is-offset-2 register ">
            <div className="columns">
              <div
                className="column has-text-centered is-multiline left "
                dir="rtl"
              >
                <div className="column is-full">
                  <p className="title is-3 colored ">
                    عضویت در باشگاه مبل ایران
                  </p>
                </div>
                <div className="column is-full">
                  <p className="subtitle is-4 ">
                    همیشه بهترین ها در کنار خود داشته باشید
                  </p>
                </div>
                <div className="column is-full">
                  <figure class="image is-256x256 is-1by1 ">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/Products/p3a.png`}
                    ></img>
                  </figure>
                </div>
              </div>

              <div className="column right " dir="rtl">
                <h1 className="title has-text-centered is-4">
                  ثبت نام کاربران
                </h1>
                <p className="description">
                  ما با شما قرار میگذاریم که هیچ یک از اطلاعات شما را در هیج جا
                  افشا نکنیم
                </p>
                <form className="box " onSubmit={onSubmit}>
                  <div className="field is-horizontal">
                    <div className="field-label is-normal">
                      <label for="" className="label">
                        نام
                      </label>
                    </div>
                    <div class="field-body">
                      <div class="field">
                        <div className="control is-expanded has-icons-left">
                          <input
                            className="input "
                            type="text"
                            placeholder="نام کاربری"
                            name="username"
                            onChange={onChange}
                          />
                          <span class="icon is-small is-left">
                            <i class="fa fa-user"></i>
                          </span>
                          <div className="help">این مورد اجباری است</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="field is-horizontal">
                    <div className="field-label is-normal">
                      <label className="label">ایمیل</label>
                    </div>
                    <div class="field-body">
                      <div class="field">
                        <p className="control is-expanded has-icons-left">
                          <input
                            className="input is-normal"
                            type="email"
                            placeholder="ایمیل"
                            name="email"
                            onChange={onChange}
                          />
                          <span class="icon is-small is-left">
                            <i class="fa fa-envelope"></i>
                          </span>
                          <div className="help">این مورد اجباری است</div>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="field is-horizontal">
                    <div className="field-label is-small">
                      <label className="label">کلمه عبور</label>
                    </div>
                    <div class="field-body">
                      <div class="field">
                        <p className="control is-expanded has-icons-left">
                          <input
                            className="input is-normal"
                            type="password"
                            placeholder="کلمه عبور"
                            name="password"
                            onChange={onChange}
                          />
                          <span class="icon is-small is-left">
                            <i class="fa fa-key"></i>
                          </span>
                          <div className="help">این مورد اجباری است</div>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="field is-horizontal">
                    <div className="field-label is-small">
                      <label className="label">تکــــرار کلمه عبور</label>
                    </div>
                    <div class="field-body">
                      <div class="field">
                        <p className="control is-expanded has-icons-left">
                          <input
                            className="input is-normal"
                            type="password"
                            placeholder="تکرار کلمه عبور"
                            name="confirmPassword"
                            onChange={onChange}
                          />
                          <span class="icon is-small is-left">
                            <i class="fa fa-key"></i>
                          </span>
                          <div className="help">
                            حتما با کلمه عبور یکسان باشد
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <label class="checkbox">
                        <input type="checkbox" />
                        با عضویت در وب سایت مبل تمام قوانین را می پذیرم
                      </label>
                    </div>
                  </div>
                  <div className="field">
                    <button className="button is-block  is-primary is-fullwidth is-medium">
                      ثبت نام
                    </button>
                  </div>

                  {/* <div className="field">{errorPrint()}</div> */}
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
    </Fragment>
  );
}
