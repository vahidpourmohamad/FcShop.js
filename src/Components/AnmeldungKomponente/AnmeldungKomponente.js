import React, { useContext, useState } from "react";
import "./AnmeldungKomponente.css";
import { useForm } from "../../Utility/Hooks";
import { useMutation } from "@apollo/client";
import { REGISTER_MUTATION } from "../../GraphQl/Mutations";
import { AuthContext } from "../../Context/AuthContext";
import { Navigate } from "react-router-dom";

export default function AnmeldungKomponente() {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState([]);

  function registerUserCallback() {
    console.log("CallBack");
    registerUser();
  }

  const { onChange, onSubmit, values } = useForm(registerUserCallback, {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [registerUser, { loading }] = useMutation(REGISTER_MUTATION, {
    update(proxy, { data: { registerUser: userData } }) {
      context.login(userData);
      Navigate("/");
    },
    onError({ graphQLErrors }) {
      setErrors(graphQLErrors);
    },
    variables: { registerInput: values },
  });

  return (
    <div className="Container-Center-col">
      <div className="font-bold font-xl TextRTL">Register</div>
      <form className="Container-Center-col" onSubmit={onSubmit}>
        <input
          className="font-xl registerInput "
          type={"Text"}
          placeholder="username"
          name="userName"
          onChange={onChange}
        ></input>
        <input
          className="font-xl registerInput "
          type={"text"}
          placeholder="Email"
          name="email"
          onChange={onChange}
        ></input>
        <input
          className="font-xl registerInput "
          type={"Text"}
          placeholder="password"
          name="password"
          onChange={onChange}
        ></input>
        <input
          className="font-xl registerInput "
          type={"Text"}
          name="confirmPassword"
          placeholder="confirm passWord"
          onChange={onChange}
        ></input>
        <button className="font-xl registerInput ">register</button>
        {errors.map((error) => {
          <div>{error}</div>;
        })}
      </form>
    </div>
  );
}
