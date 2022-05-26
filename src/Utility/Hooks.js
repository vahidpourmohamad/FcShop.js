import { useState } from "react";

export const useForm = (callback, initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const onChange = (event) => {
    if (event.target.files[0]) {
      setValues({ ...values, [event.target.name]: event.target.files[0] });
    } else {
      setValues({ ...values, [event.target.name]: event.target.value });
    }
    
  };

  const onSubmit = (event) => {
    event.preventDefault();
    callback();
  };

  return {
    onChange,
    onSubmit,
    values,
  };
};
