import { useState } from "react";

export const useForm = ({ validate }) => ({ values }) => {
  const [state, setState] = useState({
    values: values || {},
    errors: {},
    touched: {}
  });

  const setError = (value) => {
    if (typeof(validate) === 'function') {
      const errors = validate({ values: state.values });
      return { ...state.errors, [value]: errors[value] }
    } else {
      return {};
    }
  }

  const handleInput = (name, value) => {
    setState({
      ...state,
      values: {
        ...state.values,
        [name]: value,
      }
    });
  }

  const reset = () => {
    setState({
      values: {},
      errors: {},
    })
  }

  const handleInputTouch = (name) => {
    const errors = setError(name);
    const touched = {
      ...state.touched,
      [name]: true,
    }
    setState({
      ...state,
      errors,
      touched,
    });
  }

  return {
    ...state,
    handleInput,
    handleInputTouch,
    reset,
  }
}