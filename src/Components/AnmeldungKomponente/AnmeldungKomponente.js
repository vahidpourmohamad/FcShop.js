import React, { useContext, useState } from "react";
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
    <div className="Container-Center-col">
      <div className="font-bold font-xl TextRTL">Register</div>
      <form className="Container-Center-col" onSubmit={onSubmit}>
        <div className="control">
          <input
            className="input is-normal  is-hovered "
            type={"Text"}
            placeholder="username"
            name="username"
            onChange={onChange}
          ></input>
        </div>
        <div className="control">
          <input
            className="input is-normal  is-hovered  "
            type={"text"}
            placeholder="Email"
            name="email"
            onChange={onChange}
          ></input>
        </div>
        <div className="control">
          <input
            className="input is-normal   is-hovered"
            type={"Text"}
            placeholder="password"
            name="password"
            onChange={onChange}
          ></input>
        </div>
        <div className="control">
          <input
            className="input is-normal  is-hovered  "
            type={"Text"}
            name="confirmPassword"
            placeholder="confirm passWord"
            onChange={onChange}
          ></input>
        </div>
        <div className="control">
          <button className="button is-medium is-responsive">ثبت نام</button>
        </div>
        {errors.map((error) => {
          <div>{error}</div>;
        })}
      </form>
    </div>
  );
}
